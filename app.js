
// ---------- storage ----------
const STORAGE_KEY = 'cmdb_progress_v1';
let progress = {};

function hasClaudeStorage(){
  return typeof window.storage !== 'undefined' && window.storage !== null;
}

async function loadProgress(){
  try{
    if(hasClaudeStorage()){
      const res = await window.storage.get(STORAGE_KEY, false);
      if(res && res.value){ progress = JSON.parse(res.value); }
    } else {
      const raw = localStorage.getItem(STORAGE_KEY);
      if(raw){ progress = JSON.parse(raw); }
    }
  }catch(e){ progress = {}; }
  refreshHome();
}

async function saveProgress(){
  try{
    if(hasClaudeStorage()){
      await window.storage.set(STORAGE_KEY, JSON.stringify(progress), false);
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }catch(e){ console.error('storage save failed', e); }
}

// ---------- mock exam history ----------
const MOCK_HISTORY_KEY = 'cmdb_mock_history_v1';
let mockHistory = [];

async function loadMockHistory(){
  try{
    if(hasClaudeStorage()){
      const res = await window.storage.get(MOCK_HISTORY_KEY, false);
      if(res && res.value){ mockHistory = JSON.parse(res.value); }
    } else {
      const raw = localStorage.getItem(MOCK_HISTORY_KEY);
      if(raw){ mockHistory = JSON.parse(raw); }
    }
  }catch(e){ mockHistory = []; }
  renderMockHistoryList();
}

async function saveMockHistory(){
  try{
    if(hasClaudeStorage()){
      await window.storage.set(MOCK_HISTORY_KEY, JSON.stringify(mockHistory), false);
    } else {
      localStorage.setItem(MOCK_HISTORY_KEY, JSON.stringify(mockHistory));
    }
  }catch(e){ console.error('mock history save failed', e); }
}

// ---------- cross-device sync code ----------
// v3 format: gzip-compressed, short-key JSON, base64-encoded. Falls back to older
// formats on import so existing codes (v2 bundled, v1 legacy flat) still work.

function uint8ToBase64(bytes){
  let binary = '';
  const chunkSize = 0x8000;
  for(let i=0; i<bytes.length; i+=chunkSize){
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i+chunkSize));
  }
  return btoa(binary);
}

function base64ToUint8(b64){
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for(let i=0; i<binary.length; i++){ bytes[i] = binary.charCodeAt(i); }
  return bytes;
}

function compactMockHistoryQuestionRecord(record, q){
  // migrate old text-based option records to compact index-based format
  if(record.dragdrop || record.si !== undefined || !record.options) return record;
  const si = record.selected.map(opt => record.options.indexOf(opt)).filter(i=>i>=0);
  const ci = record.correct.map(opt => record.options.indexOf(opt)).filter(i=>i>=0);
  return { id: record.id, dragdrop: record.dragdrop, si, ci, isCorrect: record.isCorrect };
}

function compactMockHistory(history){
  return history.map(attempt => ({
    ...attempt,
    questions: attempt.questions.map(record=>{
      const q = QUESTIONS.find(x=>x.id === record.id);
      return q ? compactMockHistoryQuestionRecord(record, q) : record;
    })
  }));
}

function exportSyncCode(){
  // pack progress into short-key array tuples: [attempts, wrong, right, streak]
  const p = {};
  Object.keys(progress).forEach(qid=>{
    const rec = progress[qid];
    p[qid] = [rec.attempts, rec.wrong, rec.right, rec.streak];
  });
  const compactBundle = { v: 3, p, m: compactMockHistory(mockHistory) };
  const json = JSON.stringify(compactBundle);
  const compressed = pako.deflate(json);
  return uint8ToBase64(compressed);
}

function expandProgress(shortProgress){
  const full = {};
  Object.keys(shortProgress).forEach(qid=>{
    const [attempts, wrong, right, streak] = shortProgress[qid];
    full[qid] = { attempts, wrong, right, streak };
  });
  return full;
}

function importSyncCode(code){
  const trimmed = code.trim();

  // Try v3: gzip-compressed short-key format
  try{
    const bytes = base64ToUint8(trimmed);
    const inflatedBytes = pako.inflate(bytes);
    const json = new TextDecoder('utf-8').decode(inflatedBytes);
    const parsed = JSON.parse(json);
    if(parsed && parsed.v === 3 && parsed.p){
      progress = expandProgress(parsed.p);
      mockHistory = parsed.m || [];
      saveProgress();
      saveMockHistory();
      refreshHome();
      renderMockHistoryList();
      return true;
    }
  }catch(e){ /* not v3, fall through to older formats */ }

  // Fall back to v2 (bundled, uncompressed) or v1 (legacy flat progress-only)
  try{
    const json = decodeURIComponent(escape(atob(trimmed)));
    const parsed = JSON.parse(json);
    if(parsed && typeof parsed === 'object' && 'progress' in parsed && 'mockHistory' in parsed){
      progress = parsed.progress;
      mockHistory = parsed.mockHistory;
    } else {
      progress = parsed;
    }
    saveProgress();
    saveMockHistory();
    refreshHome();
    renderMockHistoryList();
    return true;
  }catch(e){
    return false;
  }
}

function getStatus(id){
  const p = progress[id];
  if(!p || p.attempts === 0 || p.attempts === undefined) return 'new';
  if(p.streak >= 2) return 'mastered';
  if(p.wrong > 0) return 'weak';
  return 'learning';
}

function recordAnswer(id, isCorrect){
  if(!progress[id]) progress[id] = {attempts:0, wrong:0, right:0, streak:0};
  const p = progress[id];
  p.attempts += 1;
  if(isCorrect){ p.right += 1; p.streak += 1; }
  else{ p.wrong += 1; p.streak = 0; }
  saveProgress();
  refreshHome();
}

// ---------- helpers ----------
function escapeHtml(s){
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// very small markdown table + line break renderer for question text
function renderQuestionText(raw){
  let text = raw;
  // split into lines, detect markdown tables
  const lines = text.split('\n');
  let html = '';
  let i = 0;
  while(i < lines.length){
    const line = lines[i];
    if(line.trim().startsWith('|') && lines[i+1] && lines[i+1].includes('---')){
      // table block
      let tableLines = [line];
      let j = i+1;
      tableLines.push(lines[j]); j++;
      while(j < lines.length && lines[j].trim().startsWith('|')){ tableLines.push(lines[j]); j++; }
      html += renderTable(tableLines);
      i = j;
    } else {
      html += escapeHtml(line) + '\n';
      i++;
    }
  }
  return html;
}

function renderTable(tableLines){
  const rows = tableLines.filter((l,idx)=>idx!==1).map(l=>{
    return l.trim().replace(/^\||\|$/g,'').split('|').map(c=>c.trim());
  });
  let html = '<table>';
  rows.forEach((r,idx)=>{
    html += idx===0 ? '<tr>' + r.map(c=>`<th>${escapeHtml(c)}</th>`).join('') + '</tr>'
                    : '<tr>' + r.map(c=>`<td>${escapeHtml(c)}</td>`).join('') + '</tr>';
  });
  html += '</table>';
  return html;
}

function shuffle(arr){
  const a = arr.slice();
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

// ---------- question rendering (shared by practice/weak/mock) ----------
let qCounter = 0;
function renderQuestionCard(q, opts){
  qCounter++;
  const uid = 'q'+qCounter+'_'+q.id;
  const status = getStatus(q.id);
  let inner = `
    <div class="qmeta">
      <span class="qid">#${q.id}</span>
      <span class="qstatus-badge ${status}">${status.toUpperCase()}</span>
    </div>
    <div class="qtext">${renderQuestionText(q.question)}</div>
  `;

  if(q.dragdrop){
    inner += renderDragDropInputs(q, uid);
  } else {
    inner += renderOptionInputs(q, uid);
  }

  if(!opts.deferFeedback){
    inner += `<div class="btn-row"><button class="btn primary" id="${uid}_submit">Check Answer</button></div>`;
    inner += `<div id="${uid}_feedback"></div>`;
  }

  const card = document.createElement('div');
  card.className = 'qcard';
  card.id = uid;
  card.innerHTML = inner;

  if(q.dragdrop){
    initDragDrop(card, uid);
  }

  if(!opts.deferFeedback){
    card.querySelector('#'+uid+'_submit').addEventListener('click', ()=>{
      gradeQuestion(q, uid, opts.onGraded);
    });
  }
  return card;
}

const optionOrderMap = {};

function renderOptionInputs(q, uid){
  const inputType = q.multi ? 'checkbox' : 'radio';
  const shuffledOptions = shuffle(q.options);
  optionOrderMap[uid] = shuffledOptions;
  let html = '<div class="opt-list">';
  shuffledOptions.forEach((opt,idx)=>{
    const optId = uid+'_opt'+idx;
    html += `
      <label class="opt" for="${optId}" data-optidx="${idx}">
        <input type="${inputType}" name="${uid}_group" id="${optId}" value="${idx}">
        <span>${escapeHtml(opt)}</span>
      </label>
    `;
  });
  html += '</div>';
  return html;
}

let dndCounter = 0;
function renderDragDropInputs(q, uid){
  const pairs = q.correct.map(c=>{
    const [left, right] = c.split('→').map(s=>s.trim());
    return {left, right};
  });
  const distractors = q.distractors || [];
  const allChipLabels = shuffle(pairs.map(p=>p.left).concat(distractors));
  dndCounter++;
  const poolId = `${uid}_pool`;

  let html = `<div class="dnd-hint">DRAG EACH ITEM TO ITS MATCH${distractors.length ? ' — SOME ITEMS MAY NOT APPLY' : ''}</div>`;
  html += `<div class="dnd-pool" id="${poolId}">`;
  allChipLabels.forEach((label,idx)=>{
    html += `<div class="dnd-chip" draggable="false" data-value="${escapeHtml(label)}" id="${uid}_chip${idx}">${escapeHtml(label)}</div>`;
  });
  html += `</div>`;
  html += `<div class="dnd-targets">`;
  pairs.forEach((p,idx)=>{
    html += `<div class="dnd-target">
      <div class="dnd-slot" id="${uid}_slot${idx}" data-correct="${escapeHtml(p.left)}"></div>
      <div class="dnd-target-label">${escapeHtml(p.right)}</div>
    </div>`;
  });
  html += `</div>`;
  return html;
}

function initDragDrop(card, uid){
  const chips = card.querySelectorAll('.dnd-chip');
  chips.forEach(chip=>attachDragHandlers(chip, card));
}

function attachDragHandlers(chip, card){
  chip.addEventListener('pointerdown', (e)=>{
    if(chip.closest('.dnd-slot') && chip.closest('.dnd-slot').classList.contains('correct')) return;
    if(chip.closest('.dnd-slot') && chip.closest('.dnd-slot').classList.contains('incorrect')) return;
    e.preventDefault();
    startDrag(chip, card, e);
  });
}

function startDrag(chip, card, startEvent){
  const originSlot = chip.closest('.dnd-slot');
  const originPool = chip.closest('.dnd-pool');
  chip.classList.add('dragging');

  const ghost = document.createElement('div');
  ghost.className = 'dnd-ghost';
  ghost.textContent = chip.dataset.value;
  document.body.appendChild(ghost);

  function positionGhost(x,y){
    ghost.style.left = (x - ghost.offsetWidth/2) + 'px';
    ghost.style.top = (y - ghost.offsetHeight/2) + 'px';
  }
  positionGhost(startEvent.clientX, startEvent.clientY);

  let lastSlotHover = null;

  function onMove(e){
    positionGhost(e.clientX, e.clientY);
    ghost.style.display = 'none';
    const target = document.elementFromPoint(e.clientX, e.clientY);
    ghost.style.display = '';
    const slot = target ? target.closest('.dnd-slot') : null;
    if(lastSlotHover && lastSlotHover !== slot){ lastSlotHover.classList.remove('drag-over'); }
    if(slot && card.contains(slot)){ slot.classList.add('drag-over'); }
    lastSlotHover = slot;
  }

  function onUp(e){
    document.removeEventListener('pointermove', onMove);
    document.removeEventListener('pointerup', onUp);
    ghost.remove();
    chip.classList.remove('dragging');
    if(lastSlotHover) lastSlotHover.classList.remove('drag-over');

    const target = document.elementFromPoint(e.clientX, e.clientY);
    const dropSlot = target ? target.closest('.dnd-slot') : null;
    const dropPool = target ? target.closest('.dnd-pool') : null;

    if(dropSlot && card.contains(dropSlot) && !dropSlot.classList.contains('correct') && !dropSlot.classList.contains('incorrect')){
      // if slot already occupied, send its chip back to origin (pool or swap)
      const existingChip = dropSlot.querySelector('.dnd-chip');
      if(existingChip && existingChip !== chip){
        if(originSlot){ originSlot.appendChild(existingChip); }
        else if(originPool){ originPool.appendChild(existingChip); }
      }
      dropSlot.innerHTML = '';
      dropSlot.appendChild(chip);
      dropSlot.classList.add('filled');
      if(originSlot && originSlot !== dropSlot){ originSlot.classList.remove('filled'); }
    } else if(dropPool && card.contains(dropPool)){
      dropPool.appendChild(chip);
      if(originSlot){ originSlot.classList.remove('filled'); }
    } else {
      // dropped outside any valid target — snap back
      if(originSlot){ originSlot.appendChild(chip); }
      else if(originPool){ originPool.appendChild(chip); }
    }
  }

  document.addEventListener('pointermove', onMove);
  document.addEventListener('pointerup', onUp);
}

function gradeQuestion(q, uid, onGraded){
  const card = document.getElementById(uid);
  let isCorrect = false;

  if(q.dragdrop){
    const slots = card.querySelectorAll('.dnd-slot');
    let allCorrect = true;
    slots.forEach(slot=>{
      const correctVal = slot.getAttribute('data-correct');
      const chip = slot.querySelector('.dnd-chip');
      const placedVal = chip ? chip.dataset.value : null;
      if(placedVal === correctVal){ slot.classList.add('correct'); }
      else {
        slot.classList.add('incorrect');
        allCorrect = false;
        if(!chip){
          const filler = document.createElement('div');
          filler.className = 'dnd-chip';
          filler.textContent = correctVal + ' (missed)';
          filler.style.opacity = '0.6';
          slot.appendChild(filler);
        }
      }
    });
    isCorrect = allCorrect;
  } else {
    const optEls = card.querySelectorAll('.opt');
    const inputs = card.querySelectorAll('.opt input');
    const selectedIdx = [];
    inputs.forEach((inp,idx)=>{ if(inp.checked) selectedIdx.push(idx); inp.disabled = true; });
    const displayedOptions = optionOrderMap[uid] || q.options;
    const correctIdx = displayedOptions.map((o,idx)=>q.correct.includes(o) ? idx : -1).filter(i=>i>=0);

    const selectedSet = new Set(selectedIdx);
    const correctSet = new Set(correctIdx);
    isCorrect = selectedSet.size === correctSet.size && [...selectedSet].every(i=>correctSet.has(i));

    optEls.forEach((el,idx)=>{
      el.classList.add('disabled');
      if(correctSet.has(idx)) el.classList.add('correct');
      else if(selectedSet.has(idx)) el.classList.add('incorrect');
    });
  }
  card.classList.add('graded');

  const submitBtn = document.getElementById(uid+'_submit');
  if(submitBtn) submitBtn.disabled = true;

  const fbDiv = document.getElementById(uid+'_feedback');
  if(fbDiv){
    fbDiv.innerHTML = `
      <div class="feedback ${isCorrect?'correct':'incorrect'}">
        <div class="feedback-title">${isCorrect ? 'Correct' : 'Not quite'}</div>
        ${q.explanation ? `<div class="feedback-explain">${escapeHtml(q.explanation)}</div>` : ''}
      </div>
      <div class="btn-row" style="margin-top:12px;"><button class="btn primary" id="${uid}_next">Next</button></div>
    `;
    document.getElementById(uid+'_next').addEventListener('click', ()=>{
      recordAnswer(q.id, isCorrect);
      if(onGraded) onGraded(isCorrect);
    });
  } else if(onGraded){
    recordAnswer(q.id, isCorrect);
    onGraded(isCorrect);
  }
}

// ---------- HOME ----------
function refreshHome(){
  const counts = {new:0, learning:0, weak:0, mastered:0};
  QUESTIONS.forEach(q=>{ counts[getStatus(q.id)]++; });
  document.getElementById('count-new').textContent = counts.new;
  document.getElementById('count-learning').textContent = counts.learning;
  document.getElementById('count-weak').textContent = counts.weak;
  document.getElementById('count-mastered').textContent = counts.mastered;
  document.getElementById('home-total-tag').textContent = `${counts.mastered} / ${QUESTIONS.length} mastered`;
  document.getElementById('weak-card-sub').textContent = counts.weak > 0
    ? `${counts.weak} question${counts.weak===1?'':'s'} waiting for review, hardest first.`
    : `Nothing in the weak queue right now — nice work.`;
}

// ---------- PRACTICE ----------
let practiceQueue = [];
let practiceIdx = 0;
let practiceSession = {correct:0, wrong:0};

function buildPracticeQueue(size){
  const nonMastered = shuffle(QUESTIONS.filter(q=>getStatus(q.id) !== 'mastered'));
  const mastered = shuffle(QUESTIONS.filter(q=>getStatus(q.id) === 'mastered'));
  let pool = nonMastered.length > 0 ? nonMastered.concat(mastered) : shuffle(QUESTIONS);
  if(size !== 'all'){
    pool = pool.slice(0, Math.min(parseInt(size,10), pool.length));
  }
  practiceQueue = pool;
  practiceIdx = 0;
  practiceSession = {correct:0, wrong:0};
}

function showPracticeQuestion(){
  const container = document.getElementById('practice-question-container');
  container.innerHTML = '';
  document.getElementById('practice-progress-label').textContent = `${Math.min(practiceIdx+1,practiceQueue.length)} / ${practiceQueue.length}`;
  document.getElementById('practice-progress-fill').style.width = `${(practiceIdx/practiceQueue.length)*100}%`;

  if(practiceIdx >= practiceQueue.length){
    container.innerHTML = `
      <div class="empty-state">
        <h3>Batch complete</h3>
        <p>${practiceSession.correct} correct, ${practiceSession.wrong} missed this round.</p>
        <div class="btn-row" style="justify-content:center;margin-top:14px;">
          <button class="btn primary" id="practice-batch-again">Pick another batch</button>
        </div>
      </div>`;
    document.getElementById('practice-batch-again').addEventListener('click', ()=>{
      document.getElementById('practice-session').style.display = 'none';
      document.getElementById('practice-batch-picker').style.display = 'block';
    });
    return;
  }
  const q = practiceQueue[practiceIdx];
  const card = renderQuestionCard(q, {onGraded:(isCorrect)=>{
    if(isCorrect) practiceSession.correct++; else practiceSession.wrong++;
    practiceIdx++; showPracticeQuestion();
  }});
  container.appendChild(card);
}

document.querySelectorAll('#practice-batch-buttons .batch-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    buildPracticeQueue(btn.dataset.size);
    document.getElementById('practice-batch-picker').style.display = 'none';
    document.getElementById('practice-session').style.display = 'block';
    showPracticeQuestion();
  });
});
document.getElementById('practice-change-batch').addEventListener('click', ()=>{
  document.getElementById('practice-session').style.display = 'none';
  document.getElementById('practice-batch-picker').style.display = 'block';
});

// ---------- WEAK QUEUE ----------
let weakQueue = [];
let weakIdx = 0;
let weakSession = {correct:0, wrong:0};

function buildWeakQueue(size){
  let weakQs = QUESTIONS.filter(q=>getStatus(q.id)==='weak');
  weakQs.sort((a,b)=>(progress[b.id]?.wrong||0) - (progress[a.id]?.wrong||0));
  if(size !== 'all'){
    weakQs = weakQs.slice(0, Math.min(parseInt(size,10), weakQs.length));
  }
  weakQueue = weakQs;
  weakIdx = 0;
  weakSession = {correct:0, wrong:0};
}

function showWeakQuestion(){
  const container = document.getElementById('weak-question-container');
  container.innerHTML = '';
  document.getElementById('weak-progress-label').textContent = `${Math.min(weakIdx+1,weakQueue.length)} / ${weakQueue.length}`;
  document.getElementById('weak-progress-fill').style.width = weakQueue.length ? `${(weakIdx/weakQueue.length)*100}%` : '0%';

  if(weakQueue.length === 0){
    container.innerHTML = `<div class="empty-state"><h3>Nothing here right now</h3><p>Questions land here after you miss them. Go do some Practice.</p></div>`;
    return;
  }
  if(weakIdx >= weakQueue.length){
    container.innerHTML = `
      <div class="empty-state">
        <h3>Batch complete</h3>
        <p>${weakSession.correct} correct, ${weakSession.wrong} missed this round.</p>
        <div class="btn-row" style="justify-content:center;margin-top:14px;">
          <button class="btn primary" id="weak-batch-again">Pick another batch</button>
        </div>
      </div>`;
    document.getElementById('weak-batch-again').addEventListener('click', ()=>{
      document.getElementById('weak-session').style.display = 'none';
      document.getElementById('weak-batch-picker').style.display = 'block';
    });
    return;
  }
  const q = weakQueue[weakIdx];
  const card = renderQuestionCard(q, {onGraded:(isCorrect)=>{
    if(isCorrect) weakSession.correct++; else weakSession.wrong++;
    weakIdx++; showWeakQuestion();
  }});
  container.appendChild(card);
}

document.querySelectorAll('#weak-batch-buttons .batch-btn').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    buildWeakQueue(btn.dataset.size);
    document.getElementById('weak-batch-picker').style.display = 'none';
    document.getElementById('weak-session').style.display = 'block';
    showWeakQuestion();
  });
});
document.getElementById('weak-change-batch').addEventListener('click', ()=>{
  document.getElementById('weak-session').style.display = 'none';
  document.getElementById('weak-batch-picker').style.display = 'block';
});

// ---------- BROWSE ----------
function renderBrowseList(){
  const search = document.getElementById('browse-search').value.trim().toLowerCase();
  const filter = document.getElementById('browse-filter').value;
  const list = document.getElementById('browse-list');
  list.innerHTML = '';

  const filtered = QUESTIONS.filter(q=>{
    const statusMatch = filter==='all' || getStatus(q.id)===filter;
    if(!statusMatch) return false;
    if(!search) return true;
    const hay = (q.question + ' ' + q.options.join(' ') + ' ' + q.correct.join(' ')).toLowerCase();
    return hay.includes(search);
  });

  if(filtered.length === 0){
    list.innerHTML = `<div class="empty-state"><h3>No matches</h3><p>Try a different search or filter.</p></div>`;
    return;
  }

  filtered.forEach(q=>{
    const item = document.createElement('div');
    item.className = 'browse-item';
    const status = getStatus(q.id);
    item.innerHTML = `
      <div class="browse-head">
        <span class="qid">#${q.id}</span>
        <span class="browse-head-text">${escapeHtml(q.question.split('\n')[0]).slice(0,110)}${q.question.length>110?'…':''}</span>
        <span class="qstatus-badge ${status}">${status.toUpperCase()}</span>
      </div>
      <div class="browse-body">
        <div class="qtext">${renderQuestionText(q.question)}</div>
        <div class="browse-correct">
          ${q.correct.map(c=>`<div>✓ ${escapeHtml(c)}</div>`).join('')}
        </div>
        ${q.explanation ? `<div>${escapeHtml(q.explanation)}</div>` : ''}
      </div>
    `;
    item.querySelector('.browse-head').addEventListener('click', ()=>{
      item.classList.toggle('open');
    });
    list.appendChild(item);
  });
}

document.getElementById('browse-search').addEventListener('input', renderBrowseList);
document.getElementById('browse-filter').addEventListener('change', renderBrowseList);

// ---------- MOCK EXAM ----------
let mockQuestions = [];
let mockStartTime = 0;
let mockTimerInterval = null;
const MOCK_TIME_LIMIT_SECONDS = 90 * 60;

function startMockExam(){
  mockQuestions = shuffle(QUESTIONS).slice(0, Math.min(75, QUESTIONS.length));
  document.getElementById('mock-intro').style.display = 'none';
  document.getElementById('mock-results').style.display = 'none';
  const body = document.getElementById('mock-exam-body');
  body.style.display = 'block';
  body.innerHTML = `
    <div class="exam-header">
      <span class="exam-timer" id="mock-timer">90:00</span>
      <span style="font-family:var(--font-mono);font-size:12px;color:var(--text-dim);">${mockQuestions.length} questions · 70% to pass</span>
    </div>
    <div id="mock-questions-list"></div>
    <div class="btn-row" style="margin:20px 0;">
      <button class="btn primary" id="mock-submit">Submit Exam</button>
    </div>
  `;
  const list = document.getElementById('mock-questions-list');
  mockQuestions.forEach((q,idx)=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div class="exam-qnum">QUESTION ${idx+1} OF ${mockQuestions.length}</div>`;
    const card = renderQuestionCard(q, {deferFeedback:true});
    wrapper.appendChild(card);
    list.appendChild(wrapper);
  });

  mockStartTime = Date.now();
  mockTimerInterval = setInterval(updateMockTimer, 1000);

  document.getElementById('mock-submit').addEventListener('click', ()=>submitMockExam(false));
}

function updateMockTimer(){
  const elapsed = Math.floor((Date.now()-mockStartTime)/1000);
  const remaining = MOCK_TIME_LIMIT_SECONDS - elapsed;
  const timerEl = document.getElementById('mock-timer');

  if(remaining <= 0){
    if(timerEl){ timerEl.textContent = '00:00'; }
    submitMockExam(true);
    return;
  }

  const m = String(Math.floor(remaining/60)).padStart(2,'0');
  const s = String(remaining%60).padStart(2,'0');
  if(timerEl){
    timerEl.textContent = `${m}:${s}`;
    timerEl.style.color = remaining <= 300 ? 'var(--red)' : 'var(--amber)';
  }
}

function submitMockExam(timedOut){
  clearInterval(mockTimerInterval);
  const timeTakenSeconds = Math.floor((Date.now()-mockStartTime)/1000);
  let correctCount = 0;
  const questionRecords = [];

  const cards = document.querySelectorAll('#mock-questions-list .qcard');
  cards.forEach((card, idx)=>{
    const q = mockQuestions[idx];
    let isCorrect = false;
    let record = { id: q.id, dragdrop: q.dragdrop };

    if(q.dragdrop){
      const slots = card.querySelectorAll('.dnd-slot');
      let allCorrect = true;
      const slotRecords = [];
      slots.forEach(slot=>{
        const correctVal = slot.getAttribute('data-correct');
        const chip = slot.querySelector('.dnd-chip');
        const placedVal = chip ? chip.dataset.value : null;
        const slotOk = placedVal === correctVal;
        if(slotOk){ slot.classList.add('correct'); }
        else {
          slot.classList.add('incorrect');
          allCorrect = false;
          if(!chip){
            const filler = document.createElement('div');
            filler.className = 'dnd-chip';
            filler.textContent = correctVal + ' (missed)';
            filler.style.opacity = '0.6';
            slot.appendChild(filler);
          }
        }
        slotRecords.push({ correct: correctVal, selected: placedVal, isCorrect: slotOk });
      });
      isCorrect = allCorrect;
      record.slots = slotRecords;
    } else {
      const optEls = card.querySelectorAll('.opt');
      const inputs = card.querySelectorAll('.opt input');
      const selectedIdx = [];
      inputs.forEach((inp,i)=>{ if(inp.checked) selectedIdx.push(i); inp.disabled = true; });
      const displayedOptions = optionOrderMap[card.id] || q.options;
      const correctIdx = displayedOptions.map((o,i)=>q.correct.includes(o) ? i : -1).filter(i=>i>=0);
      const selectedSet = new Set(selectedIdx);
      const correctSet = new Set(correctIdx);
      isCorrect = selectedSet.size === correctSet.size && [...selectedSet].every(i=>correctSet.has(i));
      optEls.forEach((el,i)=>{
        el.classList.add('disabled');
        if(correctSet.has(i)) el.classList.add('correct');
        else if(selectedSet.has(i)) el.classList.add('incorrect');
      });
      record.si = [...selectedSet].map(i=>q.options.indexOf(displayedOptions[i]));
      record.ci = [...correctSet].map(i=>q.options.indexOf(displayedOptions[i]));
    }

    card.classList.add('graded');
    record.isCorrect = isCorrect;
    questionRecords.push(record);

    recordAnswer(q.id, isCorrect);
    if(isCorrect) correctCount++;
  });

  const pct = Math.round((correctCount/mockQuestions.length)*100);
  const pass = pct >= 70;

  const attempt = {
    timestamp: Date.now(),
    score: pct,
    correctCount,
    total: mockQuestions.length,
    pass,
    timeTakenSeconds,
    timedOut: !!timedOut,
    questions: questionRecords
  };
  mockHistory.unshift(attempt);
  saveMockHistory();

  renderMockResults(attempt);
}

function formatDuration(totalSeconds){
  if(totalSeconds == null) return '—';
  const m = Math.floor(totalSeconds/60);
  const s = totalSeconds%60;
  return `${m}m ${String(s).padStart(2,'0')}s`;
}

function renderMockResults(attempt){
  const pct = attempt.score;
  const pass = attempt.pass;
  const missed = attempt.questions.filter(r=>!r.isCorrect);

  document.getElementById('mock-exam-body').style.display = 'none';
  const resultsDiv = document.getElementById('mock-results');
  resultsDiv.style.display = 'block';
  resultsDiv.innerHTML = `
    <div class="result-hero">
      <div class="result-score ${pass?'pass':'fail'}">${pct}%</div>
      <div class="result-sub">${attempt.correctCount} of ${attempt.total} correct — ${pass?'Pass':'Below target'}</div>
      <div class="result-threshold">TARGET: 70% · REAL EXAM PASS MARK: 65%</div>
      <div class="result-threshold" style="margin-top:4px;">TIME TAKEN: ${formatDuration(attempt.timeTakenSeconds)}${attempt.timedOut ? ' · TIME LIMIT REACHED' : ''}</div>
    </div>
    ${missed.length ? `
      <h3 style="font-family:var(--font-display);font-size:15px;margin-bottom:10px;">Missed questions (${missed.length})</h3>
      <div id="mock-missed-list"></div>
    ` : `<div class="empty-state"><h3>Clean sweep</h3><p>No missed questions this round.</p></div>`}
    <div class="btn-row" style="margin-top:16px;">
      <button class="btn primary" id="mock-retry">Take Another Mock Exam</button>
      <button class="btn" id="mock-back-to-history">Back to Past Attempts</button>
    </div>
  `;

  if(missed.length){
    const missedList = document.getElementById('mock-missed-list');
    missed.forEach(record=>{
      missedList.appendChild(renderMockQuestionReview(record));
    });
  }

  document.getElementById('mock-retry').addEventListener('click', ()=>{
    resultsDiv.style.display = 'none';
    document.getElementById('mock-intro').style.display = 'block';
    renderMockHistoryList();
  });
  document.getElementById('mock-back-to-history').addEventListener('click', ()=>{
    resultsDiv.style.display = 'none';
    document.getElementById('mock-intro').style.display = 'block';
    renderMockHistoryList();
  });
}

function renderMockQuestionReview(record){
  const q = QUESTIONS.find(x=>x.id === record.id);
  const item = document.createElement('div');
  item.className = 'browse-item open';

  let bodyHtml = `<div class="qtext">${renderQuestionText(q.question)}</div>`;

  if(record.dragdrop){
    bodyHtml += `<div class="dnd-hint" style="margin-top:8px;">YOUR MATCHES</div>`;
    record.slots.forEach(s=>{
      const icon = s.isCorrect ? '✓' : '✗';
      const color = s.isCorrect ? 'var(--teal)' : 'var(--red)';
      bodyHtml += `<div style="margin-bottom:6px;">
        <span style="color:${color};font-weight:600;">${icon}</span>
        You matched: <strong>${escapeHtml(s.selected || '(left blank)')}</strong> → correct: <strong>${escapeHtml(s.correct)}</strong>
      </div>`;
    });
  } else {
    // New format stores canonical option indices (si/ci); old saved attempts stored
    // full option text (options/selected/correct) — support both for backward compatibility.
    let displayOptions, isCorrectOpt, wasSelected;
    if(record.si !== undefined){
      displayOptions = q.options;
      isCorrectOpt = (opt,i) => record.ci.includes(i);
      wasSelected = (opt,i) => record.si.includes(i);
    } else {
      displayOptions = record.options;
      isCorrectOpt = (opt) => record.correct.includes(opt);
      wasSelected = (opt) => record.selected.includes(opt);
    }
    bodyHtml += `<div class="opt-list" style="margin-top:10px;">`;
    displayOptions.forEach((opt,i)=>{
      const correctFlag = isCorrectOpt(opt,i);
      const selectedFlag = wasSelected(opt,i);
      let cls = 'opt disabled';
      if(correctFlag) cls += ' correct';
      else if(selectedFlag) cls += ' incorrect';
      const marker = selectedFlag ? (correctFlag ? '✓ (your answer)' : '✗ (your answer)') : (correctFlag ? '✓ (correct)' : '');
      bodyHtml += `<div class="${cls}"><span>${escapeHtml(opt)}</span>${marker ? `<span style="margin-left:auto;font-size:11px;font-family:var(--font-mono);">${marker}</span>` : ''}</div>`;
    });
    bodyHtml += `</div>`;
  }

  if(q.explanation){
    bodyHtml += `<div style="margin-top:10px;">${escapeHtml(q.explanation)}</div>`;
  }

  item.innerHTML = `
    <div class="browse-head"><span class="qid">#${q.id}</span><span class="browse-head-text">${escapeHtml(q.question.split('\n')[0]).slice(0,110)}</span><span class="qstatus-badge ${record.isCorrect?'mastered':'weak'}">${record.isCorrect?'CORRECT':'MISSED'}</span></div>
    <div class="browse-body" style="display:block;">${bodyHtml}</div>
  `;
  return item;
}

function renderMockHistoryList(){
  const container = document.getElementById('mock-history-container');
  if(!container) return;

  if(mockHistory.length === 0){
    container.innerHTML = '';
    return;
  }

  let html = `<h3 style="font-family:var(--font-display);font-size:14px;margin-bottom:10px;color:var(--text-dim);">PAST ATTEMPTS (${mockHistory.length})</h3>`;
  mockHistory.forEach((attempt, idx)=>{
    const date = new Date(attempt.timestamp);
    const dateStr = date.toLocaleDateString(undefined, {month:'short', day:'numeric'}) + ' ' + date.toLocaleTimeString(undefined, {hour:'2-digit', minute:'2-digit'});
    const passClass = attempt.pass ? 'mastered' : 'weak';
    html += `
      <div class="action-card" data-attempt-idx="${idx}" style="margin-bottom:10px;display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-family:var(--font-mono);font-size:11px;color:var(--text-dim);">${dateStr} · ${formatDuration(attempt.timeTakenSeconds)}${attempt.timedOut ? ' (timed out)' : ''}</div>
          <div style="font-family:var(--font-display);font-size:15px;margin-top:2px;">${attempt.correctCount} / ${attempt.total} correct</div>
        </div>
        <span class="qstatus-badge ${passClass}" style="font-size:13px;padding:5px 10px;">${attempt.score}%</span>
      </div>
    `;
  });
  container.innerHTML = html;

  container.querySelectorAll('[data-attempt-idx]').forEach(card=>{
    card.addEventListener('click', ()=>{
      const attempt = mockHistory[parseInt(card.dataset.attemptIdx,10)];
      document.getElementById('mock-intro').style.display = 'none';
      renderMockResults(attempt);
    });
  });
}

document.getElementById('mock-start').addEventListener('click', startMockExam);

// ---------- NAV ----------
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab=>{
  tab.addEventListener('click', ()=>switchView(tab.dataset.view));
});
document.querySelectorAll('.action-card[data-goto]').forEach(card=>{
  card.addEventListener('click', ()=>switchView(card.dataset.goto));
});

function switchView(view){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active', t.dataset.view===view));
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+view).classList.add('active');

  if(view === 'practice'){
    document.getElementById('practice-session').style.display = 'none';
    document.getElementById('practice-batch-picker').style.display = 'block';
  }
  if(view === 'weak'){
    document.getElementById('weak-session').style.display = 'none';
    document.getElementById('weak-batch-picker').style.display = 'block';
  }
  if(view === 'browse'){ renderBrowseList(); }
  if(view === 'mock'){ renderMockHistoryList(); }
}

// ---------- init ----------
document.getElementById('sync-copy-btn').addEventListener('click', async ()=>{
  const code = exportSyncCode();
  const statusEl = document.getElementById('sync-status');
  try{
    await navigator.clipboard.writeText(code);
    statusEl.textContent = 'Copied. Paste it into this app on your other device.';
  }catch(e){
    statusEl.innerHTML = 'Could not copy automatically — select and copy this manually:<br><textarea class="search-input" style="width:100%;margin-top:6px;font-family:var(--font-mono);font-size:11px;min-height:70px;" readonly>' + code + '</textarea>';
  }
});

document.getElementById('sync-show-import').addEventListener('click', ()=>{
  const box = document.getElementById('sync-import-box');
  box.style.display = box.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('sync-import-btn').addEventListener('click', ()=>{
  const code = document.getElementById('sync-import-input').value;
  const statusEl = document.getElementById('sync-status');
  if(!code.trim()){ statusEl.textContent = 'Paste a code first.'; return; }
  const ok = importSyncCode(code);
  statusEl.textContent = ok ? 'Progress loaded from code.' : 'That code didn\'t look right — check you copied the whole thing.';
});

// ---------- dynamic question count text ----------
function updateQuestionCountText(){
  const total = QUESTIONS.length;
  const brandEl = document.getElementById('brand-question-count');
  if(brandEl) brandEl.textContent = `${total} questions · reconciled by priority`;
  const mockIntroEl = document.getElementById('mock-intro-text');
  const mockSize = Math.min(75, total);
  if(mockIntroEl) mockIntroEl.textContent = `Pulls ${mockSize} random questions from the full bank of ${total}. No hints, no feedback until the end. Pass mark set to 70% (real exam is 65% of 75) so you're practicing with a margin.`;
}
updateQuestionCountText();

loadProgress();
loadMockHistory();