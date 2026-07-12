const QUESTIONS = [
  {
    "id": 1,
    "question": "The following identification rule for a Hardware CI class has been defined:\n\n| Hardware Rule: Identifier Entries | Criterion attributes | Priority |\n|---|---|---|\n| Serial Number | serial_number, serial_number_type | 100 |\n| Hardware | serial_number | 200 |\n| Hardware | name | 300 |\n| Network Adapter | mac_address, name | 400 |\n\nTwo new CI records are imported into the Hardware class of the CMDB:\n- CI1: The name of this CI record matches the name of an existing CI record in the CMDB.\n- CI2: The IP address of this CI record matches the IP address of an existing CI record in the CMDB.\n\nWhich is correct based on the identification rule and the imported CI records?",
    "options": [
      "CI1 and CI2 both will be inserted as new records",
      "CI1 will be updated with the matching record and CI2 will be inserted as a new record",
      "CI1 will be inserted as a new record and CI2 will be updated with the matching record",
      "CI1 and CI2 both will be updated with matching records"
    ],
    "correct": [
      "CI1 will be updated with the matching record and CI2 will be inserted as a new record"
    ],
    "explanation": "Rules process by priority (lowest number = highest priority first). CI1 matches on `name` at priority 300 → updated. CI2 matches on IP address, which isn't a criterion attribute anywhere in this table → no match → inserted as new.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 2,
    "question": "A CMDB Administrator uses the CMDB Data Foundations Dashboard to gain insights into the CMDB. The results display low scores for several metrics. Which actions can the CMDB Administrator take to improve the CMDB Health? (2 Ans)",
    "options": [
      "Focus on metric(s) with Critical and High priorities",
      "Remove non-operational and retired CIs",
      "Adjust the metrics using exclusion rules to improve the scores",
      "Use the Remediation Playbooks linked beside each metric"
    ],
    "correct": [
      "Focus on metric(s) with Critical and High priorities",
      "Use the Remediation Playbooks linked beside each metric"
    ],
    "explanation": "The CMDB Data Foundations Dashboard displays health metrics with priorities and links to remediation resources. Effective action targets prioritized issues through guided remediation steps rather than superficial adjustments. Focusing on metrics with Critical and High priorities targets the most impactful issues first, and the Remediation Playbooks linked beside each metric provide analysis paths, fix plans, and remediation steps. Removing non-operational/retired CIs and adjusting exclusion rules affect scoring without addressing the underlying data quality, so they aren't the recommended first actions.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 3,
    "question": "A CMDB Administrator needs to identify which attributes have been created specifically for the Windows Server class. Which tab in the Attributes section is used?",
    "options": [
      "Added",
      "Derived",
      "All",
      "Child"
    ],
    "correct": [
      "Added"
    ],
    "explanation": "The Added tab in the CMDB Attributes section displays attributes created specifically for a class (e.g. Windows Server), distinguishing them from attributes inherited from parent classes. Child shows attributes from child classes extending the current class; Added lists attributes uniquely defined for this class; Derived displays attributes inherited from parent classes; All combines everything visible for the class. This setup helps CMDB admins quickly identify custom attributes for classes like cmdb_ci_win_server.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 4,
    "question": "A CMDB Administrator has installed a Service Graph Connector (SGC), and then made customizations to the mappings. Which is a consequence of this action?",
    "options": [
      "Fields populated by a customization will have a special tag associated with them in the CMDB",
      "The customization will prevent the SGC from executing without an approval record attached to the affected mapping record",
      "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC"
    ],
    "correct": [
      "The customized mappings are not supported by ServiceNow, and the customer is responsible for supporting their own customized SGC"
    ],
    "explanation": "Customizing mappings in a Service Graph Connector after installation causes those changes to fall outside official ServiceNow support. ServiceNow does not support modified SGC mappings, leaving the customer responsible for maintaining, upgrading, and troubleshooting their own customizations going forward, in line with ServiceNow's general policy on custom configuration. Customizations don't automatically get special tags in the CMDB, nor do they block SGC execution or require an approval record.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 5,
    "question": "A CMDB Administrator needs to create a new CI class for an Internet of Things (IoT) Sensor in ServiceNow. What are the recommended practices for this activity? (Choose 2)",
    "options": [
      "Add a new class under an appropriate parent class",
      "Install or update the CMDB CI Class Models Store application and verify the class does not already exist",
      "Modify an existing class",
      "Delete an unused class and replace it with the new one"
    ],
    "correct": [
      "Add a new class under an appropriate parent class",
      "Install or update the CMDB CI Class Models Store application and verify the class does not already exist"
    ],
    "explanation": "ServiceNow provides pre-built IoT device classes through the CMDB CI Class Models Store application (e.g. an IoT Sensor class) that may already cover the need, so administrators should always check for and install/update the appropriate class model first. If no suitable class exists, a new class should be added under an appropriate parent class (e.g. extending cmdb_ci_hardware) to preserve CMDB structure and identification rules. Deleting an unused class risks data integrity and breaks dependencies, and modifying an existing class alters shared data models — both violate CMDB stability best practices.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 6,
    "question": "A Configuration Manager responsible for a specific region wants to use the CMDB Health Dashboard to improve the data quality of the CMDB for that region. The Configuration Manager only sees the overall score and grouped by CI Class. How can the Configuration Manager get a score for regionally relevant CIs?",
    "options": [
      "Customize the CMDB Health Dashboard scheduled jobs to group the results by region",
      "Create CMDB groups with type, health, by region",
      "On the CMDB health settings, activate the option, Group scores by region"
    ],
    "correct": [
      "Create CMDB groups with type, health, by region"
    ],
    "explanation": "The correct approach is to create CMDB groups with type set to health and grouped by region. This lets the Configuration Manager filter and view health scores specifically for regionally relevant CIs, since CMDB groups can be defined using an attribute like location to produce dedicated regional scores. Customizing scheduled jobs changes global aggregation rather than producing a region-specific view, and there is no standard 'group scores by region' toggle in CMDB health settings — grouping relies on CMDB groups instead.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 7,
    "question": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, for example the CI reference fields accessible from an Incident Form. Where does the CMDB Administrator designate Principal Classes?",
    "options": [
      "System Properties",
      "CMDB Data Manager",
      "CMDB Workspace",
      "CI Class Manager"
    ],
    "correct": [
      "CI Class Manager"
    ],
    "explanation": "In ServiceNow, an administrator designates Principal Classes using CI Class Manager: navigate to the desired class (e.g. Windows Server), open its Basic Info tab, and check the Principal Class checkbox. Once set, only CIs from Principal Classes appear in reference fields like the CI field on Incident, Change, and Problem forms — without a Principal Class defined, all active CIs show by default. CMDB Workspace is used for viewing/managing CIs but designation itself happens in CI Class Manager; CMDB Data Manager handles data import and normalization, not Principal Class settings; and System Properties control which task tables apply filtering, not where classes are designated.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 8,
    "question": "A CMDB Administrator identifies duplicate CIs. One was created by a manual import, the other one was created by automated discovery. The discovered CI has the latest IP address, while the manually imported CI has an accurate relationship to a critical business application. How does the Administrator use the Duplicate CI Remediator to resolve this issue?",
    "options": [
      "A. Retain the manually imported CI, and delete the discovered CI",
      "B. Retain the manually imported CI, and delete the discovered CI",
      "D. Retain the discovered CI, but merge the relationship from the manually imported CI",
      "C. Merge the two CIs automatically, retaining all attributes from the discovered CI"
    ],
    "correct": [
      "D. Retain the discovered CI, but merge the relationship from the manually imported CI"
    ],
    "explanation": "The Duplicate CI Remediator is a guided wizard that lets administrators selectively reconcile duplicates by choosing which attributes, relationships, and related items to retain from each record. Here, the discovered CI is retained as the primary record since its IP address, sourced from automated discovery, is generally treated as more current and authoritative in reconciliation. The accurate relationship to the critical business application is then merged in from the manually imported CI, preserving key business context while keeping the more reliable technical data. This selective-merge approach avoids the downsides of the other options: fully retaining the manual import loses current technical data, and merging everything indiscriminately risks losing the accurate relationship.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 9,
    "question": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard Correctness Scorecard for the Server class, which consists of 60,000 servers in CMDB. For the Duplicate metric, it shows Healthy CIs / Evaluated = 59,000 / 60,000. For the Orphan metric, it shows Healthy CIs / Evaluated = 45,000 / 50,000. Which configuration explains the difference in the scope of Server CIs evaluated (60,000 vs 50,000) between the two metrics?",
    "options": [
      "The Orphan metric has a CMDB Group configured for the Server class",
      "The Duplicate metric has a Health Inclusion rule configured for the Server class",
      "The Orphan metric has a Health Inclusion rule configured for the Server class"
    ],
    "correct": [
      "The Orphan metric has a Health Inclusion rule configured for the Server class"
    ],
    "explanation": "The Orphan metric has a Health Inclusion rule configured for the Server class. Health Inclusion rules filter which CIs are evaluated for a given metric, narrowing the scope to those meeting specific criteria — explaining why Orphan evaluates only 50,000 of the 60,000 servers. The Duplicate metric, by contrast, evaluates the full 60,000-server population because it relies on identification rules rather than a Health Inclusion rule by default. This difference in configured scope explains the discrepancy between the two metrics' evaluated totals.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 10,
    "question": "A CMDB Manager wants to start adding CSDM design and planning (design) domain components into the CMDB. Who is involved in this exercise? (2 Answers)",
    "options": [
      "Business Relationship Manager",
      "Application Service Owner",
      "Application Owner",
      "Enterprise Architect"
    ],
    "correct": [
      "Application Owner",
      "Enterprise Architect"
    ],
    "explanation": "Enterprise Architect and Application Owner are involved in adding CSDM Design domain components to the CMDB. The Design (or Design & Planning) domain in CSDM focuses on planning digital products like business capabilities, applications, and information objects. Enterprise Architects make strategic design decisions — defining architectures and assessing relationships and risk — while Application Owners manage design data for business applications, creating and relating CIs in tables like cmdb_ci_business_app. Business Relationship Managers typically handle demand and service relationships rather than Design domain planning, and Application Service Owners focus on operational services in other CSDM domains like Manage Technical Services.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 11,
    "question": "A CMDB Data Owner has requested better insights on the different data sources that make up the CMDB data set. The Platform Owner knows that the new Service Graph Connector Central plugin is just what is needed. After installing the plugin, what workspace will have the new Service Graph Connector Central tab available?",
    "options": [
      "Service Graph Connector Workspace",
      "CMDB Workspace",
      "Discovery Admin Workspace"
    ],
    "correct": [
      "CMDB Workspace"
    ],
    "explanation": "The CMDB Workspace gains the new Service Graph Connector Central tab after the plugin is installed. This plugin provides a unified interface for managing Service Graph Connectors, helping integrate third-party data sources into the CMDB with better visibility. Within CMDB Workspace, this includes a Data Owner Home (CMDB data, sources, health metrics, tasks), an Ingestion section (managing data from SGCs and IntegrationHub ETL), and the SGC Central tab itself (a single view for connector lifecycle — create, monitor, debug). Service Graph Connector Workspace and Discovery Admin Workspace focus on different, narrower aspects and don't host this tab.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 12,
    "question": "CMDB Administrator wants to leverage the CMDB Data Foundations Dashboard. What are benefits of using this application? (2 Answers)",
    "options": [
      "Checks that important data is valid and properly configured",
      "Has a framework to create custom metrics for the CMDB",
      "Provides playbooks to assist in the remediation of potential risks",
      "Uses automation to remediate potential risks"
    ],
    "correct": [
      "Checks that important data is valid and properly configured",
      "Provides playbooks to assist in the remediation of potential risks"
    ],
    "explanation": "The CMDB Data Foundations Dashboard checks that important data is valid and properly configured, evaluating configurations and customizations across the CMDB. It also provides remediation playbooks that offer guidance and documentation to help fix identified risks, improving overall CMDB health. The dashboard does not itself automate remediation — it provides visibility and guidance for a human administrator to act on — and building custom metrics frameworks is a more advanced, separate capability, not a core function of the standard dashboard.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 13,
    "question": "The Apache Web Server Identification Rule is configured with the following criterion attributes: Class, Configuration file, Version (Identifier entry: sys_class_name,config_file,version; priority 100). Yesterday, an Apache Web Server CI was discovered as part of Service Mapping. Today, the application owner upgraded Apache to a different version and reran discovery of the service. What will happen in the CMDB?",
    "options": [
      "A duplication error will occur",
      "The existing Apache Web Server CI will be reconciled and its version will be updated",
      "A new Apache Web Server CI is created",
      "The existing Apache Web Server CI will be reclassified as a Web Server CI"
    ],
    "correct": [
      "A new Apache Web Server CI is created"
    ],
    "explanation": "A new Apache Web Server CI is created. The identification rule for Apache Web Server uses Class, Configuration File, and Version as criterion attributes at priority 100. Since IRE requires all attributes at a given priority level to match for identification, changing the version means the full identifier entry no longer matches the existing CI. Discovery and Service Mapping treat this as a new CI because no existing record matches all criteria at that priority, so a duplicate CI is created with the new version while the original (with the old version) remains in the CMDB.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 14,
    "question": "A CMDB Administrator needs to configure a new application identification rule that considers the potential for the same application installed more than once on the same server. Which is the best choice of a criterion attribute?",
    "options": [
      "Configuration File Name",
      "Configuration File Path",
      "Version",
      "Port",
      "Class"
    ],
    "correct": [
      "Configuration File Path"
    ],
    "explanation": "Configuration File Path is the best criterion attribute because it uniquely identifies each installation — multiple instances of the same application on one server can use distinct directories or paths, avoiding the duplication issues seen with shared attributes. Configuration File Name often repeats across instances (e.g. the same filename used by every install), Version and Class are identical across instances of the same app, and Port can differentiate installs but isn't always unique or reliable. ServiceNow best practice is to use a uniquely identifying path attribute in high-priority identifier entries for exactly this scenario.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 15,
    "question": "A Platform Owner is collaborating with stakeholders in the manufacturing industry to align their CIs with the CSDM 5 framework. They need to map production line monitoring systems to the appropriate CSDM domain. Which CSDM 5 domain does the Platform Owner use?",
    "options": [
      "Design and Planning (Design)",
      "Service Consumption (Sell/Consume)",
      "Build and Integration (Build)",
      "Foundation",
      "Service Delivery (Manage Technical)"
    ],
    "correct": [
      "Service Delivery (Manage Technical)"
    ],
    "explanation": "The Platform Owner uses the Service Delivery domain (formerly Manage Technical Services) in CSDM 5 to map production line monitoring systems. CSDM 5 expanded to seven domains, including renamed and new domains for better alignment with operational technology (OT) in industries like manufacturing. Service Delivery covers end-to-end service delivery systems — infrastructure, technologies, and operational models for internal/external delivery — making it the right fit for production line monitoring. Build & Integration focuses on development, and Foundation is core reference data, not deployed operational assets like this.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 16,
    "question": "An Asset Manager wants to ensure that Asset records and CI records are kept synchronized automatically. How does the Manager do this? (Choose two.)",
    "options": [
      "Ensure one-to-one physical mapping between Asset and CI",
      "Ensure that scheduled jobs are run during off-business hours to ensure that sync happens",
      "Ensure that the business rule to update CI fields on change on the asset table is active",
      "Ensure that the business rule to update Asset fields on change on the CI table is active"
    ],
    "correct": [
      "Ensure that the business rule to update CI fields on change on the asset table is active",
      "Ensure that the business rule to update Asset fields on change on the CI table is active"
    ],
    "explanation": "Automatic synchronization between Asset (alm_asset) and CI (cmdb_ci) records is handled by two out-of-the-box business rules that trigger real-time updates via the Asset and CI Synchronizer script whenever a relevant field changes in either record: the rule that updates CI fields on change on the asset table, and the rule that updates Asset fields on change on the CI table. Scheduled jobs run off-hours aren't the standard automatic mechanism since sync is event-driven rather than periodic, and one-to-one physical mapping supports linking the records but doesn't by itself enforce ongoing field synchronization.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 17,
    "question": "A CMDB Administrator wants to start utilizing the CMDB Health Dashboard and its Key Performance Indicators. What does the Administrator do to start using the dashboard?",
    "options": [
      "Activate the dashboard system property",
      "Download the dashboard from the ServiceNow store",
      "Nothing, the dashboard is activated by default",
      "Activate the dashboard scheduled jobs"
    ],
    "correct": [
      "Activate the dashboard scheduled jobs"
    ],
    "explanation": "The CMDB Health Dashboard is available out of the box, but its scheduled jobs for metrics like Completeness, Compliance, and Correctness are disabled by default. An administrator must activate the relevant scheduled jobs (under Configuration > CMDB Dashboard > Scheduled Jobs), setting them Active and configuring a run schedule. Once active, these jobs process health metrics and populate the dashboard — without activating them, the dashboard remains blank. Downloading the dashboard from the store or expecting default activation doesn't apply, since the dashboard app itself is already present; only its jobs need turning on.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 18,
    "question": "A ServiceNow Administrator wants to implement Service Graph Connectors to provide integrations to many third party solutions that the company wants integrated into the CMDB. Which categories of connectors are available to the Administrator? (Choose 2)",
    "options": [
      "Observability",
      "DevOps",
      "Cloud",
      "Workflow Automation"
    ],
    "correct": [
      "Observability",
      "Cloud"
    ],
    "explanation": "ServiceNow Service Graph Connectors span several categories tailored to IT operations, and Cloud (public cloud providers like AWS and Azure) and Observability (monitoring/observability tools like AppDynamics) are among the available categories. Other categories exist too, including DevOps (e.g. Terraform Cloud for infrastructure state syncing), endpoint/IT asset management, security, and operational technology (OT), with partner-built connectors available via the ServiceNow Store.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 19,
    "question": "A CMDB CI Class Owner has been asked to change the icon for the UNIX Server class. Which CI Class Manager tab can the owner use to change the icon for the class?",
    "options": [
      "Basic Info",
      "CI List",
      "Attributes",
      "Suggested Relationships"
    ],
    "correct": [
      "Basic Info"
    ],
    "explanation": "The Basic Info tab in CI Class Manager is where a CI Class Owner changes the icon for a class like UNIX Server. This tab displays and allows editing of core class details — including the icon, display name, and description — typically via an image URI field where a new icon can be selected or uploaded. Suggested Relationships, CI List, and Attributes handle other aspects of the class and don't control the icon.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 20,
    "question": "The CMDB Administrator group aims to display meaningful results on the CMDB Health Dashboard Compliance Scorecard for server records that are not on the latest patch. What must be configured to achieve this goal?",
    "options": [
      "D. Certification Policies, Data Filters, Scheduled Jobs",
      "A. Technical Service Offerings, Dynamic CI Groups, CMDB Groups",
      "B. Stale, Orphan, Duplicate",
      "C. Certification Filter, Certification Template, Audit"
    ],
    "correct": [
      "C. Certification Filter, Certification Template, Audit"
    ],
    "explanation": "To display meaningful results on the Compliance Scorecard for server records not on the latest patch, the administrator must configure Data Certification: a Certification Filter to identify the specific subset of servers (e.g. Windows Servers), a Certification Template to define the expected patch level, and an Audit to run against the CI data and determine compliance, feeding results into the Compliance Scorecard. Without all three pieces configured together, the scorecard won't reflect meaningful patch-compliance data.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 21,
    "question": "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to \"User Group Field\"? (Choose 2 options)",
    "options": [
      "Assignment Group",
      "Support Group",
      "Managed By Group",
      "Owned by Group"
    ],
    "correct": [
      "Support Group",
      "Managed By Group"
    ],
    "explanation": "Support Group and Managed By Group are the default user groups available when the Assignment type is set to 'User Group Field' in a CMDB Data Manager policy. This dropdown pulls from table columns on the sys_user_group table that are standard fields on CMDB CI records used for policy task routing — Support Group and Managed By Group are explicitly cited as populating fields, and Managed By Group is recommended as best practice for such assignments. Owned by Group isn't listed as available by default, and Assignment Group is typically used for tasks rather than as a standard CI reference field for this purpose.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 22,
    "question": "Which are CMDB Data Manager end of life policy types? (2 answers)",
    "options": [
      "Decommission",
      "Lost",
      "Retire",
      "Disposed",
      "Archive"
    ],
    "correct": [
      "Retire",
      "Archive"
    ],
    "explanation": "CMDB Data Manager's end-of-life policy types are Retire and Archive. Retire updates a CI's Lifecycle Stage to 'End of Life' while keeping it visible in views and processes, without immediate removal. Archive moves retired CIs to an archived state for potential restoration, typically after a holding period. Attestation and Certification support lifecycle indirectly by verifying CI accuracy, but aren't themselves end-of-life actions, and Decommission, Lost, and Disposed aren't native policy types (they may reflect custom lifecycle stages or aliases in some instances).",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 23,
    "question": "A CMDB Administrator is using the Duplicate CI Remediator to address a de-duplication task. On the first tab of the wizard, the Main CI is selected. Which attributes are used to identify the Main CI?",
    "options": [
      "Least Related Items",
      "Oldest Created",
      "Most Related Items",
      "Newest Created"
    ],
    "correct": [
      "Most Related Items"
    ],
    "explanation": "The Duplicate CI Remediator designates the Main CI on its first tab using the Most Related Items attribute — the CI with the highest number of inbound relationships to other CIs in the CMDB. Richer connectivity generally reflects more complete discovery and maintenance history (e.g. a server linked to 50+ applications, VMs, and networks is preferred over an isolated CI), reducing data loss during remediation as relationships transfer to the Main CI. Least Related Items, Newest Created, and Oldest Created are alternate criteria the wizard can use, but each carries more risk of retaining a less-connected or less-trustworthy record as the survivor.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 24,
    "question": "A Change Manager wants to gain value from CSDM. How will the Change Management process benefit from CSDM? (Choose 2 options)",
    "options": [
      "Route the change dynamically",
      "Identify blackout windows",
      "Understand the impact of the change on services",
      "Determine the root cause of the change issue"
    ],
    "correct": [
      "Route the change dynamically",
      "Understand the impact of the change on services"
    ],
    "explanation": "Change Management benefits from CSDM through two key capabilities: routing the change dynamically, and understanding the impact of the change on services. A structured CMDB view links changes to services, infrastructure, and dependencies, enabling instant impact analysis on business services so Change Managers can assess risk and avoid disruptions accurately. Identifying blackout windows and determining root cause relate more to scheduling and incident/problem processes rather than to the core value CSDM provides for change.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 25,
    "question": "A CMDB CI Class Owner responsible for the Windows Server needs to manage the Windows Server class. Which CI Class Manager feature will help the CI Class Owner streamline this task?",
    "options": [
      "Search CI Classes",
      "CI Favorites",
      "Pinned Classes"
    ],
    "correct": [
      "Pinned Classes"
    ],
    "explanation": "Pinned Classes in CI Class Manager lets users pin frequently accessed CI classes (like Windows Server) to the top of the interface, reducing navigation time compared to repeatedly searching. CI Favorites marks individual items as favorites but doesn't prioritize class-level access in the manager, and Search CI Classes is useful for finding classes but doesn't provide ongoing streamlined access for regular ownership tasks the way Pinned Classes does.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 26,
    "question": "A CMDB Configuration Manager intends to implement CMDB Data Manager delete and archive policies for all server records in the New York datacenter. In which lifecycle state would servers be affected by these new policies?",
    "options": [
      "In any lifecycle state",
      "End of Life - Retired",
      "Missing - Stolen",
      "Inventory - Available"
    ],
    "correct": [
      "End of Life - Retired"
    ],
    "explanation": "CMDB Data Manager delete and archive policies apply to CIs in the End of Life - Retired lifecycle state. These policies are designed to manage the end-of-life process for CIs to maintain a clean CMDB, aligned with CSDM lifecycle standards where CIs generally must already be in a retired state before delete or archive policies act on them, as a best-practice precaution against jumping straight from operational to retired/deleted.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 27,
    "question": "A CMDB Administrator wants to leverage dynamic reconciliation rules. Which feature must be enabled?",
    "options": [
      "CMDB Workspace",
      "Reconciliation Rules",
      "CMDB 360/Multisource CMDB",
      "CMDB Data Manager"
    ],
    "correct": [
      "CMDB 360/Multisource CMDB"
    ],
    "explanation": "CMDB 360/Multisource CMDB is the feature that must be enabled to leverage dynamic reconciliation rules. Dynamic reconciliation rules depend on CMDB 360 to process multisource data and select values like 'Most Reported' or 'Last Reported' across discovery sources — without it enabled, the dynamic rule type won't appear in IRE configurations. CMDB Data Manager focuses on CI lifecycle policies like retirement, not reconciliation, and CMDB Workspace provides visualization but doesn't itself enable dynamic rules; standard (non-dynamic) Reconciliation Rules don't require CMDB 360.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 28,
    "question": "The following Reconciliation Rules were configured for ServiceNow, Altiris, and SCCM for the Windows Server class (cmdb_ci_win_server):\n\n| Discovery Source | Class | Priority |\n|---|---|---|\n| ServiceNow | Windows Server [cmdb_ci_win_server] | 100 |\n| Altiris | Windows Server [cmdb_ci_win_server] | 200 |\n| SCCM | Windows Server [cmdb_ci_win_server] | 300 |\n\nWhich statements are true? (Choose 2)",
    "options": [
      "A. Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server table",
      "B. Data collected with a discovery source of ServiceNow can insert new records into the Windows Server table, but cannot update records created by Altiris or SCCM",
      "D. Data collected with a discovery source of SCCM can update any record in the Windows Server table because it has the highest priority number",
      "C. Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server table"
    ],
    "correct": [
      "A. Data collected with a discovery source of Altiris can update records inserted by SCCM into the Windows Server table",
      "C. Data collected with a discovery source of SCCM can be inserted as new records in the Windows Server table"
    ],
    "explanation": "Statement A and C are true. Reconciliation rules for a class like cmdb_ci_win_server specify discovery source priority — lower numbers indicate higher precedence. ServiceNow (priority 100) has the highest precedence, followed by Altiris (200), then SCCM (300). New records can be inserted by any authorized discovery source regardless of priority, so SCCM data can be inserted as new records (C), and Altiris — a higher-priority source — can update records that were inserted by the lower-priority SCCM (A). ServiceNow's higher-priority data can update records from lower-priority sources rather than being limited to inserts only, and SCCM, having the lowest precedence, cannot update records that were sourced from higher-priority sources like ServiceNow or Altiris.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 29,
    "question": "The Application Portfolio Management team is asking for help modeling platforms as Business Applications. How would this mapped in CSDM using the ServiceNow Platform in the Incident and Change applications?",
    "options": [
      "A. ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Platform Applications. Then a Depends On relationship would be created between ServiceNow Platform and Incident and Change",
      "C. ServiceNow Platform, Incident, and Change would all be web based Architecture type. Incident and Change would have a reference to ServiceNow Platform.",
      "D. ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Business Applications and have a reference to ServiceNow Platform.",
      "B. ServiceNow Platform, Incident, and Change would all be web based Architecture type. A Depends On relationship would be created between ServiceNow Platform and Incident and Change."
    ],
    "correct": [
      "D. ServiceNow Platform would be an Architecture type of Platform Host. Incident and Change would be Business Applications and have a reference to ServiceNow Platform."
    ],
    "explanation": "The correct mapping models the ServiceNow Platform as an Architecture type of Platform Host, with Incident and Change modeled as Business Applications that hold a reference field pointing to that Platform Host. In CSDM, platforms like this are modeled as Business Applications (cmdb_ci_business_app), with Incident and Change carrying the corresponding Architecture type reference. Using a Depends On relationship instead of the reference field, or misclassifying the Platform Host as a web-based Architecture type, misrepresents the relationship and reduces visibility for portfolio management and impact analysis.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 30,
    "question": "A Configuration Manager working in the CMDB Workspace wants to see how CIs are connected to each other. Which tool can be used?",
    "options": [
      "Unified Map",
      "Business Service Map",
      "Relationship Map"
    ],
    "correct": [
      "Unified Map"
    ],
    "explanation": "Unified Map is the tool a Configuration Manager should use in CMDB Workspace to visualize how CIs connect to each other. It provides a graphical, hierarchical map of CIs and their relationships (such as those stored in cmdb_rel_ci), directly integrated into CMDB Workspace, and combines prior tools like Dependency Views for a unified experience in Change and Incident Management. Business Service Map focuses on mapping business services and underlying CIs (more aligned with Service Mapping use cases), and Relationship Map offers a more tabular, less graphical view and isn't the primary tool for this purpose.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 31,
    "question": "A CMDB Administrator would like to minimize stale CIs in the CMDB. Which CMDB Health Dashboard scorecard displays this information?",
    "options": [
      "Completeness",
      "Correctness",
      "Compliance"
    ],
    "correct": [
      "Correctness"
    ],
    "explanation": "The Correctness scorecard on the CMDB Health Dashboard is what a CMDB Administrator uses to minimize stale CIs. This scorecard measures data accuracy by tracking stale CIs alongside duplicates and orphans, flagging CIs not updated within defined rules (default 60 days) as part of the Correctness KPI. Completeness tracks required/recommended field population, and Compliance tracks policy adherence — neither specifically targets staleness the way Correctness does.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 32,
    "question": "Which shows the most complete list of policy types that are provided by the CMDB Data Manager?",
    "options": [
      "Retire, Archive, Attestation, Certification, and Delete",
      "Delete, Attestation, Retire, and Certification",
      "Archive and Delete",
      "Attestation, Retire, and Certification"
    ],
    "correct": [
      "Retire, Archive, Attestation, Certification, and Delete"
    ],
    "explanation": "Retire, Archive, Attestation, Certification, and Delete is the most complete list of policy types provided by CMDB Data Manager. These policies handle CI lifecycle operations: Retire sets CIs to 'End of Life' while keeping them visible in active views; Archive moves retired CIs to an archival state; Delete permanently removes CIs from the table; Attestation assigns tasks to verify CI existence and data integrity; and Certification confirms specific attribute values for CIs. Other option combinations are incomplete subsets of this full list.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 33,
    "question": "The Server [cmdb_ci_server] class uses a dynamic reconciliation rule of lowest value for the Disk Space (GB) field, while the Windows Server [cmdb_ci_win_server] class uses a dynamic reconciliation rule of most reported for the Disk Space (GB) field. Given the following data sources that populate Windows Server data into the CMDB 360/Multisource CMDB:\n\n| Data Source | Disk Space (GB) |\n|---|---|\n| Tivoli | 75 |\n| ServiceNow | 75 |\n| LANDesk | 50 |\n| Altiris | 80 |\n\nWhich value would be added to the CMDB for the Disk Space (GB) field of a Windows Server [cmdb_ci_win_server] record?",
    "options": [
      "50",
      "80",
      "75"
    ],
    "correct": [
      "75"
    ],
    "explanation": "75 GB is the value added to the CMDB. The Windows Server class (cmdb_ci_win_server) applies a 'most reported' dynamic reconciliation rule to the Disk Space field, which selects the value reported by the largest number of data sources when sources conflict for the same CI. Among the populating sources, 75 GB is reported by both Tivoli and ServiceNow (two sources), making it the most reported value, versus 80 GB (Altiris only) and 50 GB (LANDesk only). The parent Server class's separate 'lowest value' rule would pick 50 GB, but that rule doesn't apply here since the record in question is specifically a Windows Server CI.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 34,
    "question": "Which ServiceNow solutions automatically create relationships between CI Applications that are part of an Application Service? (2 Correct Answers only)",
    "options": [
      "IntegrationHub ETL",
      "Discovery",
      "Data Manager",
      "Event Management",
      "Service Mapping"
    ],
    "correct": [
      "Discovery",
      "Service Mapping"
    ],
    "explanation": "Discovery and Service Mapping are the two ServiceNow solutions that automatically create relationships between CI Applications that are part of an Application Service. Service Mapping identifies and maps application services, modeling dependencies and relationships among CIs — including applications — and automatically populates the CMDB with these connections. Discovery probes networks and devices to detect CIs like applications and creates horizontal relationships between them when they belong to the same Application Service. IntegrationHub ETL, Data Manager, and Event Management focus on data integration, lifecycle management, or event processing respectively, not this specific automated relationship creation.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 35,
    "question": "What is the relationship between an Application and a Server?",
    "options": [
      "Application > Runs::Runs On > Server",
      "Application > Used by::Uses > Server",
      "Application > Uses::Used by > Server",
      "Application > Runs on::Runs > Server"
    ],
    "correct": [
      "Application > Runs on::Runs > Server"
    ],
    "explanation": "The standard relationship between an Application and a Server is Application > Runs on::Runs > Server, reflecting that applications run on servers, establishing a fundamental dependency where the server hosts and executes the application. Servers provide the runtime environment (CPU, memory, OS) for applications, so this is the correct direction. Alternatives like 'Uses::Used by' imply a looser service dependency rather than direct hosting, and 'Runs::Runs On' reverses the correct direction.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 36,
    "question": "A CMDB Administrator has been tasked with gathering information for a presentation to leadership. The Administrator needs to provide Duplicate CI, Orphan CI, and Stale CI metrics. Which scorecard provides this info on the CMDB Health Dashboard?",
    "options": [
      "Compliance",
      "Correctness",
      "Completeness"
    ],
    "correct": [
      "Correctness"
    ],
    "explanation": "The Correctness scorecard on the CMDB Health Dashboard provides metrics for Duplicate CIs, Orphan CIs, and Stale CIs. The dashboard uses three main KPIs: Completeness (for required/recommended fields), Correctness (for data quality issues like duplicates, orphans, and staleness), and Compliance (for policy adherence). Correctness specifically tracks Duplicate CIs (evaluated via identification rules, counting sets minus one per group), Orphan CIs (those with no relationships or missing data), and Stale CIs (outdated based on staleness rules or thresholds) — these metrics aggregate into the overall Correctness score, helping admins identify cleanup needs.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 37,
    "question": "An organization is changing data centers and needs to know the consequences of the planned changes. How can Application Service Mapping be used as part of Change Management?",
    "options": [
      "To identify which devices will go offline first",
      "To understand the physical location of CIs",
      "To understand the business impact of CIs"
    ],
    "correct": [
      "To understand the business impact of CIs"
    ],
    "explanation": "Application Service Mapping is used as part of Change Management to understand the business impact of CIs. It helps organizations assess change impacts — such as during data center migrations — by visualizing service dependencies, revealing how changes to infrastructure affect interconnected business services, which supports better risk assessment and planning. Identifying which devices go offline first focuses on sequencing dependency chains rather than business impact, and understanding the physical location of CIs is a separate concern (location tracking) not primarily served by Service Mapping.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 38,
    "question": "Where does a user with the appropriate role(s) review and manage the generated tasks after configuring CMDB Data Manager policies?",
    "options": [
      "CMDB Workspace > My Work tab",
      "CMDB Health Dashboard > Duplicate CIs tab",
      "CMDB Workspace > Management tab",
      "CMDB Health Dashboard > Audit tab"
    ],
    "correct": [
      "CMDB Workspace > My Work tab"
    ],
    "explanation": "Users with the appropriate role(s) review and manage tasks generated by CMDB Data Manager policies in CMDB Workspace, under the My Work tab. After configuring policies (which create tasks assigned based on the Managed By Group of target CIs), users access those tasks in their My Work section to handle approvals, rejections, or execution. This is distinct from the Management tab (for policy views) or the CMDB Health Dashboard's Duplicate CIs and Audit tabs, which surface different kinds of information rather than task management.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 39,
    "question": "A Configuration Manager needs to enable a CMDB Data Manager policy to remove records from a CI Class while retaining the ability to restore them within a specified period. Which policy type should the Configuration Manager create?",
    "options": [
      "Archive",
      "Certification",
      "Delete",
      "Retire"
    ],
    "correct": [
      "Archive"
    ],
    "explanation": "Archive is the correct policy type. CMDB Data Manager uses policies to handle CI lifecycle events, and Archive specifically removes records from the active CI class table while storing them in a separate archive table for a configurable retention period, allowing restoration within that window. This differs from Retire (marks a CI as retired/inactive but keeps it in the active table), Certification (verifies attributes rather than removing records), and Delete (permanent removal with no recovery option) — only Archive supports both removal and restorability within a specified period.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 40,
    "question": "With CMDB 360/Multisource CMDB the Dynamic Reconciliation Rules will also be enabled. Based on the request of the management, a CMDB Administrator has to set up multiple Dynamic Reconciliation Rules. Which available 'Dynamic Rule Types' within the 'Create Reconciliation Rule' Wizard? (2 Answers)",
    "options": [
      "Most Reported",
      "Last Updated",
      "Smallest Value",
      "Last Created"
    ],
    "correct": [
      "Most Reported",
      "Smallest Value"
    ],
    "explanation": "Most Reported and Smallest Value are the two available Dynamic Rule Types among the options given in the Create Reconciliation Rule wizard. ServiceNow CMDB 360 documentation lists 'Most Reported' (the value reported most frequently across sources) and 'Smallest Value' (the lowest numeric value) as selectable dynamic rule types, alongside others not listed here like First Reported, Last Reported, and Largest Value. Last Updated and Last Created are not exact matches for any of the available dynamic rule type names.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 41,
    "question": "A Configuration Manager is planning the implementation of the CMDB. Which is the prescribed CSDM rollout order?",
    "options": [
      "Initiate, Plan, Execute, Deliver, Close",
      "Foundation, Crawl, Walk, Run, Fly",
      "Initial, Developing, Defined, Managed",
      "Architecture, Business, Technical, Governance"
    ],
    "correct": [
      "Foundation, Crawl, Walk, Run, Fly"
    ],
    "explanation": "The prescribed CSDM rollout order is Foundation, Crawl, Walk, Run, Fly — the five standard implementation stages of the ServiceNow Common Service Data Model for CMDB. Foundation sets up CMDB governance, data ownership rules, lifecycles, and basic CMDB hygiene before loading data. Crawl models core IT-related CIs and basic application-to-infrastructure relationships. Walk expands to technical services, network infrastructure, and service offering models. Run links technology to business services and builds a business service portfolio. Fly adds business capabilities, information objects, and catalog-backed service experiences.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 42,
    "question": "The ITSM Manager wants to use Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs. What CSDM stage would this be completed in?",
    "options": [
      "Fly",
      "Crawl",
      "Run",
      "Walk",
      "Foundation"
    ],
    "correct": [
      "Walk"
    ],
    "explanation": "Using Technology Management Offerings (Technical Service Offerings) to populate the support group of associated CIs is completed in the Walk stage of CSDM. The Walk stage focuses on defining services and offerings tied to the IT estate, including populating support groups for CIs via Technology Service Offerings, aligning with ITSM needs like incident management and operational support. Earlier stages (Foundation, Crawl) lack this service-offering depth, and later stages (Run, Fly) shift focus to business-layer alignment.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 43,
    "question": "A global enterprise integrates data from multiple discovery sources such as ServiceNow Discovery, SCCM, AWS, and manual uploads to populate its CMDB. However, each discovery source categorizes the same CIs differently, leading to duplicate records and inconsistencies across the system. As a result, the CMDB team is struggling with data accuracy and standardization. What actions does the CMDB team take to resolve this issue? (2 Correct Answers only)",
    "options": [
      "B. Allow each discovery source to define its own CI class, even if it results in inconsistencies",
      "D. Create a custom script to manually adjust incoming data before storing it in the CMDB",
      "C. Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "A. Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification."
    ],
    "correct": [
      "C. Use CI Class Manager to establish standardized CI classes and attributes across all discovery sources",
      "A. Implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification."
    ],
    "explanation": "The correct actions are: use CI Class Manager to establish standardized CI classes and attributes across all discovery sources (Option C), and implement and use identification and reconciliation rules to avoid duplicates and standardize CI classification (Option A). Identification and reconciliation rules match CIs from sources like Discovery, SCCM, AWS, and manual uploads using key attributes (serial number, hostname, IP), preventing duplicate and inconsistent data on ingestion. CI Class Manager establishes a unified taxonomy of CI classes and attributes enforced across all sources, addressing inconsistencies by mapping source-specific data to standardized classes before it reaches the CMDB. Allowing each source to define its own class, or relying on a custom script to manually adjust data, works around the platform's built-in tools rather than using them, and introduces more inconsistency and technical debt.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 44,
    "question": "How does a CMDB Administrator use the ServiceNow Platform to ensure the data quality associated with CIs in the CMDB?",
    "options": [
      "Data Quality Business Rule",
      "CMDB Audit Business Rule",
      "Data Quality Scheduled Job",
      "CMDB Workspace"
    ],
    "correct": [
      "CMDB Workspace"
    ],
    "explanation": "CMDB Workspace is the place a CMDB Administrator uses to review CMDB health and work on data quality issues via the ServiceNow Platform — it serves as the control center for searching, exploring, and accessing CMDB dashboards and tools related to data quality. A Data Quality Scheduled Job is the underlying mechanism that finds stale or missing data, and a Data Quality Business Rule is the control that validates records as they're created or updated, but the question specifically asks about where the administrator uses the platform to ensure quality, which points to the CMDB Workspace as the operational hub.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 45,
    "question": "A CMDB Administrator is implementing a Vulnerability Response or Security Incident Response and needs to ensure customers have enough context to estimate risk and set task priorities. Which Get Well Playbook from the CSDM Data Foundations Dashboard helps with this?",
    "options": [
      "C. Locations without a Parent Location",
      "B. Named Product Models with Product Owners",
      "D. Percentage of Custom Status Values for CI Life Cycle Stages",
      "A. Application Services with Business Application Relationships"
    ],
    "correct": [
      "A. Application Services with Business Application Relationships"
    ],
    "explanation": "Application Services with Business Application Relationships is the correct Get Well Playbook from the CSDM Data Foundations Dashboard for this scenario. It addresses missing or incorrect 'consumes/consumed by' relationships between Application Services and Business Applications, which are critical context (e.g. data sensitivity like PCI/PII) for risk assessment and task prioritization during Vulnerability Response or Security Incident Response. Without these relationships, risk estimation lacks critical business context. The other options target unrelated gaps — parent location hierarchies, product model ownership, or CI lifecycle stage custom values — that don't fit this scenario as directly.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 46,
    "question": "A CMDB Administrator is working in the CI Class Manager on the Basic Info tab. How can the class be set as a Principal Class?",
    "options": [
      "Select 'Yes' from the Principal Class choice list",
      "Click the Principal Class UI Action button",
      "Check the Principal Class check box"
    ],
    "correct": [
      "Check the Principal Class check box"
    ],
    "explanation": "The correct option is to check the Principal Class check box in CI Class Manager's Basic Info tab. Navigate to Configuration > CI Class Manager, open the desired class hierarchy (e.g. Windows Server), go to the Basic Info tab, check the Principal Class checkbox, and click Save. This must be repeated for subclasses if needed, since it doesn't inherit automatically. There's no 'Yes/No' Principal Class choice list, nor a dedicated UI Action button for this — it's a straightforward checkbox on the form.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 47,
    "question": "The Incident Process Owner asks which classes of CSDM are used on the Incident form. Which classes are appropriate? (Choose 2)",
    "options": [
      "Business Application",
      "Service Offering",
      "Service Portfolio",
      "Application Service"
    ],
    "correct": [
      "Service Offering",
      "Application Service"
    ],
    "explanation": "Service Offering and Application Service are the CSDM classes appropriately used on the Incident form. In CSDM, Application Service represents the logical stack of infrastructure affected by an incident (shown in CI-related lists for technical context), while Service Offering links to specific business or technical offerings impacted, used to route and auto-populate Support Groups. Business Application is primarily a CMDB class not typically surfaced directly on standard Incident forms under CSDM setup, and Service Portfolio is a higher-level catalog concept, not something operationally populated on Incident forms.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 48,
    "question": "A CMDB Administrator is evaluating whether to monitor the metrics provided on the CMDB Data Foundation Dashboard. Which benefits support the decision to continually monitor the results on this dashboard? (Choose 2)",
    "options": [
      "A. Provides a list of all CIs that failed health audits",
      "C. Reports on all orphan CIs in the CMDB",
      "B. Provides metrics on active CIs updated in the last 90 days",
      "D. Provides metrics for CIs Processed by the IRE"
    ],
    "correct": [
      "B. Provides metrics on active CIs updated in the last 90 days",
      "D. Provides metrics for CIs Processed by the IRE"
    ],
    "explanation": "The two benefits that support continually monitoring the CMDB Data Foundation Dashboard are: it provides metrics on active CIs updated in the last 90 days (tracking active CI freshness to identify stale records proactively), and it provides metrics for CIs processed by the IRE (monitoring the Identification and Reconciliation Engine to ensure proper reconciliation and CMDB operations). Providing a list of all CIs that failed health audits and reporting on all orphan CIs relate more to the separate CMDB Health Dashboard's Completeness/Compliance/Correctness focus rather than the Data Foundation Dashboard's own metrics.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 49,
    "question": "A CMDB Administrator wants to run the \"Services Have Owners Identified\" playbook to remediate the issues shown in the CMDB Data Foundations Dashboard. Which remediation plays would be used? (2 Ans)",
    "options": [
      "Fix Data",
      "Govern Data",
      "Report Data",
      "Analyze Data"
    ],
    "correct": [
      "Fix Data",
      "Analyze Data"
    ],
    "explanation": "The two remediation plays used for the 'Services Have Owners Identified' playbook are Analyze Data (identifies and analyzes the scope of services missing required ownership information, pinpointing exactly where the gaps exist) and Fix Data (guides the administrator in populating the previously empty owner and 'Owned by' fields). This two-step approach lets administrators first evaluate the extent of missing ownership records, then apply the necessary corrections within ServiceNow.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 50,
    "question": "A CMDB Administrator is leveraging CIs as part of an Integrated Risk Management implementation and the Entity Scoping process. The Administrator wants to leverage the CSDM Data Foundations playbook under the Run tab. Which CSDM relationships are leveraged using the CSDM playbooks?",
    "options": [
      "Locations that have established parent records",
      "Business Applications that have relationships to Application Services",
      "Logical CIs that have relationships with Information Objects",
      "Business Applications that have their relationships to Information Objects"
    ],
    "correct": [
      "Business Applications that have relationships to Application Services",
      "Business Applications that have their relationships to Information Objects"
    ],
    "explanation": "The CSDM playbooks under the Run tab of the CMDB Data Foundations Dashboard leverage the relationship between Application Services and Business Service Offerings (also called technology and business services), plus Business Applications' relationships to Information Objects. The Run stage focuses on linking business service offerings to service instances (application services) and identifies relationships between application services and the business service offerings they support, plus business applications and information objects. This relationship is critical for Integrated Risk Management because it enables business impact assessment, prioritized remediation, and communicating impact to stakeholders.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 51,
    "question": "The CMDB Administrator has set up two Dynamic Reconciliation Rules within the ServiceNow Production Instance. The 'Server' class has a Dynamic Reconciliation Rule of largest value for the RAM field. The 'Windows Server' class has a Dynamic Reconciliation Rule of most reported for the RAM field.\n\n| Discovery Source | RAM (MB) |\n|---|---|\n| Tivoli | 4,096 |\n| ServiceNow | 4,096 |\n| LANDesk | 2,048 |\n| Altiris | 8,192 |\n\nGiven the above data in the Multisource CMDB, which value would be added to the CMDB for RAM for a 'Server' CI?",
    "options": [
      "2,048 MB",
      "4,096 MB",
      "8,192 MB"
    ],
    "correct": [
      "8,192 MB"
    ],
    "explanation": "For a 'Server' CI, the dynamic reconciliation rule of largest value for RAM selects from the Multisource CMDB data based on type — largest or most reported. Across the sources: Tivoli 4,096 MB, ServiceNow 4,096 MB, LANDesk 2,048 MB, Altiris 8,192 MB. The largest reported value among these is 8,192 MB from Altiris. The Windows Server child class's separate 'most reported' rule for RAM does not override the explicit rule set on the parent Server class for a Server-typed CI.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 52,
    "question": "A Configuration Manager wants to explore ServiceNow CMDB 360 saved queries to see if the reports can assist with managing of CMDB data. What insights can be gained from CMDB 360 queries? (Choose 2)",
    "options": [
      "Gaps in attribute data from different data sources",
      "Unique CIs created from different data sources",
      "Different attribute values from different data sources",
      "Orphan CIs created from different data sources",
      "Duplicate configuration items from different data sources"
    ],
    "correct": [
      "Gaps in attribute data from different data sources",
      "Different attribute values from different data sources"
    ],
    "explanation": "CMDB 360 saved queries reveal gaps in attribute data from different data sources (identifying CIs with incomplete data from specific sources, useful for spotting data completeness issues) and different attribute values from different data sources (identifying 'data mismatches' when multiple sources report conflicting values for the same CI attribute, essential for troubleshooting reconciliation rules). While CMDB 360 can surface unique CIs reported by only one source and help identify duplicate or orphan CIs, that isn't its primary purpose — that's typically handled by CMDB Health dashboards and the Identification and Reconciliation Engine (IRE).",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 53,
    "question": "A CMDB team has noticed that some hardware CIs are missing the serial number information, making it difficult to maintain data accuracy. The team needs a structured approach to identify and address these gaps. Which accomplishes this task?",
    "options": [
      "CI Class Manager",
      "CMDB Data Foundation Playbook",
      "Service Graph Connectors"
    ],
    "correct": [
      "CMDB Data Foundation Playbook"
    ],
    "explanation": "The CMDB Data Foundation Playbook is the correct tool for this task. It provides a structured approach, including an analysis play and a fix play, to identify the root cause of missing serial numbers and provide solutions to retrieve the missing information, helping teams monitor CMDB health and track CI lifecycle. Service Graph Connectors are primarily used for integrating data from external sources into the CMDB (which could be a source of the problem if data is incomplete or not mapped correctly) but don't themselves provide the structured approach to identify and address the issue, and CI Class Manager is a tool for managing CI classes, attributes, relationships, and lifecycle, but doesn't provide the step-by-step playbook for addressing missing data gaps like this.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 54,
    "question": "A CMDB Administrator needs to prevent duplicate CI creation from import sets that load data into the CMDB from vendor shipment files containing CI information. How can the Administrator do this?",
    "options": [
      "Set the coalesce on two mappings within the transform map",
      "Create comparison rules in the IRE",
      "Use the CMDBTransformUtil API in the transform script",
      "Set the system property to utilize the IRE within transform maps"
    ],
    "correct": [
      "Use the CMDBTransformUtil API in the transform script"
    ],
    "explanation": "Use the CMDBTransformUtil API in the transform script. To prevent duplicate CI creation from import sets loading vendor shipment CI data, the correct approach leverages the CMDBTransformUtil API in the transform script's onBefore function, which routes the import through ServiceNow's Identification and Reconciliation Engine (IRE) to correctly identify existing CIs and either update or insert them, avoiding duplicates. Setting coalesce on two mappings within the transform map handles basic deduplication on specific fields but bypasses IRE's comprehensive identification/reconciliation matching, risking inconsistent results; creating comparison rules in the IRE prioritizes data from trusted sources but doesn't handle the initial CI identification during creation; and setting a system property to utilize the IRE within transform maps doesn't exist — IRE integration requires explicit scripting.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 55,
    "question": "When integrating data into the CMDB using import sets and transform maps, which type of script is added to ensure the data is processed through the IRE?",
    "options": [
      "onStart",
      "onBefore",
      "onAfter",
      "onComplete"
    ],
    "correct": [
      "onBefore"
    ],
    "explanation": "onBefore is the correct script type. When integrating data into the CMDB using import sets and transform maps, an onBefore script is added to the transform map to ensure the data is processed through the Identification and Reconciliation Engine (IRE), typically calling CMDBTransformUtil.identifyAndReconcile(source, map, log) before the row is mapped to the target table, preventing duplicates by matching against existing CIs. onAfter executes after the row is transformed and saved (too late for IRE processing), onStart runs once at the beginning of the import (for setup like initialization), and onComplete runs once at the end (for cleanup or logging) — none of these route individual rows through IRE.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 56,
    "question": "The CMDB Administrator group seeks to filter specific CI classes that display on the CMDB Health Dashboard. This ensures that only relevant data is displayed, excluding items that are not ready for management. Which feature can the group utilize to achieve this goal?",
    "options": [
      "Data Refresh Rules",
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules"
    ],
    "correct": [
      "Health Inclusion Rules"
    ],
    "explanation": "Health Inclusion Rules are the feature the CMDB Administrator group should use to filter which specific CI classes display on the CMDB Health Dashboard, ensuring only relevant data is shown and excluding items not ready for management. These rules are configured via CI Class Manager under the Health section for a given class, targeted at metrics like Completeness, Compliance, and Correctness. Data Refresh Rules handle periodic data updates from sources rather than dashboard filtering; Identification Rules define how CIs are matched and created rather than health display; and Reconciliation Rules prioritize data from multiple sources for attributes, unrelated to selecting which CI classes appear on the dashboard.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 57,
    "question": "An organization is using CMDB Query Builder to find all application services with a database and all infrastructure in those application services. Which steps does the organization take to build this query? (2 Correct Answers only)",
    "options": [
      "A. Add a non-CMDB table to the query",
      "C. Use a CMDB Query to include application services and their related infrastructure",
      "B. Use a Service Mapping Query to find all incidents related to the database",
      "D. Use a Service Mapping Query to include non-CMDB tables like the incident table"
    ],
    "correct": [
      "A. Add a non-CMDB table to the query",
      "C. Use a CMDB Query to include application services and their related infrastructure"
    ],
    "explanation": "The two steps to build this CMDB Query Builder query are: add a non-CMDB table to the query (Option A), and use a CMDB Query to include application services and their related infrastructure (Option C). CMDB Query Builder allows adding non-CMDB tables (like Incident) to the query, since data isn't limited to core CMDB structure, which is crucial for meeting queries that need to find application services with related data across tables. Using a CMDB Query to include application services and their related infrastructure is the primary function of the CMDB Query Builder — traversing relationships between CI classes within the CMDB to build a comprehensive map of the IT landscape and identify application services and their related infrastructure (like a database). Using a Service Mapping Query to find related incidents or to include non-CMDB tables like the incident table misapplies Service Mapping's dependency-discovery purpose to what should be a CMDB Query Builder task.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 58,
    "question": "An organization is updating the CMDB to include new asset types like IoT devices. Relevant CI classes need to be added and outdated ones need to be removed from the Principal Class filter to ensure accurate display in ITSM processes. Which roles are needed to add or remove classes? (2 Correct Answers only)",
    "options": [
      "personalize_dictionary",
      "sn_cmdb_admin",
      "sn_csdm_admin",
      "cmdb_query_builder"
    ],
    "correct": [
      "personalize_dictionary",
      "sn_cmdb_admin"
    ],
    "explanation": "sn_cmdb_admin and personalize_dictionary are the roles required to add or remove classes from the Principal Class filter. sn_cmdb_admin grants high-level access to CMDB tooling, including CI Class Manager for viewing/editing class settings, and personalize_dictionary enables editing dictionary entries and form configurations, necessary alongside sn_cmdb_admin's implied access to save changes to the Principal Class field. Other roles like cmdb_query_builder (for Query Builder access, not class management) or sn_csdm_admin (for CSDM domain management) do not suffice alone for this specific task.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 59,
    "question": "A Configuration Manager wants to use the Unified Map. Where would it be accessed?",
    "options": [
      "CI Class Manager",
      "CMDB Workspace",
      "CMDB Data Manager"
    ],
    "correct": [
      "CMDB Workspace"
    ],
    "explanation": "A Configuration Manager accesses the Unified Map in CMDB Workspace. Navigate to All > CMDB Workspace > Unified Map, select it from the Quick Links section within CMDB Workspace, or open it directly from a CI form in operational state by choosing Open Map. This visualizes CIs and their relationships hierarchically, aiding change impact analysis. CI Class Manager handles class hierarchy, identification/reconciliation rules, and CMDB health rather than the Unified Map, and CMDB Data Manager handles bulk CI operations like retirement and archival, unrelated to mapping.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 60,
    "question": "A CMDB Administrator needs to import external data into the CMDB. As the CMDB Administrator wants to reduce the risk for creating duplicates and to update information from unauthorized sources, it has to be ensured that the Identification and Reconciliation API will not be bypassed. What is the recommended method to import data into the CMDB utilizing the Identification and Reconciliation API?",
    "options": [
      "IntegrationHub ETL",
      "Import Sets and Transform Maps",
      "Table API (REST or SOAP API)"
    ],
    "correct": [
      "IntegrationHub ETL"
    ],
    "explanation": "IntegrationHub ETL is the recommended method to import data into the CMDB while ensuring the Identification and Reconciliation API is not bypassed. Directing the import through IntegrationHub ETL means the data automatically flows through ServiceNow's CMDB Identification and Reconciliation processes, so the IRE is applied and cannot be bypassed — no additional configuration is needed, since it's the out-of-the-box solution that ensures proper CMDB identification and reconciliation. Import Sets and Transform Maps can be made to use the IRE by manually calling the CMDBTransformUtil API in the transform map's onBefore script, but IntegrationHub ETL is the recommended, out-of-the-box supported method that always applies IRE. Writing directly via the Table API (REST or SOAP) can bypass IRE entirely and is not recommended for CMDB imports that must enforce identification and reconciliation.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 61,
    "question": "A CMDB Administrator is reviewing the health of the CMDB and notices a large percentage of the Hardware CIs are missing serial numbers. The Administrator is concerned this may cause duplicate CIs and would like to resolve the issue in a timely manner. What structured guidelines provided by ServiceNow are available to troubleshoot and resolve the issue?",
    "options": [
      "CMDB Health Dashboard Playbooks",
      "CSDM Now Create Playbooks",
      "CMDB Data Foundations Dashboard Playbooks",
      "CSDM Data Foundations Dashboard Playbooks"
    ],
    "correct": [
      "CMDB Data Foundations Dashboard Playbooks"
    ],
    "explanation": "CMDB Data Foundations Dashboard Playbooks are the structured guidelines available from ServiceNow best suited for a CMDB Administrator troubleshooting missing serial numbers on Hardware CIs. Accessible via the CMDB Data Foundations Dashboard, these playbooks monitor foundational health metrics on compliance, identify issues like 'Hardware CIs with Serial Numbers' gaps, and provide remediation links and metrics to prevent duplicates from missing identifiers (which IRE relies on to distinguish CIs).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 62,
    "question": "A Configuration Manager needs to ingest third-party CIs into the CMDB. Which method minimizes the risk of technical debt?",
    "options": [
      "Table API",
      "Vendor-provided integration",
      "Service Graph Connector",
      "Import Sets and Transform Maps"
    ],
    "correct": [
      "Service Graph Connector"
    ],
    "explanation": "Service Graph Connector is the optimal method to minimize the risk of technical debt when ingesting third-party CIs into the CMDB. It processes data through IRE rules, avoids custom scripts or direct imports that bypass reconciliation, and maintains data governance without bypassing IRE logic, reducing conflicts and future rework, while also supporting alignment with platform upgrades. Table API or Import Sets alone carry higher technical debt risk since they bypass IRE-driven normalization unless manually scripted, and vendor-provided integrations vary in quality and may often lack IRE integration by default.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 63,
    "question": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately recorded non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. Which field on an Incident form is automatically populated after a CI is selected that references an appropriate support group?",
    "options": [
      "Assignment Group",
      "Change Group",
      "Approval Group",
      "Support Group",
      "Managed By Group"
    ],
    "correct": [
      "Assignment Group"
    ],
    "explanation": "Assignment Group is the field on an Incident form that is automatically populated after a CI is selected that references an appropriate support group. When a Configuration Item is selected on an Incident form, the Assignment Group field pulls from the support_group field on the CI record in the CMDB (cmdb_ci table), which identifies the group responsible for supporting that CI. The CMDB integration with discovered data and Service Mapping ensures this reference is accurate and service-aware, directing the right team without manual reassignment. Managed By Group is not a standard Incident field tied to CI ownership in this way, Approval Group relates to approvals rather than CI selection, Change Group relates to change management specifically, and Support Group exists on the CI but isn't itself a standard Incident form field — Assignment Group is the target.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 64,
    "question": "A development team is working on a project where an application will be deployed to many hardware servers. There are several security requirements that must be adhered to for lawful regulatory compliance because the application will be holding customer personal data (PII and PCI). Where in the CMDB should the development team store the information that will be used to satisfy audits?",
    "options": [
      "Business Applications and Information Objects",
      "Technology Management Service Offerings (Technical Service Offerings) and Groups",
      "Customer Service Offerings and Databases"
    ],
    "correct": [
      "Business Applications and Information Objects"
    ],
    "explanation": "Business Applications and Information Objects are where the development team should store information used to satisfy compliance audits. Business Applications represent the software systems (like the deployed application) that process customer data, and Information Objects model the data entities (like customer records) and their classifications, including whether they carry PII or PCI attributes. Together, this layer is where sensitivity labels, retention rules, and other regulatory attributes are attached, letting audit and GRC teams report on which applications hold PII/PCI and what compliance rules apply to that data. Customer Service Offerings and Databases models the business-facing service and its backing data store, but not the granular audit metadata about specific data types processed by each application, and Technology Management Service Offerings and Groups are more about IT operations-level services and groupings, not the primary place for regulatory audit data to attach to at the application level.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 65,
    "question": "A CMDB Administrator needs the fastest time to value solution for effectively ingesting, managing, and maintaining Windows CIs and relationships. Which management tool will accomplish this to import Windows computer data from SCCM?",
    "options": [
      "Import set using JDBC data source connection to SCCM using transform maps",
      "IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE)",
      "SCCM Service Graph Connector",
      "SCCM Usage Metering Spoke"
    ],
    "correct": [
      "SCCM Service Graph Connector"
    ],
    "explanation": "SCCM Service Graph Connector is the fastest time-to-value solution for ingesting, managing, and maintaining Windows CIs and relationships from SCCM. It's a pre-built, out-of-the-box data source, transform maps, and mappings tool tailored specifically for SCCM (System Center Configuration Manager), automating data import and population of cmdb_ci_computer classes and relationships with minimal configuration. It leverages guided IntegrationHub ETL processes optimized for Service Graph Connectors, reducing setup time compared to custom ETL or JDBC imports. An import set using a JDBC data source connection to SCCM using transform maps offers powerful ETL for third-party data via JDBC/REST but requires building custom ETL maps and queries, not pre-optimized for SCCM. An IntegrationHub ETL connection to SCCM using Robust Transform Engine (RTE) still requires manual setup and tagging for relationships without the automation the pre-built SCCM connector provides, and SCCM Usage Metering Spoke focuses on software usage metering, not broad CI import from SCCM relationships.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 66,
    "question": "A CMDB Administrator wants only the CIs of Principal Classes to appear in CI reference fields, such as the CI reference field on an Incident form. Where does the CMDB Administrator designate Principal Classes?",
    "options": [
      "CI Class Manager",
      "CMDB Data Manager",
      "CMDB Workspace",
      "System Properties"
    ],
    "correct": [
      "CI Class Manager"
    ],
    "explanation": "In ServiceNow, the CMDB Administrator designates Principal Classes using CI Class Manager, where they check the specific box for critical CI classes on that class's form view. This limits reference fields (like Incident forms) to show only CIs from Principal Classes, reducing clutter and focusing on key infrastructure for incident, change, and problem workflows. Subclasses require the setting to be applied per class, since it doesn't inherit automatically.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 67,
    "question": "A CMDB Administrator changes the query for the SCCM Service Graph Connector. What is the impact of this change?",
    "options": [
      "Any updates for the SCCM Service Graph Connector will be skipped during the upgrade",
      "Any Scheduled Jobs for the SCCM Service Graph Connector will need to be configured",
      "The Data Source for the SCCM Service Graph Connector will be marked as inactive."
    ],
    "correct": [
      "Any updates for the SCCM Service Graph Connector will be skipped during the upgrade"
    ],
    "explanation": "Changing the query in the SCCM Service Graph Connector impacts upgrades: any updates for the SCCM Service Graph Connector will be skipped during the upgrade. When a CMDB Administrator modifies the query (SQL statement) for the SCCM Service Graph Connector in ServiceNow, the data source is treated as customized. This customization causes any updates to the baseline query files to be skipped during platform upgrades to newer connector versions, protecting the customization but also meaning the customer misses out-of-the-box query improvements going forward. Scheduled jobs for the connector do not require reconfiguration alone as a real-time runtime error, and the data source itself is not automatically marked inactive because of a query change.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 68,
    "question": "An organization utilizes multiple data sources to update its CMDB, each assigned a different priority level. A high-priority data source is scheduled to update server records weekly. However, due to an integration issue, the high-priority data source stops updating the records. Which configuration can be used to allow a lower-priority data source to update records after a specified period of inactivity from the higher-priority source?",
    "options": [
      "Health Inclusion Rules",
      "Identification Rules",
      "Reconciliation Rules",
      "Data Refresh Rules"
    ],
    "correct": [
      "Data Refresh Rules"
    ],
    "explanation": "Data Refresh Rules are the configuration that allows a lower-priority data source to update records after a specified period of inactivity from a higher-priority source. These rules in ServiceNow CMDB determine when a CI becomes stale for a specific high-priority data source after a period of inactivity, such as no updates within a defined 'Effective Duration' (e.g. weekly schedule) due to an integration issue. This configuration allows a lower-priority source to update the server records once the primary source's precedence is overridden by working alongside Reconciliation Rules for the relevant CI class. Reconciliation Rules set static priority for data sources but don't handle inactivity-based fallback alone; unless conditions are met via Data Refresh Rules, Identification Rules define how CIs are matched and created (based on attributes, not priority or staleness logic), and Health Inclusion Rules manage CI health metrics and inclusion in health scores, unrelated to data source updates.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 69,
    "question": "Which type of CMDB Data Manager policy creates tasks that allow the assigned individual to update fields on the CI record?",
    "options": [
      "Attestation",
      "Audit",
      "Certification",
      "Compliance"
    ],
    "correct": [
      "Certification"
    ],
    "explanation": "Certification is the type of CMDB Data Manager policy that creates tasks allowing the assigned individual to update fields on the CI record as part of the certification process. Certification policy tasks include UI actions to certify fields as OK/Failed and explicitly enable field value updates during that review. Tasks appear in CMDB Workspace or backend lists, with assignees rolling up certified CIs into attached CSVs upon completion. Configuration involves setting filters for target CIs, assignment groups/users, due dates, and fields to certify. Attestation focuses on confirming CI existence (e.g. marking attested, rejected, or not reviewed) without field update capability, Audit emphasizes logging and review without editable fields, and Compliance checks adherence to standards without update tasks.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 70,
    "question": "A Configuration Manager is managing a CI class in the CMDB. The identification rule(s) needs an update. Where can the Configuration Manager view and configure the existing identification rule(s) for the class? (Choose two.)",
    "options": [
      "CI Identifiers module",
      "CI Class Manager",
      "API Integrations",
      "IRE Application"
    ],
    "correct": [
      "CI Identifiers module",
      "CI Class Manager"
    ],
    "explanation": "CI Identifiers module and CI Class Manager are where a Configuration Manager can view and configure existing CI identification rule(s) for a class. In your environment, navigate to Configuration > CI Class Manager in the main navigation menu, click the Hierarchy button and search for or select the specific CI class you want to manage, and in the Configuration workspace for that class, expand the Identification section and select Identification Rules. From there you can view the identifier entries, modify search attributes, or add and configure related entries and inclusion rules. The CI Identifiers module provides a similar direct entry point to view and configure these rules.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 71,
    "question": "A Configuration Management Governance team is transitioning from utilizing legacy CMDB status fields to CSDM life cycle status fields. Which table can be modified?",
    "options": [
      "Life Cycle Controls [life_cycle_control]",
      "Life Cycle Mapping [life_cycle_mapping]",
      "Life Cycle Stage Status [life_cycle_stage_status]",
      "Life Cycle Stages [life_cycle_stage]"
    ],
    "correct": [
      "Life Cycle Mapping [life_cycle_mapping]"
    ],
    "explanation": "Life Cycle Mapping [life_cycle_mapping] is the table that can be modified when transitioning from legacy CMDB status fields to CSDM life cycle status fields. This table defines how legacy statuses (like operational or install_status) map to CSDM life cycle status fields (like life_cycle_stage and life_cycle_stage_status), configuring mappings between old and new values. ServiceNow pre-populates this table with recommended mappings, but teams customize it for their instance by adding, editing, or activating entries for specific CMDB classes and statuses. Once mappings are set and activated, life_cycle_mapping bulk-aligns or ongoing syncing populates the CSDM fields across CMDB CIs and assets automatically. Life Cycle Controls [life_cycle_control] defines valid stage-status combinations per class but isn't directly edited for this transition, Life Cycle Stage Status [life_cycle_stage_status] stores status choice values (read-only for most users), and Life Cycle Stages [life_cycle_stage] stores stage choice values (e.g. Hardware/Software), not for direct edits either.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 72,
    "question": "According to the Common Service Data Model (CSDM), a server team is requesting a catalog item be created for infrastructure requests. Which role is involved in initiating the request and defining requirements?",
    "options": [
      "Enterprise Architect",
      "Application Service Owners",
      "Technology Service Owners"
    ],
    "correct": [
      "Technology Service Owners"
    ],
    "explanation": "Technology Service Owners are the role involved in initiating the request and defining requirements for an infrastructure catalog item under CSDM. Technology Service Owners manage infrastructure tied to services or delivery, such as provisioning servers via catalog items, and own Technical Service Offerings in the Technology layer, which underpin application services built on infrastructure. Application Service Owners manage application stacks and software services, focused on app-level rather than raw infrastructure concerns, and Enterprise Architects handle high-level design and procurement strategy, overseeing broader architecture rather than specific catalog requests.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 73,
    "question": "An organization needs to maintain non-discoverable attributes, such as warranty expiration dates for hardware CIs. These attributes are not updated by automated discovery tools. What method ensures these attributes are accurately maintained for all CIs?",
    "options": [
      "Use a scheduled data import to update the attributes from an external source",
      "Create a new CI class specifically for non-discoverable attributes",
      "Use the CMDB Reconciliation Engine to update the attributes"
    ],
    "correct": [
      "Use a scheduled data import to update the attributes from an external source"
    ],
    "explanation": "Using a scheduled data import to update the attributes from an external source ensures non-discoverable attributes (like warranty expiration dates) are accurately maintained. Since these attributes cannot be populated by automated discovery tools, they require integration with external systems (like vendor databases or asset management tools) via scheduled imports using Import Sets and Transform Maps. This automates regular updates, ensuring accuracy and completeness across all CIs without manual intervention. Creating a new CI class specifically for non-discoverable attributes doesn't address maintenance and unnecessarily complicates the CMDB hierarchy, and using the CMDB Reconciliation Engine to update attributes defines authoritative sources and reconciles competing values, but it doesn't source or schedule updates for non-discoverable data on its own — it needs a data feed like a scheduled import to work with.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 74,
    "question": "A healthcare provider faces a critical incident affecting its patient management system. The provider needs to identify the users impacted to mitigate disruption effectively. Which CSDM-related data should they leverage?",
    "options": [
      "Service environment attribute",
      "Affected CI [task_ci] related list",
      "Incident history of similar CIs",
      "Service Offerings by Department or Location"
    ],
    "correct": [
      "Service Offerings by Department or Location"
    ],
    "explanation": "Service Offerings by Department or Location is the CSDM-related data a healthcare provider should leverage to identify users impacted by a critical incident affecting its patient management system. In a critical incident scenario like a patient management system outage, healthcare providers use CSDM to map services to organizational units such as departments or locations. Service Offerings represent published business capabilities, linking affected CIs to specific user groups via subscriptions or consumer fields. This enables quick identification of impacted users (e.g. doctors or patients in a department or location) for targeted notification and mitigation, unlike incident history of similar CIs (useful for patterns or MTTR trends but not real-time user mapping), service environment attribute (helps with deployment context, not user mapping), or the affected CI related list (tracks related tasks/CIs but lacks direct user/department linkage).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 75,
    "question": "A data center has many servers. The CMDB Administrator wants to confirm that all servers exist. Which Data Manager policy type does the Administrator implement?",
    "options": [
      "Certification",
      "Verification",
      "Attestation",
      "Promotion"
    ],
    "correct": [
      "Attestation"
    ],
    "explanation": "Attestation is the Data Manager policy type the CMDB Administrator implements to confirm that all servers in a data center exist. This policy type assigns tasks to verify the ongoing existence and management of Configuration Items like servers, ensuring stale or ghost records are identified and retired if no longer active infrastructure. Promotion moves CIs between environments (e.g. dev to prod) rather than confirming existence, Verification isn't a standard Data Manager policy type in this context, and Certification validates data accuracy and updates CI data accuracy quarterly, broader than existence confirmation. In practice, apply Attestation to the Server class with filters for data center scope, assigning to Managed By groups for review.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 76,
    "question": "In a company, there is a need to understand the CMDB maturity level required. Different stakeholders listed several use cases they expect over time. Which use case requires Information Objects?",
    "options": [
      "The Asset Management team wants to understand asset lifecycle compliance in a Business Application context",
      "The Business Service Management team wants to understand the operational impact for their consumer parties",
      "The SecOps team wants to understand the operational risk in the Business Application context",
      "The Customer Service team wants to onboard proactive case management",
      "The Event Operations team wants to automate their events into incidents for operational actions"
    ],
    "correct": [
      "The SecOps team wants to understand the operational risk in the Business Application context"
    ],
    "explanation": "The SecOps team wanting to understand operational risk in the Business Application context requires Information Objects. This CSDM use case requires mapping data protection needs to Business Applications, where Information Objects define the data (e.g. PII, PHI, Technical Data) used by business applications, essential for understanding risk. Other use cases (like Asset Management checking asset lifecycle compliance, or Business Service Management understanding operational impact) typically require mapping specific data flows to Applications or Assets rather than requiring the granular data classification and impact analysis that Information Objects provide, and this maturity requirement appears at higher maturity levels (Run/Fly) where compliance and data protection become central. This aligns with CSDM Run or Fly phases, where Business Applications 'consume' tracked data flows and dependencies.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 77,
    "question": "A ServiceNow Administrator needs to create multiple new classes in the CMDB but wants to follow ServiceNow's best practices for naming CMDB classes to prevent technical debt. Which is the starting prefix for all custom CMDB tables?",
    "options": [
      "cmdb_ci",
      "ci_cmdb",
      "u_cmdb_ci",
      "u_ci_cmdb"
    ],
    "correct": [
      "u_cmdb_ci"
    ],
    "explanation": "u_cmdb_ci is the starting prefix ServiceNow recommends for all custom CMDB tables, to align with standard naming conventions and avoid technical debt. This prefix distinguishes custom tables from out-of-the-box ones like cmdb_ci_server or cmdb_ci_hardware, preventing standard CMDB tables from following the platform's [_type] pattern (e.g. cmdb_ci_linux_server) being confused with user-created content, which the platform's CMDB Data Foundations Dashboard flags as 'Custom CMDB Tables Not Using Standard Naming' to highlight compatibility and smoother upgrades. In the CI Class Manager, select a parent class and name your new class starting with u_cmdb_ci_ (e.g. u_cmdb_ci_custom_device), maintaining hierarchy and supporting identification/reconciliation rules without rework. Options like cmdb_ci (reserved for base/standard classes) and u_ci_cmdb do not follow the prescribed pattern.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 78,
    "question": "A CMDB Manager uses CMDB 360/Multisource CMDB to maintain and improve CMDB quality. Why would the Manager use CMDB 360/Multisource CMDB?",
    "options": [
      "A. To identify CI attributes from multiple data sources",
      "D. To populate the CMDB from multiple data sources",
      "B. To ingest data from multiple data sources using Import Set(s)",
      "C. To ingest data from multiple data sources using Service Graph Connector(s)"
    ],
    "correct": [
      "A. To identify CI attributes from multiple data sources"
    ],
    "explanation": "A CMDB Manager uses CMDB 360/Multisource CMDB to identify CI attributes from multiple data sources. CMDB 360, part of ServiceNow's Multisource CMDB feature, helps managers visualize and analyze differences in Configuration Item (CI) attributes across multiple data sources, such as Discovery and Service Graph Connectors. It retains a full history of proposed values from each source in the Multisource CMDB Data table, enabling identification of discrepancies to improve data quality and reconciliation rules. Import Sets or Service Graph Connectors focus on data ingestion from multiple sources but CMDB 360 does not perform ingestion itself — it analyzes post-ingestion data. CMDB 360 specifically tracks and visualizes attribute-level sources for quality management, rather than general CMDB population from multiple sources.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 79,
    "question": "A CMDB Administrator wants to ensure all short-lived CIs that have not been discovered in the past week are removed. After retiring the CI records, which recommended action does the Administrator take?",
    "options": [
      "Create a scheduled job",
      "Create a delete policy",
      "Create a business rule"
    ],
    "correct": [
      "Create a delete policy"
    ],
    "explanation": "Create a delete policy is the recommended action for ensuring short-lived CIs not discovered in the past week are removed after retiring. This is the recommended action in ServiceNow's CMDB Data Manager for handling retired, short-lived CIs (such as those not discovered in the past week). CMDB Data Manager uses delete policies to automatically remove CIs that meet certain criteria (like no recent discovery or references in tasks/incidents), protecting data integrity while cleaning up stale CIs. These policies evaluate CIs daily via scheduled jobs, targeting retired ones (e.g. short-lived ones with no dependencies) for deletion. Creating a scheduled job is less ideal since Data Manager already handles this internally for standard retirement workflows, and creating a business rule is either as-is, real-time, event-triggered actions rather than the scheduled, policy-based bulk cleanup of retired CIs, so this policy-based method follows ServiceNow best practices for maintaining CMDB health.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 80,
    "question": "The CMDB Configuration Management team wants to manage de-duplication tasks generated from data ingested into the CMDB via the Identification and Reconciliation Engine (IRE). In which area of the CMDB Workspace do they locate these de-duplication tasks?",
    "options": [
      "Total status tile under the My Work tab",
      "CMDB feature adoption tile under the Insights tab",
      "Important actions tile under the Home tab"
    ],
    "correct": [
      "Important actions tile under the Home tab"
    ],
    "explanation": "Important actions tile under the Home tab is where de-duplication tasks are located in CMDB Workspace. ServiceNow Workspace documentation shows the de-duplication experience under the CMDB Navigation path, and de-duplication task-oriented items are surfaced from the Home area rather than Insights or My Work.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 81,
    "question": "A CMDB Administrator is comparing the Unified Map to the Service Mapping map. What are additional capabilities of the Unified Map?",
    "options": [
      "Map nodes can be filtered based on user preferences",
      "Number of levels displayed on a map can be modified",
      "Map can be zoomed in and out",
      "Visibility to an application and the host it is installed on"
    ],
    "correct": [
      "Map nodes can be filtered based on user preferences"
    ],
    "explanation": "Map nodes can be filtered based on user preferences is an additional capability of the Unified Map compared to Service Mapping. Unified Map offers user-specific filter presets, allowing CMDB Administrators to save and apply personalized filter settings (e.g. by CI class, relationship type, or ownership) to customize map views, whereas Service Mapping supports basic map customization like hiding attributes, but lacks dedicated user preference filters. Both maps support zooming in and out, visibility to an application and the host it's installed on (via core CMDB relationship view), and modifying the number of levels displayed — these are common to both, not unique to Unified Map.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 82,
    "question": "A Windows server is reclassified from the Server table [cmdb_ci_server] to the Windows Server table [cmdb_ci_win_server] when processed through the Identification and Reconciliation Engine (IRE). Which process occurred?",
    "options": [
      "Class Change",
      "Class Upgrade",
      "Class Downgrade",
      "Class Switch"
    ],
    "correct": [
      "Class Upgrade"
    ],
    "explanation": "The process that occurs is a Class Upgrade. In ServiceNow's CMDB, moving a CI from the generic Server [cmdb_ci_server] table to the more specific Windows Server [cmdb_ci_win_server] table via the Identification and Reconciliation Engine (IRE) constitutes a Class Upgrade. This occurs because cmdb_ci_win_server is a child class of cmdb_ci_server in the class hierarchy, adding specialized attributes like OS details. Class Downgrade shifts to a parent class (more generic, fewer attributes — the reverse direction), Class Switch moves across unrelated branches (e.g. Linux Server to Windows Server), and Class Change is not a standard term used for this specific hierarchy-based reclassification.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 83,
    "question": "A CMDB Administrator wants to configure IRE rules for the CMDB. The CMDB Administrator opens CI Class Manager and sees the Health Inclusions Rules tab available under a CI Class. How are these utilized by the IRE?",
    "options": [
      "To reconcile specific attributes based on data sources",
      "To narrow the scope of CIs included in the identification process",
      "To reduce the data ingested into the CMDB"
    ],
    "correct": [
      "To narrow the scope of CIs included in the identification process"
    ],
    "explanation": "Health Inclusion Rules are utilized by the Identification and Reconciliation Engine (IRE) to narrow the scope of CIs included in the identification process. These rules are applied to specific CI classes to filter out unnecessary or inactive CIs, effectively restricting the scope of data ingested into the CMDB by defining sort conditions (e.g. only processing CIs where the Operational Status is set to Operational). By doing so, the IRE ignores irrelevant or decommissioned records, saving processing time and ensuring higher data quality. This includes benefits of Scope Reduction (limiting which CIs are evaluated during processing by setting inclusion or exclusion conditions), Efficiency (preventing the IRE from spending resources evaluating outdated, duplicate, or decommissioned CIs), and Accuracy (ensuring the CMDB represents the current, active infrastructure by excluding retired CIs from matching routines).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 84,
    "question": "A Platform Data Owner wants to improve data quality with reconciliation rules across five discovery sources. The Data Owner knows the best option is to include CMDB 360 / Multisource CMDB to manage and monitor discovery sources. The company currently does not have the ITSM Discovery license required for CMDB 360 / Multisource CMDB. What can the Data Owner do in this case?",
    "options": [
      "ITDM Discovery must be purchased to take advantage of multisource IRE rules",
      "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled",
      "CMDB 360",
      "Multisource is a platform product that can be used immediately"
    ],
    "correct": [
      "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled"
    ],
    "explanation": "The IRE reconciliation rules can use discovery sources regardless of CMDB 360 being enabled. The Data Owner can use IRE reconciliation rules with discovery sources across five sources to enhance data quality using reconciliation rules, even without the ITSM Discovery license required for full CMDB 360/Multisource CMDB functionality. IRE (Identification and Reconciliation Engine) still supports basic reconciliation across data sources like Discovery or integrations, independent of CMDB 360 activation, allowing immediate data quality improvements without new purchases, as IRE handles attribute reconciliation and duplication prevention natively. ITOM Discovery does not need to be purchased to take advantage of multisource IRE rules — basic IRE rules work without it, though advanced CMDB 360 features (like full multisource history) do require the ITOM Discovery license activated first, and CMDB 360/Multisource is not simply a platform product usable immediately without any prerequisites — it needs the ITDM Discovery license activated first for its full capabilities.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 85,
    "question": "A CMDB Administrator has installed a Service Graph Connector and customized a script transform. What will happen on subsequent upgrades if the default definition of the script transform is updated?",
    "options": [
      "The upgrade stops and reports an error",
      "The Service Graph Connector upgrade refuses to start",
      "A skipped change is created and no change is made to the customized script transform definition"
    ],
    "correct": [
      "A skipped change is created and no change is made to the customized script transform definition"
    ],
    "explanation": "A skipped change is created and no change is made to the customized script transform definition. ServiceNow's upgrade process for scoped applications like Service Graph Connectors detects customizations to out-of-box records such as script transforms. When the upgrade brings in a new version of the default script transform definition, the system flags the customized record as a skipped change and logs it in the upgrade center or sys_update_xml table, rather than overwriting the customer's custom version. Admin actions include reviewing skipped changes post-upgrade via Upgrade Center > Skipped Records, where the new default (overwriting) version can be accepted or the customized version retained. This prevents upgrade errors or halts and ensures the Robust Transform Engine customization follows this standard, safe-progression pattern rather than stopping or refusing to start due to customizations.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 86,
    "question": "DRAG DROP — A new ServiceNow customer is assembling a Configuration Management team to support their CMDB. Drag each role to its corresponding job description.\n\n**Job descriptions:**\n1. Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards\n2. Accountable for managing all elements that make up a portfolio throughout their entire lifecycle\n3. Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records\n4. Obtains highest level role for CMDB privileges\n\n**Options (roles):** CI Analyst / CMDB Process Owner / Configuration Manager/CMDB Admin / Service or Product Owner",
    "options": [],
    "correct": [
      "CI Analyst → Has read-only access to CMDB data and to basic user interface such as CMDB reports and dashboards",
      "CMDB Process Owner → Manages assigned CI tables and keeps records updated and resolves tasks related to CMDB records",
      "Configuration Manager/CMDB Admin → Obtains highest level role for CMDB privileges",
      "Service or Product Owner → Accountable for managing all elements that make up a portfolio throughout their entire lifecycle"
    ],
    "explanation": "CI Analyst has read-only access to CMDB data via basic reports and dashboards. CMDB Process Owner manages assigned CI tables, keeps records updated, and resolves CMDB-related tasks. Configuration Manager/CMDB Admin holds the highest technical privilege level for CMDB administration. Service or Product Owner is accountable for a portfolio's elements across its full lifecycle.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 87,
    "question": "What are the characteristics or functions of ServiceNow IntegrationHub ETL? (2 Answers only)",
    "options": [
      "Performs discovery data collection and updates the CMDB",
      "Imports Microsoft SCCM/Intune data into the CMDB",
      "Uses the IRE to process and integrate data",
      "Integrates third-party data into the CMDB or into non-CMDB tables"
    ],
    "correct": [
      "Uses the IRE to process and integrate data",
      "Integrates third-party data into the CMDB or into non-CMDB tables"
    ],
    "explanation": "IntegrationHub ETL is designed to bring third-party data into the CMDB or into non-CMDB tables, and it automatically incorporates the Identification and Reconciliation Engine (IRE) to prevent duplicate CIs and ensure attributes are reconciled correctly across sources. \"Performs discovery data collection\" describes ServiceNow Discovery, not ETL. \"Imports Microsoft SCCM/Intune data\" describes a Service Graph Connector use case, not the general ETL mechanism itself.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 88,
    "question": "A CMDB Data Manager needs to access the ServiceNow platform to create, publish, and manage policies that automate and govern CI lifecycle operations, ensuring the CMDB remains healthy and efficient. Where can the Data Manager do this?",
    "options": [
      "Service Operations Workspace",
      "CMDB Workspace Management tab",
      "CMDB Workspace CMDB 360 tab",
      "CI Class Manager"
    ],
    "correct": [
      "CMDB Workspace Management tab"
    ],
    "explanation": "The Data Manager creates, views, publishes, and manages policies (delete, archival, attestation, certification) from the Management tab under CMDB Workspace (Workspaces > CMDB Workspace > Data Manager > Policies). The CMDB 360 tab focuses on health dashboards and multisource views, not policy management; CI Class Manager handles class definitions/attributes, and policies there are managed separately in Data Manager.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 89,
    "question": "A Configuration Manager has configured multiple data sources which are all authorized to update the same class and the same set of attributes in the CMDB. What can the Configuration Manager do to control which data source should be authoritative source of truth for a specific class or set of class attributes?",
    "options": [
      "Assign a priority to each data source in the reconciliation rules",
      "Assign a run order to each data source in the identification rules",
      "Manually run the data source updates in the correct order",
      "Configure data refresh rules with a specific time period"
    ],
    "correct": [
      "Assign a priority to each data source in the reconciliation rules"
    ],
    "explanation": "When multiple data sources are authorized to update the same class and attributes, reconciliation rules control which source acts as the authoritative \"source of truth.\" Assigning priorities (lower number = higher priority) ensures the highest-priority source's values prevail during updates and prevents conflicts or \"flip flopping.\" Manual run ordering isn't reliable for ongoing operations, and identification rules handle CI matching/creation, not attribute update precedence.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 90,
    "question": "Configuration Management requires an accurate inventory of devices to be reflected in the CMDB. Which are common use cases for using Agent Client Collector (ACC)? (Choose 2 options)",
    "options": [
      "Devices in secure environments",
      "Devices that intermittently connect to the network",
      "Servers in the data center",
      "Network devices in the DMZ"
    ],
    "correct": [
      "Devices in secure environments",
      "Devices that intermittently connect to the network"
    ],
    "explanation": "ACC runs locally on the device without needing inbound firewall access or shared credentials, making it ideal for devices in secure/locked-down environments and for devices (like laptops) that aren't always online, pushing data outbound via MID Server. Servers in the data center are typically always-on and favor standard agentless Discovery, while network devices in the DMZ typically use SNMP/REST via proxy agents, not ACC installation.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 91,
    "question": "A CMDB Administrator is creating technical documentation for stakeholders, which includes a list of attributes, Identification and Reconciliation Engine (IRE) rules, and suggested relationships for several classes. Which central location does the CMDB Administrator use to collect this information?",
    "options": [
      "CMDB Data Manager",
      "CI Identifiers",
      "CI Class Manager",
      "CMDB Workspace"
    ],
    "correct": [
      "CI Class Manager"
    ],
    "explanation": "CI Class Manager is the central location in ServiceNow CMDB for consolidating class definitions, including attributes, IRE identification rules, and suggested relationships for various classes. It displays the full CMDB class hierarchy in a tree view and provides direct access to metadata, mandatory/recommended fields, and audit templates without switching modules.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 92,
    "question": "A CMDB Administrator needs insights into how their CMDB is configured to ServiceNow recommended practice. Which should be used?",
    "options": [
      "CMDB Health Dashboard",
      "CMDB Data Manager",
      "CMDB Workspace",
      "CMDB Data Foundation Dashboard"
    ],
    "correct": [
      "CMDB Data Foundation Dashboard"
    ],
    "explanation": "The CMDB Data Foundation Dashboard monitors CMDB configurations and risks with best-practice recommendations, evaluating data validity and configuration setup against ServiceNow's recommended practices for CMDB and CSDM foundations. The Health Dashboard tracks KPIs (completeness, compliance, correctness) via scheduled jobs but only partially reflects configuration best practices.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 93,
    "question": "A CMDB Administrator needs to track which CIs and CI classes are missing key data. Which CMDB Health Dashboard scorecard supports tracking this requirement?",
    "options": [
      "Completeness",
      "Compliance",
      "Correctness"
    ],
    "correct": [
      "Completeness"
    ],
    "explanation": "The Completeness scorecard specifically tracks the percentage of CIs lacking data in fields defined as mandatory (required) or recommended in CI class settings, aggregating metrics like Required and Recommended fields to identify incomplete records. Correctness focuses on data accuracy/duplicates/staleness, and Compliance evaluates CIs against audit templates and expected values from recent scans.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 94,
    "question": "A Service Owner is using Unified Map to understand the composition of a service but wants to filter out irrelevant information. Which options are available to the Service Owner from the filter panel? (Choose 2)",
    "options": [
      "Business criticality",
      "CI type",
      "Discovery source",
      "Managed by group"
    ],
    "correct": [
      "CI type",
      "Discovery source"
    ],
    "explanation": "The Unified Map filter panel supports filtering by CI type (limiting display to specific CI classes such as servers or applications) and Discovery source (showing only CIs from particular sources like ServiceNow Discovery or Integration Hub). Managed by group and Business criticality are not standard filter panel options in Unified Map, though they may appear in lists or reports elsewhere.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 95,
    "question": "A customer wants recently imported server records to be automatically reclassified into more specific CMDB classes after being discovered using ServiceNow Discovery. During the discovery process, if existing Server [cmdb_ci_server] records are reclassified into the Linux [cmdb_ci_linux_server] and Windows Server [cmdb_ci_win_server] classes, which reclassification operation occurred?",
    "options": [
      "Class Upgrade",
      "Class Switch",
      "Class Downgrade"
    ],
    "correct": [
      "Class Upgrade"
    ],
    "explanation": "In the ServiceNow Common Service Data Model (CSDM), classes are organized hierarchically. Moving a CI from a parent class (Server) to a more specific child class (Linux Server or Windows Server) — which adds specificity/attributes — is a Class Upgrade. Class Downgrade is the reverse (child to parent, losing attributes), and Class Switch moves a CI to an unrelated branch, combining a downgrade and an upgrade.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 96,
    "question": "DRAG DROP — ServiceNow provides a suite of CMDB management tools designed to effectively ingest, manage, and maintain CIs and relationships. Drag and drop the design architecture to its management tool. Some options may not apply.\n\n**Items to match:**\n1. Organization-built solution using transform maps\n2. Automated agent-based solution running patterns\n3. Automated agentless solution running patterns\n4. Third-party integrations from other vendors\n5. Pre-built store integration solutions that require minimal customization\n\n**Answer Area (tools):** Agent Client Collector / Import Sets / Service Graph Connector / ServiceNow Discovery",
    "options": [],
    "correct": [
      "Organization-built solution using transform maps → Import Sets",
      "Automated agent-based solution running patterns → Agent Client Collector",
      "Automated agentless solution running patterns → ServiceNow Discovery",
      "Pre-built store integration solutions that require minimal customization → Service Graph Connector"
    ],
    "explanation": "Import Sets fit an organization-built solution using transform maps. Agent Client Collector is the agent-based solution. ServiceNow Discovery is the agentless solution. Service Graph Connector fits pre-built store integrations requiring minimal customization. 'Third-party integrations from other vendors' is the unused distractor in this question.",
    "multi": true,
    "dragdrop": true,
    "distractors": [
      "Third-party integrations from other vendors"
    ]
  },
  {
    "id": 97,
    "question": "Where can a CMDB 360/Multisource CMDB Saved Query be viewed and created in the CMDB Workspace?",
    "options": [
      "CMDB Query Builder",
      "Coverage window on the CMDB 360 tab",
      "Saved queries window on the CMDB 360 tab",
      "Saved queries window on the Insights tab"
    ],
    "correct": [
      "Saved queries window on the CMDB 360 tab"
    ],
    "explanation": "In ServiceNow's CMDB Workspace, CMDB 360 (Multisource CMDB) includes a dedicated Saved Queries window on the CMDB 360 tab, which displays up to 20 of your saved queries where you can view, edit, run, or create new ones (\"Get Records\" query). This differs from the Coverage window (focuses on source coverage, not query management) and CMDB Query Builder (a separate general-purpose CMDB query tool).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 98,
    "question": "A CMDB Administrator has a number of similar de-duplication tasks that need to be remediated in bulk. How does the Administrator achieve this?",
    "options": [
      "A. Utilize the Duplicate CI Remediator Wizard",
      "D. Create de-duplication tasks manually and remediate each",
      "C. Configure and run a custom de-duplication background script",
      "B. Create and run a de-duplication template"
    ],
    "correct": [
      "B. Create and run a de-duplication template"
    ],
    "explanation": "In ServiceNow CMDB, administrators handle bulk de-duplication of similar tasks by creating pre-configured de-duplication templates in the CMDB Workspace. These templates apply consistent remediation rules — such as field collation, attribute merging, and duplicate actions — across multiple tasks at once, and are organized in libraries with scheduling support for ongoing maintenance. The Duplicate CI Remediator Wizard is meant for individual task remediation, not bulk processing, and manual creation/remediation is inefficient for numerous similar tasks.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 99,
    "question": "A CMDB Administrator has a report in ServiceNow that lists all CMDB Services that do not have an owner and wants to use a ServiceNow Playbook. What Governance play can prevent this from recurring?",
    "options": [
      "C. Make the field Owned by mandatory",
      "A. Make the field Managed by mandatory on all CIs",
      "B. Set a default value on the Service Owner field so that is never empty"
    ],
    "correct": [
      "C. Make the field Owned by mandatory"
    ],
    "explanation": "The correct governance process (part of Play 3, \"Govern Data,\" under the \"Services Have Owners Identified\" playbook) is to make the \"Owned by\" (owned_by) field mandatory on CMDB Services like cmdb_ci_service. This prevents new or updated Services from being saved without an owner, directly addressing recurrence of unowned Services. \"Managed by\" is a technical/operational contact, distinct from business ownership, and a default value on Service Owner risks assigning improper owners and undermines true accountability.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 100,
    "question": "A CMDB Administrator wants to educate the team on the various actions that can be performed within the CMDB Workspace. What actions can be initiated from the CMDB Workspace? (Choose 2)",
    "options": [
      "Remediate duplicate CI records",
      "Execute ServiceNow Discovery",
      "Create a new CMDB class",
      "Create a CMDB Data Manager certification policy"
    ],
    "correct": [
      "Remediate duplicate CI records",
      "Create a CMDB Data Manager certification policy"
    ],
    "explanation": "The CMDB Workspace is designed for managing CI data, health, and remediation tasks directly — including reviewing/remediating duplicate CIs via a wizard to merge or delete, and creating/managing Data Manager policies (certifying, retiring, deleting CIs). Triggering bulk discovery scans or defining new CI classes (done in CI Class Manager) are not primary actions initiated from the Workspace.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 101,
    "question": "A CMDB Administrator has imported data into the ServiceNow CMDB from a third-party source using a Service Graph Connector. The Administrator wants to review specific field to field mappings for the import. Which feature should be used for this information?",
    "options": [
      "CMDB Integrations Dashboard",
      "IntegrationHub ETL",
      "Integration Hub"
    ],
    "correct": [
      "IntegrationHub ETL"
    ],
    "explanation": "IntegrationHub ETL allows an administrator to review specific field-to-field mappings for imports from a Service Graph Connector into ServiceNow CMDB. It provides ETL transform maps where administrators can view, edit, and target field mappings, including conditional logic and transformations, on data loaded into CMDB staging tables. Integration Hub oversees broader integrations without granular field mapping views, and the CMDB Integrations Dashboard offers high-level import status/summaries, not specific field mappings.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 102,
    "question": "Where can an administrator perform Natural Language Queries (NLQ)?",
    "options": [
      "CMDB Data Manager",
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CI Class Manager"
    ],
    "correct": [
      "CMDB Workspace"
    ],
    "explanation": "NLQ is integrated into the CMDB Workspace's Home view, where users with roles like CMDB Admin, Editor, or User can leverage Intelligent Search for plain-language CI queries (e.g., \"virtual machines in Singapore\"). The other tools lack this capability — CMDB Health Dashboard focuses on health metrics/KPIs, CMDB Data Manager handles bulk CI operations like deletion, and CI Class Manager manages class definitions without NLQ support.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 103,
    "question": "The CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard Correctness Scorecard. Which field is used to calculate the duration of this metric?",
    "options": [
      "Most recent discovery (last_discovery)",
      "First discovered (first_discovered)",
      "Updated (sys_updated_on)",
      "Created (sys_created_on)",
      "Last modified on (last_modified)"
    ],
    "correct": [
      "Updated (sys_updated_on)"
    ],
    "explanation": "The Staleness metric within the CMDB Health Dashboard Correctness Scorecard calculates whether a CI has been updated within a configured time period, using the sys_updated_on field. This system field gets updated by any source (Discovery, Service Mapping, or manual entry) whenever any information on the CI record changes, so the Staleness metric checks whether the current date is past the configured threshold relative to sys_updated_on. First discovered and most recent discovery track discovery-specific timestamps, not general update recency, and \"last modified on\" is not a standard system field used for this specific calculation.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 104,
    "question": "A Windows administration team wants a grouping of CIs using CMDB groups. Which methods can be used? (Choose 2)",
    "options": [
      "Saved queries",
      "Scripted queries",
      "Tag-based queries",
      "Encoded queries"
    ],
    "correct": [
      "Saved queries",
      "Encoded queries"
    ],
    "explanation": "Encoded queries and Saved queries are the supported methods for populating CMDB Groups dynamically in ServiceNow. Encoded queries define query conditions within the CMDB Group Contains form to filter CIs dynamically, while Saved queries reference pre-built queries via the CMDB Group Contains form, adding their results as group members. Scripted and tag-based queries are not standard population methods for CMDB groups.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 105,
    "question": "The Configuration Management team wants to confirm that all servers in the CMDB actually exist in the data center. Which CMDB Data Manager policy type would the team create?",
    "options": [
      "Delete",
      "Retire",
      "Certification",
      "Attestation",
      "Archive"
    ],
    "correct": [
      "Attestation"
    ],
    "explanation": "To confirm that all servers in the CMDB actually exist in the data center, the Configuration Management team should create an Attestation policy in ServiceNow's CMDB Data Manager. Attestation specifically verifies the existence of IT infrastructure (like servers) by assigning tasks to check against real-world data sources, ensuring CMDB integrity amid continuous data ingestion. Retire marks CIs as retired but doesn't verify existence; Delete permanently removes CIs without verification; Certification confirms specific attribute values against recent scans rather than physical existence; and Archive moves inactive CIs to storage without ticking existence verification.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 106,
    "question": "Linker endpoint devices are imported into the CMDB and populate the 'Assigned to' [assigned_to] field on the Computer class [cmdb_ci_computer]. The Asset team asks the Configuration Analyst to populate the 'Assigned to' field for the related Asset. What action could a Configuration Analyst take to achieve this in an automated way?",
    "options": [
      "C. Configure a business rule on the computer table to use a script to populate the 'Assigned to' field on the Asset based on insert or update in the computer class",
      "B. Hide the 'Assigned to' field on the record and create a new field that dot walks to the related CI to get the 'Assigned to' value",
      "A. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
    ],
    "correct": [
      "A. Use the Asset-CI Field Mapping module to create a new rule to replicate the 'Assigned to' value between the asset and associated CI"
    ],
    "explanation": "A Configuration Analyst uses the Asset-CI Field Mapping module to automate populating the 'Assigned to' field on Assets from related CIs. This is the standard, automated approach in ServiceNow for bidirectional field synchronization between Assets (alm_asset) and CIs like cmdb_ci_computer. Option B (hiding and dot-walking) only displays CI data without storing it, failing to truly populate the Asset field, and Option C requires custom scripting via a Business Rule, which is unnecessary since declarative Asset-CI mapping exists for this purpose.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 107,
    "question": "A CMDB Manager wants to improve data quality using the CMDB Health Dashboard. What needs to happen to generate CMDB health scores?",
    "options": [
      "A. The scheduled jobs for the CMDB Health Dashboard must be activated",
      "C. Nothing, CMDB health scores are calculated by default",
      "B. The plugin, CMDB health calculation, needs to be installed"
    ],
    "correct": [
      "A. The scheduled jobs for the CMDB Health Dashboard must be activated"
    ],
    "explanation": "In ServiceNow, CMDB health scores for KPIs like completeness, compliance, correctness, and relationships are not calculated automatically. These scores require activating the relevant scheduled jobs, which are disabled by default in the base system. No specific \"CMDB health calculation\" plugin is required, and scores are not calculated by default — manual job activation is foundational.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 108,
    "question": "A CMDB Administrator is beginning the journey of populating the CMDB and needs to verify that any data which is no longer useful/applicable is removed. Which governance tool will accomplish this?",
    "options": [
      "De-duplication Templates",
      "CMDB and CSDM Data Foundations Dashboard",
      "CI Class Manager",
      "CMDB Data Manager",
      "CMDB Health Dashboard"
    ],
    "correct": [
      "CMDB Data Manager"
    ],
    "explanation": "CMDB Data Manager is the governance tool designed for bulk management of CI lifecycle operations, including deletion, archival, and retirement of data no longer useful or applicable. It uses policy-driven frameworks to identify and remove stale, orphan, or irrelevant records, such as unowned computers over a year old or undiscovered content. The CMDB and CSDM Data Foundations Dashboard focuses on metrics, playbooks, and overall data quality assessment, not removal operations, and the CMDB Health Dashboard monitors completeness, compliance, and correctness but lacks direct cleanup capabilities.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 109,
    "question": "A CMDB Administrator is managing group data from both the CI Class Manager and a Technical Service Offering for a specific class. CI Class Manager: Managed by Group = Enterprise IT Services. Technical Service Offering: Managed by Group = Windows Support, Change Group = Change Management Team. What would be the Managed By Group for CIs from this class based on the configured values?",
    "options": [
      "Windows Support",
      "Enterprise IT Services",
      "Change Management Team"
    ],
    "correct": [
      "Windows Support"
    ],
    "explanation": "When the same attribute is configured in both the CI Class Manager and a Technical Service Offering (TSO), the TSO takes precedence and overrides the CI Class Manager value. The TSO is designed to provide more specific, service-aligned configurations that take priority over the broader class-level defaults set in CI Class Manager, so the final Managed By Group value is Windows Support. The Change Group from the TSO is applied as-is since CI Class Manager has no competing value configured for that attribute — so no conflict resolution was needed there.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 110,
    "question": "What is the value of using the CMDB in security operations?",
    "options": [
      "Auto-resolves a vulnerability",
      "Identifies the IT infrastructure with a vulnerability",
      "Allows security team to assess and remediate an incident",
      "Enables audits and attestations across CIs"
    ],
    "correct": [
      "Identifies the IT infrastructure with a vulnerability"
    ],
    "explanation": "The CMDB is a central repository for storing information about an organization's IT assets (CIs) and the relationships between them. In security operations, its primary value is to provide context to security data by integrating vulnerability scanners with the CMDB so security teams can pinpoint exactly which devices, servers, or applications are affected by a specific vulnerability. The CMDB does not auto-resolve vulnerabilities (remediation is a separate process), and while it provides critical information that helps assess an incident, the security team and its tools perform the actual assessment/remediation.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 111,
    "question": "A CMDB Administrator group aims to establish a process for notifying task notifications when the Support Group or Managed By Group fields are not populated for operational Linux servers stored in the CMDB. Which ServiceNow modules can be leveraged to configure recommended fields and generate task records in cases where these fields are missing for Linux servers in the CMDB?",
    "options": [
      "CMDB Workspace and Scheduled Jobs",
      "Dynamic CI groups and CMDB groups",
      "Technical Service Offerings and Dynamic CI groups",
      "CI Class Manager and Health Preferences"
    ],
    "correct": [
      "CI Class Manager and Health Preferences"
    ],
    "explanation": "CI Class Manager lets you configure recommended (preferred) fields like Support Group and Managed By Group for the Linux server CI class (cmdb_ci_linux_server), marking them as mandatory or preferred. Health Preferences then monitors these classes for compliance issues — such as missing fields on operational CIs — and automatically generates certification or remediation tasks assigned to the CMDB Administrator group. Technical Service Offerings and dynamic CI groups relate to service mappings and CI collections but don't directly validate fields or generate tasks for missing data, and CMDB Workspace/Scheduled Jobs are for viewing tasks but lack built-in field validation and task-generation rules.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 112,
    "question": "The Configuration Management team finds value in the reports from CMDB 360/Multisource CMDB and wants to use it for all CI data. Which must be true in order for CMDB 360/Multisource CMDB to be able to report on and analyze that data?",
    "options": [
      "A. ServiceNow Discovery must be used to populate the CI data",
      "C. The CI data must be from an authorized Service Graph Connector",
      "B. The CI data must go through the IRE",
      "D. Reconciliation rules with priorities must be configured"
    ],
    "correct": [
      "B. The CI data must go through the IRE"
    ],
    "explanation": "CMDB 360 (Multisource CMDB) analyzes CI attribute updates from various discovery sources by retaining history of all proposed values and the reconciliation process. When multiple sources update the same CI attribute, the Identification and Reconciliation Engine (IRE) applies reconciliation rules to select the winning value, and CMDB 360 captures details from this process — including rejected values — for reporting and analysis. Without CI data passing through the IRE, CMDB 360 lacks the multisource history needed to track, compare, or report on updates. ServiceNow Discovery is one source, but any source (e.g., Service Graph Connectors) works as long as IRE processes the data, and reconciliation rules aid prioritization but aren't mandatory for basic CMDB 360 reporting on IRE activity.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 113,
    "question": "A health organization must track certain data (for example, regulated patient information) and its relation to Business Applications. Which action does CSDM recommend to meet this goal?",
    "options": [
      "B. Create fields on the Business Application record to mark it as containing patient information, and then ask the Business Application to mark the application as having patient information or not",
      "A. Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner",
      "C. Work with the Database administration team to classify the data on each database that holds patient information, and then use Relationships to map that back to the Business Application"
    ],
    "correct": [
      "A. Create an Information Object to represent the patient information, and then link it through a relationship to the Business Application after consulting with the Application owner"
    ],
    "explanation": "CSDM (Common Service Data Model) recommends option A, modeling business data like regulated patient information as Information Objects in the CMDB. These objects represent specific data types (e.g., \"Patient Record\") and are linked via relationships to Business Applications that process or store them. Information Objects provide a standardized, granular way to track data flows without altering application records or relying on DBAs, matching CSDM's Crawl/Walk/Run phases to accurate CMDB modeling. Option B uses custom fields, which CSDM avoids in favor of native model elements for consistency, and Option C focuses on infrastructure (databases), not the business layer where CSDM prioritizes app-layer links.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 114,
    "question": "Which is a purpose or requirement of CMDB Data Manager in ServiceNow?",
    "options": [
      "Automates the enforcement of relationship rules between CIs in the CMDB",
      "Encrypts archived records for enhanced security",
      "Automates the archival and deletion of records based on retention policies"
    ],
    "correct": [
      "Automates the archival and deletion of records based on retention policies"
    ],
    "explanation": "CMDB Data Manager automates the archival and deletion of records based on retention policies. This is a core purpose of ServiceNow's CMDB Data Manager, which serves as a policy-driven framework for bulk lifecycle operations on CIs, including deletion, archival, retiring, and attestation. Enforcement of relationship rules between CIs is handled by CSDM standards and tools like the Identification and Reconciliation Engine, not Data Manager, and encryption of archived records for security is not a stated feature — archive focuses on storage and retention in separate tables, without encryption.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 115,
    "question": "What ensures data volume in the CMDB is manageable?",
    "options": [
      "Scheduled Jobs",
      "Business Rules",
      "Archive Policies"
    ],
    "correct": [
      "Archive Policies"
    ],
    "explanation": "Archive Policies ensure data volume in the CMDB is manageable. In ServiceNow's CMDB Data Manager, Archive Policies define rules for moving inactive or retired CIs from active tables to archive tables, directly reducing the live data volume. These policies are executed via scheduled jobs (such as the hourly Archive job), automating the process to prevent CMDB bloat from stale data. While Scheduled Jobs trigger those actions and Business Rules handle other data operations, Archive Policies specifically target lifecycle management like archival or retirement for volume control.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 116,
    "question": "A CMDB Administrator is considering whether to start using the playbooks provided on the CMDB Data Foundation Dashboard. What are the benefits to support the decision to leverage this feature? (Choose 2)",
    "options": [
      "D. Offers remediation templates to improve poorly performing metrics",
      "C. Offers automated scripts to resolve poorly performing metrics",
      "A. Offers insight into the downstream impacts of poorly performing metrics",
      "B. Offers remediation options to address and improve poorly performing metrics"
    ],
    "correct": [
      "A. Offers insight into the downstream impacts of poorly performing metrics",
      "B. Offers remediation options to address and improve poorly performing metrics"
    ],
    "explanation": "The CMDB Data Foundation Dashboard is designed to provide visibility into the health of the CMDB by identifying where data might be missing or poorly structured. The playbooks within this dashboard assist administrators by providing context (how low-quality data affects downstream IT processes like Incident, Change, or overall service visibility) and actionable guidance (specific guidance or step-by-step instructions on how to fix the identified data issues). Option C is incorrect because the playbooks primarily provide guidance and manual or semi-automated remediation rather than a library of fully autonomous \"automated scripts,\" and Option D is incorrect because \"templates\" in this context usually refers to pre-filled forms or patterns rather than the functional workflows or instructions the dashboard actually provides.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 117,
    "question": "Which ServiceNow solutions create automatic relationships? (Choose 2)",
    "options": [
      "Discovery",
      "Workflow Studio",
      "Service Mapping",
      "IntegrationHub ETL"
    ],
    "correct": [
      "Discovery",
      "Service Mapping"
    ],
    "explanation": "Discovery and Service Mapping are the ServiceNow solutions that create automatic relationships. Both tools automatically identify Configuration Items (CIs) and map their dependencies in the CMDB through pattern-based discovery and top-down mapping processes. Discovery probes networks, servers, and applications to detect CIs and automatically generate relationships like \"Runs on::Runs\" or \"Hosted on::Hosts,\" while Service Mapping builds dynamic service maps by discovering entry points, tiers, and connections, creating horizontal and vertical relationships without manual input. IntegrationHub ETL focuses on data import and CI population via IRE but requires explicit relationship configuration in transform maps, and Workflow Studio handles orchestration, not CMDB relationships.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 118,
    "question": "A CMDB Administrator aims to utilize CSDM life cycle field mappings to better align with CSDM best practices. What is the next step to take after selecting the Enable Life Cycle Sync button?",
    "options": [
      "Fix the incorrect values in the Life Cycle Stage to match legacy values",
      "Resolve any incomplete field mappings identified in the Discrepancy Report",
      "Activate the CSDM Life Cycle field mappings"
    ],
    "correct": [
      "Resolve any incomplete field mappings identified in the Discrepancy Report"
    ],
    "explanation": "After selecting the Enable Life Cycle Sync button in ServiceNow's CSDM configuration, a Discrepancy Report appears highlighting incomplete or inactive field mappings in the Life Cycle Mapping table. The next step is to resolve these discrepancies by editing each record to populate missing fields, such as the Life Cycle Control field, and then activating them. This ensures alignment with CSDM best practices by completing mappings before final activation, avoiding data inconsistencies.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 119,
    "question": "The CMDB Configuration Manager is using the CI Class Manager to manage the group ownership of classes and needs to leverage the ownership value specified in the CI Class Manager. When configuring a CMDB Configuration Manager policy, which group reference field should be set?",
    "options": [
      "D. Managed By Group",
      "C. Support Group",
      "B. Approval Group",
      "A. Change Group"
    ],
    "correct": [
      "D. Managed By Group"
    ],
    "explanation": "When configuring a CMDB Data Manager policy in ServiceNow, set the group reference field to Managed By Group to leverage the ownership value from the CI Class Manager. CMDB Data Manager creates policy tasks assigned to the unique Managed By Group values of the target CIs. This group must approve tasks before the policy sub-flow executes, if approval is required. The CI Class Manager populates the Managed By Group attribute across entire CI classes during synchronization, streamlining ownership-based approvals — if empty, tasks route to administrators. This matches ServiceNow's CMDB ownership model, where Managed By Group governs data manager policies directly tied to CI Class Manager settings.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 120,
    "question": "A Configuration Management team has decided to start taking advantage of the CMDB 360/Multisource CMDB functionality. Which system property must be enabled?",
    "options": [
      "glide.identification_engine.multisource_enabled",
      "glide.identification_engine.multisource_non_cmdb_ci_enabled",
      "glide.identification_engine.multisource.query.max.limit",
      "glide.identification_engine.multisource_cmdb_ci_enabled"
    ],
    "correct": [
      "glide.identification_engine.multisource_enabled"
    ],
    "explanation": "This system property activates CMDB 360/Multisource CMDB functionality overall. Located on the CMDB 360 Properties page, it defaults to false and requires setting to true (yes) to activate the ITOM Discovery License plugin (com.snc.discovery.license). Related properties like glide.identification_engine.multisource_cmdb_ci_enabled (enables CMDB 360 data capture for CIs from cmdb_ci classes), glide.identification_engine.multisource_non_cmdb_ci_enabled (handles non-CMDB classes), and glide.identification_engine.multisource.query.max.limit (limits query results in CMDB 360 Report Builder) all depend on this primary property being enabled first, as it gates the entire feature.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 121,
    "question": "A CMDB Administrator, viewing the CMDB Data Foundations Dashboard, notices the Unique Locations Result percentage is low. What is the recommended process from the associated playbook to correct this issue?",
    "options": [
      "C. Review both locations, update CIs with the correct location and delete the duplicate location",
      "D. Retain the location that matches the organization's standard naming convention, and delete the duplicate without further validation",
      "B. Keep both locations as either can be used as a valid alternate location",
      "A. Use the Duplicate CI Remediator to merge the duplicate location records"
    ],
    "correct": [
      "C. Review both locations, update CIs with the correct location and delete the duplicate location"
    ],
    "explanation": "A low Unique Locations Result percentage on the CMDB Data Foundations Dashboard signals duplicate location records in the CMDB, which the associated playbook addresses through a structured remediation process. The playbook first instructs accessing the Duplicate Locations tile on the dashboard to identify duplicates, followed by a review phase to validate which location is accurate. It requires reassigning any Configuration Items (CIs) linked to the duplicate to the correct location before deleting the invalid one, ensuring data integrity and completeness. The Duplicate CI Remediator tool targets Configuration Item duplicates, not location records specifically; retaining duplicates undermines CMDB health metrics and operational reporting accuracy; and deleting without CI review or validation risks orphaning CIs and creating data gaps, contrary to best practices.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 122,
    "question": "What types of policies can be created within CMDB Data Manager? (Choose 2)",
    "options": [
      "De-duplication",
      "Retire",
      "Reconciliation",
      "Archive"
    ],
    "correct": [
      "Retire",
      "Archive"
    ],
    "explanation": "Based on ServiceNow documentation, CMDB Data Manager is a policy-driven framework designed to automate the lifecycle of Configuration Items (CIs). The types of policies that can be created within CMDB Data Manager are Retire, Archive, Delete, and Attestation. De-duplication is generally handled by the Identification and Reconciliation Engine (IRE) / Data Certification, and Reconciliation is a distinct feature of the IRE, not a Data Manager policy type.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 123,
    "question": "A Change Manager aims to streamline ITSM processes by automatically populating fields on the Change form when a CI is selected. The Configuration Management team ensures that the Change Group field is populated for all managed CIs. As a result, which base system field on the Change form will be automatically populated after selecting a CI?",
    "options": [
      "Assignment Group",
      "Managed by Group",
      "Change Group",
      "Approval Group"
    ],
    "correct": [
      "Assignment Group"
    ],
    "explanation": "When a CI is selected on the Change request form, ServiceNow uses a business rule called \"Populate Assignment Group based on CI/SO\" that populates the Assignment Group field based on the CI's configuration. The flow works as follows: the Change Group field on the CI record (in the cmdb_ci table) stores the group responsible for handling change implementations for that CI; when a user selects a CI on the Change form, the system references the CI's Change Group value; this value is then used to automatically populate the Assignment Group field on the Change request form. This automation streamlines the ITSM process by ensuring that change requests are automatically routed to the appropriate team responsible for managing changes to that specific CI, reducing manual effort and improving accuracy in change management workflows. The business rule is triggered when a Change request is created or updated, and it only populates the Assignment Group field if both the Assignment Group and Assigned to fields are currently empty, allowing for manual override if needed.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 124,
    "question": "A CMDB Administrator wants to improve data quality related to the CSDM. Which action should the Administrator take to meet this goal?",
    "options": [
      "Use the CSDM Data Foundations Dashboard",
      "Use the default configured CMDB Health Dashboard",
      "Start the ServiceNow Health Scan"
    ],
    "correct": [
      "Use the CSDM Data Foundations Dashboard"
    ],
    "explanation": "The CSDM Data Foundations Dashboard is specifically designed to monitor and improve data quality in the Common Service Data Model (CSDM), a key framework within ServiceNow's CMDB for modeling services and their relationships. It provides targeted metrics, playbooks, and visibility into foundational CSDM implementation phases — like relationships between Business Applications and Application Services — helping administrators identify issues and ensure proper configuration for optimal data integrity. Starting the ServiceNow Health Scan checks general platform-wide health, not CMDB/CSDM-specific, and the default configured CMDB Health Dashboard focuses on broader CMDB metrics (e.g., completeness, correctness) but is less CSDM-tailored.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 125,
    "question": "A CMDB Administrator knows that the CMDB Data Foundation Dashboard is a resource to monitor and improve data quality. What is a benefit of this dashboard?",
    "options": [
      "Provides key health-related metrics to make decisions",
      "Provides the ability to resolve certification policy tasks",
      "Provides the ability to configure health-related metrics"
    ],
    "correct": [
      "Provides key health-related metrics to make decisions"
    ],
    "explanation": "The CMDB Data Foundation Dashboard in ServiceNow displays key performance metrics on data quality, completeness, compliance, and correctness. These metrics enable administrators to monitor CMDB health, spot issues early, and drive data-driven decisions for improvements. The dashboard does not itself resolve certification policy tasks (managed separately via CMDB Policy sets or IRM modules) nor primarily configure health-related metrics (it displays pre-defined health metrics rather than offering broad configuration capabilities).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 126,
    "question": "A CMDB Administrator needs to ingest relevant data from Microsoft SCCM into the CMDB. Which ingestion method brings the fastest time to value?",
    "options": [
      "Agent Client Collector",
      "IntegrationHub ETL",
      "Service Graph Connectors",
      "Import Sets"
    ],
    "correct": [
      "Service Graph Connectors"
    ],
    "explanation": "Service Graph Connectors are pre-built integrations designed specifically for tools like SCCM, enabling quick setup with minimal configuration. They handle authentication, data mapping, and scheduling of pull from SCCM databases automatically. This contrasts with Agent Client Collector (agent-based discovery from endpoints, not direct SCCM ingestion), IntegrationHub ETL (offers drag-and-drop transformations but needs custom SQL queries and mappings for SCCM, adding setup time), and Import Sets (the traditional manual method using spreadsheets or exports, slowest due to custom transform maps and no automation).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 127,
    "question": "A CMDB Administrator wants to ensure that only relevant CIs from managed classes will be shown on Incident, Problem, and Change records. Which checkbox needs to be checked in the CI Class Manager for the CMDB Administrator to achieve the requested result?",
    "options": [
      "Independent",
      "Principal Class",
      "Extensible",
      "Main Record"
    ],
    "correct": [
      "Principal Class"
    ],
    "explanation": "To ensure only relevant Configuration Items (CIs) from managed classes appear on Incident, Problem, and Change records in ServiceNow's CMDB, the CMDB Administrator must check the \"Principal Class\" checkbox in the CI Class Manager. This applies an automatic filter to the cmdb_ci reference field on task tables like incident, problem, and change, restricting the lookup to CIs from principal classes only. This limits visibility to active CIs in designated classes (e.g., servers, printers) for incident operators, avoiding clutter from thousands of irrelevant CIs, and is controlled by the property com.snc.task.principal_class_filter, which specifies affected task types. Main Record is not a standard CMDB checkbox unrelated to ITSM visibility, Independent defines class autonomy in hierarchy and doesn't filter ITSM forms, and Extensible allows class extension/subclassing irrelevant to filtering.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 128,
    "question": "DRAG DROP — Drag and drop the application service type to the best description.\n\n**Items:** Dynamic CI Group / Service Mapping (Connection Suggestion) / Service Mapping (Top-down) / Tag-based\n\n**Descriptions:**\n1. Recommended for mission-critical application services that require a precise approach using patterns\n2. Best fit to map cloud-native, container-based, or virtual machine environments\n3. Ideal for custom-built applications and leverages application fingerprinting to generate service maps in a timely manner\n4. Ideal for small application services that can be easily grouped using filters and CMDB queries",
    "options": [],
    "correct": [
      "Service Mapping (Top-down) → Recommended for mission-critical application services that require a precise approach using patterns",
      "Tag-based → Best fit to map cloud-native, container-based, or virtual machine environments",
      "Service Mapping (Connection Suggestion) → Ideal for custom-built applications and leverages application fingerprinting to generate service maps in a timely manner",
      "Dynamic CI Group → Ideal for small application services that can be easily grouped using filters and CMDB queries"
    ],
    "explanation": "Top-down Service Mapping uses identification patterns to precisely trace application topology for mission-critical services. Tag-based application services rely on tagging conventions common in cloud-native, container, and VM environments. Connection Suggestion-based Service Mapping uses application fingerprinting for custom-built applications. Dynamic CI Groups use filters and CMDB queries for small services.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 129,
    "question": "A CMDB Administrator needs to set a CI Class as a Principal Class. Which CI Class Manager tab would need to be accessed?",
    "options": [
      "Class Info > Attributes",
      "Health > Attributes",
      "Class Info > Basic Info"
    ],
    "correct": [
      "Class Info > Basic Info"
    ],
    "explanation": "To set a CI Class as a Principal Class in ServiceNow's CI Class Manager, a CMDB Administrator must access the Class Info > Basic Info tab. This tab contains the \"Principal Class\" checkbox, which, when enabled and saved, limits CI reference fields (e.g., on Incident or Change forms) to only show CIs from principal classes. The process involves navigating to Configuration > CI Class Manager, opening the class hierarchy, selecting the target class, going to Class Info > Basic Info, checking the box, and saving. Other options like Class Info > Attributes are for managing class attributes, not principal settings, while Health > Attributes focuses on health metrics.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 130,
    "question": "A CMDB Administrator has built a number of Technology Management Service Offerings (Technical Service Offerings) based on Dynamic CI Groups to better maintain group alignment for the member CI. Which Groups are synced to CIs from the offering that has a relationship to a Dynamic CI Group? (Choose two.)",
    "options": [
      "Approval Group",
      "Support Group",
      "Owned by Group",
      "Managed by Group"
    ],
    "correct": [
      "Support Group",
      "Managed by Group"
    ],
    "explanation": "The two groups that are synced to CIs from a Technology Management Service Offering that has a relationship to a Dynamic CI Group are Managed by Group and Support Group. When a Dynamic CI Group is associated with a Technology Management Service Offering, the Managed by Group field on the CIs is synchronized from the offering, typically overriding values that might otherwise come from the CI Class Manager. The Support Group (and Change Group / Assignment related fields) on the CIs are also synchronized from the Dynamic CI Group via the offering, so that incident and change routing reflects the current group assignment in the service offering. Approval Group and Owned by Group are not part of the standard fields that are automatically synced from a Dynamic CI Group-based Technology Management Service Offering in this context.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 131,
    "question": "A customer's CMDB is aligned to the CSDM Walk stage. What benefit is provided by the CMDB?",
    "options": [
      "Improves the implementation velocity of APM Foundation for future business application rationalization",
      "Allows for additional stratification of technical teams' support structure along the lines of OLAs and commitments",
      "Enables impact assessments for incident, problem, and change on Business Services"
    ],
    "correct": [
      "Enables impact assessments for incident, problem, and change on Business Services"
    ],
    "explanation": "In the CSDM Walk stage, the CMDB focuses on modeling technical services and infrastructure CIs supported by technical teams, establishing views of supported CIs tied to support groups, OLAs, and commitments. While this alignment supports visibility into technical support structures, the core foundational benefit at this stage comes from relationships built across stages, allowing incident, problem, and change processes to assess effects on higher-level services. Technical support stratification (support groups, OLAs, commitments) is a Walk stage view feature, but the key benefit tested here is impact assessment: changes/incidents linked to Business Services for analysis, enabled post-Walk (Run/Fly).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 132,
    "question": "Which are business values of CMDB? (Choose 2)",
    "options": [
      "Strengthening operational resiliency",
      "Streamlining Incident and Change Management",
      "Collecting and managing financial data",
      "Automating maintenance for CI relationships"
    ],
    "correct": [
      "Strengthening operational resiliency",
      "Streamlining Incident and Change Management"
    ],
    "explanation": "A Configuration Management Database (CMDB) provides critical benefits in IT service management (ITSM), particularly in ServiceNow contexts relevant to CMDB work. It streamlines incident and change management by mapping CI relationships for faster root-cause analysis and risk assessment, and it strengthens operational resiliency through better visibility into dependencies, reducing outages and enabling proactive IT operations. Automating maintenance for CI relationships is a technical feature, not a primary business value in itself, and collecting/managing financial data belongs to IT Asset Management (ITAM), not core CMDB functions.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 133,
    "question": "DRAG DROP — A manufacturing organization has implemented Incident Management in ServiceNow and wants to integrate additional products to enhance its functionality. Drag each ServiceNow product to the value it brings in supporting Incident Management.\n\n**Items:** Discovery / Hardware Asset Management / Risk Management / Service Portfolio Management\n\n**Descriptions:**\n1. Delivers asset actions and events for the management and maintenance of assets during incidents.\n2. Supplies critical IT and financial risk data, enabling the team to understand the broader impact of incidents on business operations.\n3. Offers detailed operational-level data on hardware and applications to improve incident resolution.\n4. Provides life cycle information about services, helping to align incidents with the status and history of services.",
    "options": [],
    "correct": [
      "Hardware Asset Management → Delivers asset actions and events for the management of assets during incidents",
      "Risk Management → Supplies critical IT and financial risk data, enabling the team the broader impact of incidents on business operations",
      "Discovery → Offers detailed operational-level data on hardware and applications to improve incident resolution",
      "Service Portfolio Management → Provides life cycle information about services, helping to align incidents with the status of services"
    ],
    "explanation": "Hardware Asset Management delivers asset actions and events during incidents. Risk Management supplies critical IT and financial risk data for broader business impact. Discovery offers detailed operational-level hardware and application data for incident resolution. Service Portfolio Management provides life cycle information aligning incidents with service status.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 134,
    "question": "A multinational healthcare provider is preparing for a HIPAA compliance audit. The Chief Privacy Officer (CPO) needs an immediate report of every Business Application in the portfolio that processes or transmits \"Patient Diagnosis Records.\" The CMDB team has already mapped all Application Services to their underlying Servers and Database Instances. However, the CPO argues that knowing where the data lives physically (e.g., ORACLE DB) is insufficient; they need to track the specific content classification to determine which applications are in scope for the audit. To satisfy this requirement using the CSDM framework, you need to create a logical record representing \"Patient Diagnosis Records\" and associate it with the relevant Business Applications. Which specific CI class should be used to create this logical record?",
    "options": [
      "Information Object [cmdb_ci_information_object]",
      "DB Catalog [cmdb_ci_db_catalog]",
      "Business Capability [cmdb_ci_business_capability]",
      "Data Domain [cmdb_ci_data_domain]"
    ],
    "correct": [
      "Information Object [cmdb_ci_information_object]"
    ],
    "explanation": "Information Object [cmdb_ci_information_object] is the correct CI class. In the CSDM framework, Information Objects represent logical data or entities, such as \"Patient Diagnosis Records,\" which capture specific content classifications independent of physical storage like servers or databases. This allows associating the data record directly with relevant Business Applications (cmdb_ci_business_app), fulfilling the CPO's requirement based content classification beyond physical mappings in the CMDB. Unlike DB Catalog (physical database catalogs) or Data Domain (broader data categories), Information Object models granular data like patient records for compliance tracking, and it supports HIPAA audit trails by linking to Application Services rather than relying on infrastructure CIs. Business Capability is ruled out as it represents strategic functions, unrelated to specific data objects.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 135,
    "question": "Responsible for the technical configuration, access controls (ACLs), and setting up Discovery schedules.",
    "options": [
      "CMDB Process Owner",
      "CI Analyst",
      "Service Owner",
      "Configuration Manager",
      "CMDB Admin"
    ],
    "correct": [
      "CMDB Admin"
    ],
    "explanation": "The role responsible for the technical configuration, access controls (ACLs), and setting up Discovery schedules in ServiceNow is the CMDB Admin (or CMDB Administrator/Developer). Key responsibilities of a CMDB Admin include: Technical Configuration (managing CI classes, attributes, and relationships), Access Controls (ACLs) (defining who can create, read, update, or delete Configuration Items), Discovery Schedules (configuring and troubleshooting ServiceNow Discovery to populate the CMDB), and Health & Maintenance (configuring the CMDB Health Dashboard, managing data normalization, and automating workflows). While a Configuration Manager oversees the overall process (governance), the CMDB Admin/Developer is the technical practitioner responsible for the hands-on configuration of the tool.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 136,
    "question": "The Configuration Manager is preparing justification to utilize the CMDB Data Foundations Dashboard. Which benefits align with the usage of this dashboard? (Choose 2)",
    "options": [
      "C. It helps detect and eliminate duplicate records in the CMDB",
      "B. It provides actionable insights to improve data quality and completeness",
      "D. It enables monitoring and tracking of CMDB health over time",
      "A. It automates approval processes for Change Management"
    ],
    "correct": [
      "B. It provides actionable insights to improve data quality and completeness",
      "D. It enables monitoring and tracking of CMDB health over time"
    ],
    "explanation": "The CMDB Data Foundations Dashboard in ServiceNow provides key metrics on CMDB health, focusing on data quality, configurations, and best practices. Benefits aligning with its usage include: (B) It provides actionable insights to improve data quality and completeness — the dashboard evaluates data validity, completeness, freshness, and relationships, offering insights, prioritized metrics, and PA reports for drill-down, and remediation playbooks; and (D) It enables monitoring and tracking of CMDB health over time — it uses Performance Analytics for historical trends, scheduled jobs for ongoing metric collection, and tabs like Best Practices and Data Management to track compliance and health continuously. It does not automate Change Management approvals (focuses on health metrics, not workflows), and while it detects duplicates (e.g., via \"Unhandled Duplicate CIs\" metrics) it does not eliminate them; it provides visibility and links to playbooks, but not automated removal.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 137,
    "question": "Which CMDB feature allows you to define data precedence rules to ensure that a trusted data source (e.g., ServiceNow Discovery) is not overwritten by a lower-priority source (e.g., a manual spreadsheet import) for specific CI attributes?",
    "options": [
      "Data Manager Policy",
      "Duplicate CI Remediator",
      "Reconciliation Rule",
      "De-duplication Template",
      "De-duplication Task"
    ],
    "correct": [
      "Reconciliation Rule"
    ],
    "explanation": "The Reconciliation Rule in ServiceNow CMDB is the feature that allows defining data precedence rules to prioritize trusted sources like ServiceNow Discovery over lower-priority ones such as manual spreadsheet imports, for specific CI attributes. It authorizes designated data sources and includes data precedence rules to rank them (e.g., Discovery > Import), preventing lower-priority sources from overwriting higher-priority data by checking precedence during reconciliation. Data Manager Policy manages broader data certification and quality processes, not source-specific precedence. Duplicate CI Remediator resolves identified duplicate CIs post-detection, De-duplication Task schedules jobs to detect and handle duplicates, and De-duplication Template defines rules for bulk duplicate detection logic — none of these handle source precedence.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 138,
    "question": "The CMDB Configuration Management team has successfully developed a healthy and trusted CMDB. They have integrated discovered infrastructure data, accurately referenced non-discoverable data (such as change and support group information), and made the CMDB service-aware using Service Mapping. How will these improvements enhance the change management process? (Choose Two)",
    "options": [
      "Automatically schedules and deploys changes without human review or approval",
      "Enables auto-population of the assignment group field to dynamically route changes",
      "Provides insight into the potential impact of the change",
      "Ensures that no changes result in service downtime, regardless of planning or execution"
    ],
    "correct": [
      "Enables auto-population of the assignment group field to dynamically route changes",
      "Provides insight into the potential impact of the change"
    ],
    "explanation": "A healthy, service-aware CMDB with integrated discovery and Service Mapping improves change management by providing visibility into dependencies and accurate support data. A trusted CMDB maps relationships across CIs via Service Mapping, letting teams assess change impacts on services before approval — this reduces outage risks during planning. Accurate non-discoverable data (like support groups) allows automatic assignment group population on change requests, speeding routing to the right teams. It does not guarantee zero downtime regardless of execution — no CMDB ensures that — and it describes full automation, but CMDB supports human-reviewed processes, not bypassing them.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 139,
    "question": "The CMDB Health Dashboard provides three KPIs: Correctness, Completeness, and Compliance. The calculation for the Overall Score reflects which stringent requirement?",
    "options": [
      "D. The percentage of CIs that pass either the Correctness or the Compliance metrics",
      "C. Only CIs with a populated Discovery Source are included in the overall calculation",
      "B. The average percentage of CIs that pass all three metrics",
      "A. The percentage of CIs that successfully meet ALL metric criteria within the scorecards"
    ],
    "correct": [
      "A. The percentage of CIs that successfully meet ALL metric criteria within the scorecards"
    ],
    "explanation": "The CMDB Health Dashboard's Overall Score uses a stringent calculation based on weighted averages of the three KPIs (Correctness, Completeness, Compliance), where each CI must pass all relevant metric criteria within the scorecards to contribute positively — failure in any one drags down the overall score. This \"all or nothing\" per-metric approach ensures only fully healthy CIs boost the score, unlike averages across CIs (Option B) or partial passing. Option B is incorrect since it's weighted KPI averages, not CI averages; Option C applies no such filter, as all CIs are evaluated; and Option D is too lenient, since it requires all KPIs, not \"either/or.\"",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 140,
    "question": "Cloud Dimensions is reviewing the metrics provided by the CMDB Correctness Scorecard. The Duplicate metric for the Server class displays 1200/5000. In reviewing the Orphan metric, it displays 900/4200. Which of the following might be configured to display the difference in the scope of Server CIs (5000 vs 4200) used in both metrics?",
    "options": [
      "Option A: The Orphan metric has a CMDB Group configured for the Server class",
      "Option D: The Duplicate metric has a CMDB Group configured for the Server class",
      "Option B: The Orphan metric has a Health Inclusion rule configured for the Server class",
      "Option C: The Duplicate metric has a Health Inclusion rule configured for the Server class"
    ],
    "correct": [
      "Option B: The Orphan metric has a Health Inclusion rule configured for the Server class"
    ],
    "explanation": "The Duplicate metric shows 1200/5000 (5000 Server CIs evaluated) while the Orphan metric shows 900/4200 (4200 Server CIs evaluated), so the scope differs between the two metrics. In ServiceNow's CMDB Health Dashboard, the Health Inclusion Rule is what controls which CIs are included in a given metric's calculation (for example, excluding retired or decommissioned servers from Orphan checks but not Duplicate checks). A CMDB Group, on the other hand, is used to partition and group CIs by organization, business unit, or environment, but it does not change the underlying metric scope in the way Health Inclusion Rules do. Given that the Orphan metric is evaluating fewer Server CIs (4200 vs 5000), the most likely configuration is that the Orphan metric has a Health Inclusion Rule configured for the Server class, which would exclude some subset of Server CIs (for example, retired or certain exempted tagged servers) from the Orphan calculation, while the Duplicate metric still evaluates all 5000.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 141,
    "question": "Cloud Dimensions wants to use Dynamic Reconciliation Rules and the CMDB 360 View to retain historical attribute values from multiple discovery sources. What two prerequisites must the CMDB Administrator fulfill to enable this functionality? (Choose 2)",
    "options": [
      "D. Set the system property glide.identification_engine.multisource_enabled to true (referenced as required Multisource system property)",
      "B. Install the ITOM Discovery License plugin",
      "A. Run the CMDB Get Well Metric Collection job",
      "C. Configure reconciliation rules for all CI classes"
    ],
    "correct": [
      "D. Set the system property glide.identification_engine.multisource_enabled to true (referenced as required Multisource system property)",
      "B. Install the ITOM Discovery License plugin"
    ],
    "explanation": "The two prerequisites for enabling Dynamic Reconciliation Rules and CMDB 360 to retain historical attribute values from multiple discovery sources are: Install the ITOM Discovery License plugin (com.snc.itom.discovery.license), which must be activated to enable CMDB 360/Multisource CMDB functionality, and set the system property glide.identification_engine.multisource_enabled to true, which enables CMDB 360 processing and stores historical data from discovery sources for dynamic rules. Option A refers to a health metric job unrelated to enabling multisource data retention, and Option C involves static rules, not required for dynamic rules or CMDB 360, which leverage multisource data without any class-specific configuration.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 142,
    "question": "What are two terms commonly used interchangeably with ServiceNow Discovery (Horizontal Discovery)?",
    "options": [
      "Top-down discovery",
      "ML powered mapping",
      "IP-based discovery",
      "Tag-based discovery",
      "Agentless discovery"
    ],
    "correct": [
      "IP-based discovery",
      "Agentless discovery"
    ],
    "explanation": "ServiceNow Horizontal Discovery refers to scanning networks to identify infrastructure CIs like servers and devices, often using IP ranges without focusing on business services. Two terms commonly used interchangeably with it are: IP-based discovery — Horizontal Discovery typically targets IP address ranges to probe devices across the network, making it a direct synonym in ServiceNow contexts, and Agentless discovery — it operates without requiring software agents on target devices, relying instead on protocols like SSH, WMI, or SNMP for remote, credential-based exploration. Top-down discovery contrasts with Horizontal Discovery, as it's a Service Mapping technique starting from business services or entry points to map dependencies downward. ML powered mapping refers to AI-driven features in Service Mapping, not core Discovery, and Tag-based discovery applies to cloud tagging in Service Mapping, unrelated to Horizontal methods.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 143,
    "question": "DRAG DROP — A CMDB Administrator seeks to understand the available tools for preventing, addressing, and remediating duplicate CIs. Drag and drop each feature with the corresponding outcome. Some options may not apply.\n\n**Items:** Certification Tasks / CMDB Health Dashboard Correctness Scorecard / De-duplication Tasks / De-duplication Templates / Duplicate CI Remediator\n\n**Descriptions:**\n1. Can be assigned to groups for resolving duplicate CIs\n2. Offers insight into duplicate CIs within the CMDB\n3. Offers a solution to resolve de-duplication tasks in bulk\n4. Provides a wizard to resolve de-duplication tasks individually",
    "options": [],
    "correct": [
      "De-duplication Tasks → Can be assigned to groups for resolving duplicate CIs",
      "CMDB Health Dashboard Correctness Scorecard → Offers insight into duplicate CIs within the CMDB",
      "De-duplication Templates → Offers a solution to resolve de-duplication tasks in bulk",
      "Duplicate CI Remediator → Provides a wizard to resolve de-duplication tasks individually"
    ],
    "explanation": "De-duplication Tasks can be assigned to groups for resolving duplicates. CMDB Health Dashboard Correctness Scorecard offers insight into duplicate CIs. De-duplication Templates resolve tasks in bulk. Duplicate CI Remediator provides a wizard for individual resolution. Certification Tasks is the unused distractor.",
    "multi": true,
    "dragdrop": true,
    "distractors": [
      "Certification Tasks"
    ]
  },
  {
    "id": 144,
    "question": "Which feature of the CMDB Workspace provides a visual, graphical representation of CIs and their relationships, offering contextual information on associated Incidents, Changes, and Problems?",
    "options": [
      "Unified Map",
      "CMDB 360 View",
      "Intelligent Search",
      "CMDB Query Builder"
    ],
    "correct": [
      "Unified Map"
    ],
    "explanation": "Unified Map is the feature in the CMDB Workspace that provides a visual, graphical representation of Configuration Items (CIs) and their relationships. It displays CIs as nodes and connections as lines, helping assess impacts from changes, while integrating contextual details on associated Incidents, Changes, and Problems through ServiceNow modules like Change, Incident, and Event Management. CMDB Query Builder builds custom queries for data retrieval/filtering, Intelligent Search enables text-based AI-driven searches across CMDB records, and CMDB 360 View aggregates discovery source data and health analytics for CIs — none of these provide the graphical relationship map itself.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 145,
    "question": "A CMDB Analyst needs to continuously identify data gaps in the CMDB by finding all Business Applications that are not correctly related to any Application Service (i.e., they are not deployed). The analyst needs the result to be automatically generated and saved weekly for review by the CMDB governance board. Which CMDB Workspace feature is best suited for building and automating this complex, relationship-based analysis?",
    "options": [
      "B. CI Class Manager Reconciliation Rules",
      "C. Data Manager policies",
      "A. CMDB Query Builder scheduled reports",
      "D. Duplicate CI Remediator wizard"
    ],
    "correct": [
      "A. CMDB Query Builder scheduled reports"
    ],
    "explanation": "CI Class Manager Reconciliation Rules handle data source prioritization, not queries; CMDB Data Manager policies manage lifecycle (retire/archive/delete), not gap analysis; Duplicate CI Remediator addresses duplicates. The CI Class Manager Reconciliation Rules (B) handle data source prioritization, not queries; CMDB Data Manager policies (C) manage lifecycle operations, not gap analysis; Duplicate CI Remediator wizard (D) addresses duplicates. CMDB Query Builder in ServiceNow's CMDB Workspace allows building complex, relationship-based queries to identify data gaps, such as Business Applications without relationships to an Application Service (e.g., \"not deployed\" or \"not related\" via cmdb_rel_ci). Users can drag CI classes into the Business Application and Application Service without a canvas, define relationship properties (type, direction, quantity), and set criteria for unrelated CIs. Saved queries support scheduling for weekly automated runs, generating result sets that can be emailed or saved for review by the governance board.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 146,
    "question": "Which table stores the granular, detailed states of a Configuration Item (such as In Use, In Maintenance, Pending Disposal, or Sold) that provide specific context within a broader lifecycle phase?",
    "options": [
      "D. lifecycle_status",
      "B. life_cycle_mapping",
      "A. life_cycle_stage_status",
      "C. life_cycle_stage"
    ],
    "correct": [
      "A. life_cycle_stage_status"
    ],
    "explanation": "life_cycle_stage_status stores the granular, detailed states of a Configuration Item (CI), such as In Use, In Maintenance, Pending Disposal, or Sold, providing specific context within a broader lifecycle phase. This table holds the sub-states or detailed operational states tied to a higher-level lifecycle stage. For example, ServiceNow documentation and community discussions confirm it references specific CI conditions like those listed, distinguishing it from broader phase definitions. life_cycle_mapping maps stages to statuses, defines relationships; life_cycle_stage stores broader phases (e.g., Operational, End of Life); lifecycle_status is a general or legacy virtual status, not granular details. In ServiceNow CMDB (common for CI management), life_cycle_stage_status provides the precise, contextual details matching the query's examples, as seen in setup instructions and CSDM lifecycle mappings.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 147,
    "question": "Cloud Dimensions recently integrated a new monitoring tool (SolarWinds) and wants it to supply the Memory (RAM) value for all virtual servers. However, this value must be prevented from being updated by the standard vCenter Discovery source, even though vCenter runs later. The administrator needs to configure this specific data source prioritization for a single attribute within the Virtual Server CI class. Which feature handles this data source control?",
    "options": [
      "A. Duplicate CI Remediator wizard",
      "C. CMDB Data Manager policies",
      "D. CI Class Manager Reconciliation Rules",
      "B. CMDB Query Builder scheduled reports"
    ],
    "correct": [
      "D. CI Class Manager Reconciliation Rules"
    ],
    "explanation": "ServiceNow's CI Class Manager Reconciliation Rules enable administrators to configure data source prioritization for specific attributes within a CI class, such as the Memory (RAM) attribute on Virtual Server CIs. These rules are accessed via the CI Class Manager by selecting the target class (e.g., Virtual Server), navigating to Reconciliation Rules, and creating a rule that assigns priorities to discovery sources like SolarWinds (higher priority) or vCenter (lower priority) for the RAM attribute. This setup ensures lower-priority sources like SolarWinds from overwriting higher-priority data, even if they run later, ensuring SolarWinds RAM values persist. Duplicate CI Remediator handles duplicate remediation, CMDB Query Builder is used for reporting, and CMDB Data Manager policies manage broader CI lifecycle operations like identification or certification — none of these fit this scenario.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 148,
    "question": "Your CMDB has many server CIs that have not been updated for more than 18 months. The infrastructure team confirms that most of these servers were physically removed from the data center, but they still want some time to refer to configuration history for audits before the records are fully removed. As the CMDB admin using CMDB Data Manager, which combination of policies best fits this requirement?",
    "options": [
      "B. A Retire policy followed by a Delete policy that runs on archived records",
      "A. Only an Archive policy that moves the CIs to an archive table as soon as they are stale",
      "C. A Retire policy followed by an Archive policy for the stale servers",
      "D. Only a Delete policy that removes the CI as soon as it becomes stale",
      "E. A Data Certification policy that asks owners to confirm each server every 30 days"
    ],
    "correct": [
      "C. A Retire policy followed by an Archive policy for the stale servers"
    ],
    "explanation": "CMDB Data Manager in ServiceNow uses lifecycle policies — Retire, Archive, and Delete — to manage stale or decommissioned CIs systematically. A Retire policy first targets qualifying CIs (e.g., those not updated in over 18 months) based on staleness criteria (last discovered/updated timestamps), marking them as \"Retired\" or \"End of Life\" based on staleness, keeping them in the CMDB for reference without counting as operational. An Archive policy then targets these retired CIs, moving them to archive tables, so configuration history remains accessible for audits. This sequence allows the infrastructure team time to review records before any potential future deletion, unlike immediate archiving (Option A) or deletion (Option D). Retiring too soon without a subsequent archive (Option A) doesn't fully remove CIs from ongoing active CMDB access; deleting on retirement (Option B) removes records from CMDB, against audit needs; deleting immediately (Option D) loses history; and Certification (Option E) prompts owners every 30 days but doesn't automate retirement or archiving for decommissioned servers.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 149,
    "question": "Which of the following is the key distinction between a Hosting Rule and a Containment Rule when defining Dependent Relationships in CI Class Manager?",
    "options": [
      "C. Containment rules enforce data integrity, while hosting rules prevent duplicates",
      "A. Containment rules apply to applications, while hosting rules apply to hardware",
      "D. Hosting rules only apply to relationships discovered by Service Mapping",
      "B. Hosting rules are one level deep and always involve resources that are either physical or virtual hardware"
    ],
    "correct": [
      "B. Hosting rules are one level deep and always involve resources that are either physical or virtual hardware"
    ],
    "explanation": "Hosting rules and containment rules define dependent relationships for Configuration Items (CIs) in ServiceNow's CI Class Manager, but they differ fundamentally in structure. Hosting rules are flat and limited to one level deep, always involving physical or virtual hardware resources as the hosting parent for hosted children (e.g., an application \"runs on/runs\" a server). Containment rules, by contrast, form hierarchical chains for logical groupings (e.g., a Tomcat server containing WAR files), allowing multi-level nesting without hardware restrictions. Both rule types apply across CI categories like applications and hardware; the split isn't about that. Neither primarily handles data integrity or duplicates — those relate to identification/reconciliation rules. Hosting rules apply broadly in CMDB dependency modeling, not just Service Mapping discovery.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 150,
    "question": "The CMDB and CSDM Data Foundations Dashboards are acquired from the ServiceNow Store. Which statement highlights the key difference in configurability between the Data Foundations Dashboards and the CMDB Health Dashboard?",
    "options": [
      "A. The Data Foundations Dashboards are part of the base instance, while CMDB Health requires a store application",
      "C. The Data Foundations Dashboards are suitable for internal audiences only",
      "D. The Data Foundations Dashboards calculate Correctness, Completeness, and Compliance scores, while CMDB Health only shows Audit results",
      "B. The Data Foundations Dashboards come with fixed, non-customizable metrics, whereas the CMDB Health Dashboard allows for flexible metric customization and filtering"
    ],
    "correct": [
      "B. The Data Foundations Dashboards come with fixed, non-customizable metrics, whereas the CMDB Health Dashboard allows for flexible metric customization and filtering"
    ],
    "explanation": "The CMDB Health Dashboard, a base ServiceNow feature, offers extensive configurability through scheduled jobs for metrics like completeness, compliance, and correctness scores, plus customizable inclusion rules and filtering for tailored health analysis. In contrast, the Data Foundations Dashboards (both CMDB and CSDM variants), acquired from the ServiceNow Store, are pre-built activated apps that provide fundamental metrics with limited on-instance customization — mainly toggling metric activity but lacking the flexible metric scripting and filtering of CMDB Health. This makes CMDB Health more adaptable for enterprise needs like SAP/Salesforce integrations, where custom health KPIs are more common.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 151,
    "question": "Which of the following describes the key benefit of leveraging Dynamic Reconciliation Rules over Static Reconciliation Rules?",
    "options": [
      "D. Dynamic rules only apply to non-discoverable attributes like Support Group",
      "A. Dynamic rules leverage raw data stored in the Multisource CMDB to determine the best value based on criteria like Largest Value or Most Reported",
      "C. Dynamic rules rely solely on the data source priority (e.g., ServiceNow Priority 100)",
      "B. Dynamic rules can be configured using the IRE API via an onBefore script"
    ],
    "correct": [
      "A. Dynamic rules leverage raw data stored in the Multisource CMDB to determine the best value based on criteria like Largest Value or Most Reported"
    ],
    "explanation": "Dynamic Reconciliation Rules use processed data from the Multisource CMDB (via CMDB 360) to pick the optimal attribute value based on criteria like the largest value or most reported across sources. Static Rules, by contrast, follow fixed discovery source priorities like ServiceNow Priority 100. Dynamic rules are configured via the CMDB Class Manager UI or tables like cmdb_dynamic_reconciliation_definition, not primarily through the IRE API via onBefore scripts. Option C describes static rules, not dynamic ones, which avoid source priority altogether. Option D wrongly restricts dynamic rules to only non-discoverable attributes, but they apply broadly to attributes in Multisource CMDB setups, not just non-discoverable Support Group-type fields.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 152,
    "question": "You are a CMDB Architect designing a new integration to bring hardware assets into the CMDB from a third-party source. You need a solution that processes data through the Identification and Reconciliation Engine (IRE) to respect CI Identification Rules. Which data ingestion method inherently leverages the IRE for this purpose?",
    "options": [
      "Table API (REST or SOAP)",
      "Import Sets with transform maps",
      "IntegrationHub ETL"
    ],
    "correct": [
      "IntegrationHub ETL"
    ],
    "explanation": "IntegrationHub ETL is the data ingestion method that inherently leverages the Identification and Reconciliation Engine (IRE) for processing hardware assets into the CMDB while respecting CI Identification and Reconciliation Rules. It uses the Robust Transform Engine (RTE) to process data from staging tables into IRE payloads, ensuring automatic identification, reconciliation, and deduplication before CMDB insertion. This differs from other methods, as it explicitly incorporates IRE to maintain data integrity across third-party sources: Table API (REST or SOAP) does direct inserts/updates that bypass IRE unless explicitly invoked via the CMDB payload, and Import Sets with Transform Maps lacks built-in IRE processing, requiring manual IRE configuration. For a CMDB architecture, IntegrationHub ETL provides guided setup, testing, and rollback capabilities tailored for third-party hardware integrations.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 153,
    "question": "In a company there is a need to understand the CSDM maturity level needed. Different stakeholders listed a number of use cases that they expect over time. Which use case requires Information Objects?",
    "options": [
      "The Business Service Management team wants to understand the operational impact for their consumer parties",
      "The Customer Service team wants to onboard pro-active case management",
      "The Event Operations team wants to automate their events into incident for operational actions",
      "The SecOps team wants to understand the operational risk in the Business Application context",
      "The Asset Management team wants to understand asset life cycle compliance in a Business Application context"
    ],
    "correct": [
      "The SecOps team wants to understand the operational risk in the Business Application context"
    ],
    "explanation": "The SecOps team use case requires Information Objects in the CSDM model. Information Objects (cmdb_ci_information_object) represent data types (e.g., PII, credit card data) used or produced by Business Applications, modeled in the Fly stage or Design domain. Event Operations' \"automate events into incidents\" relies on Event Management and Application Service tying, not Information Objects. Business Service Management's operational impact for consumer parties uses Business Services and impact mapping, not Information Objects. Customer Service's onboarding pro-active case management leverages CSM entities like cases and service health. Asset Management's asset lifecycle compliance focuses on CI lifecycle and hardware relations, not data-type objects. The SecOps use case indicates Fly-stage maturity, involving Business Applications and Information Objects for advanced portfolio/risk management, while other cases align with earlier stages (e.g., Run stage for business services).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 154,
    "question": "What is the difference between Data Certification and Attestation policies when managing a CI?",
    "options": [
      "Attestation requires correcting specific attributes of a CI, while Data Certification tracks acknowledgement the CI still exists",
      "Attestation can be scheduled, while Data Certification cannot be scheduled",
      "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI",
      "Attestation can be assigned to a group or an individual, while Data Certification can only be assigned to an individual"
    ],
    "correct": [
      "Attestation tracks acknowledgement the CI still exists, while Data Certification requires validating specific attributes of a CI"
    ],
    "explanation": "Attestation verifies that a Configuration Item (CI) in the CMDB still exists and is actively managed in the real world. Data Certification focuses on validating and correcting the accuracy of specific attributes within the CI record, such as non-discoverable data like owners or location. Use Attestation for confirming CI existence, failing it marks the CI for retirement or deletion. Data Certification ensures data quality across CI-related fields, typically requiring updates to incorrect fields or IRE rules for completion. Both can be scheduled via policies in CMDB Data Manager and assigned to groups or individuals using common task tables. Attestation acts like a simple survey open to broader users, while Data Certification involves data edits — a tighter way to phrase the original note would be: Attestation verifies CI existence and ongoing relevance, while Data Certification validates the correctness of specific attributes.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 155,
    "question": "When configuring a Dynamic Reconciliation Rule to resolve attribute conflicts from Multisource CMDB data, which of the following are valid validation types (statuses) you can select? (Choose two.)",
    "options": [
      "Owner approved",
      "Most reported",
      "Last updated",
      "Last created",
      "Smallest value",
      "Highest priority"
    ],
    "correct": [
      "Most reported",
      "Smallest value"
    ],
    "explanation": "Dynamic Reconciliation Rules, introduced in the San Diego release and enabled with Multisource, resolve attribute conflicts by selecting from predefined value types across sources. These rules override static ones when both apply. Most reported chooses the value reported by the highest number of sources, and Smallest value selects the lowest numeric or lexical value among sources. Other options like Last updated, Highest priority, Last created, and Owner approved do not match the documented types (which also include First Reported, Last Reported, and Largest Value).",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 156,
    "question": "From the Get Well Playbook \"Percentage of Dynamic CI Groups with CMDB Group\", which is a potential benefit to the business if this metric is properly governed?",
    "options": [
      "D. Decreases efficiency in impact analysis",
      "A. Complicates the auto-population of affected CIs during changes",
      "B. Reduces IT asset management tracking capabilities",
      "C. Improves successful changes, such as patch management for all servers"
    ],
    "correct": [
      "C. Improves successful changes, such as patch management for all servers"
    ],
    "explanation": "The \"Percentage of Dynamic CI Groups with CMDB Group\" metric from ServiceNow's Get Well Playbook measures how many dynamic CI (Configuration Item) groups properly link to CMDB Groups. Proper governance ensures accurate relationship tracking, enabling reliable automation in IT service management (ITSM). High percentages allow effective use of dynamic CI groups for change impact analysis and auto-populating affected CIs. This supports smoother patch management and other changes across the right infrastructure. Option A mis-states a benefit as a complication — governance simplifies auto-population. Option B ignores how linked groups enhance asset tracking. Option D reverses the efficiency gain from accurate analysis.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 157,
    "question": "An administrator is attempting to import User (sys_user) data into the CMDB using a new IntegrationHub ETL integration to ensure all user records adhere to CMDB quality standards. The integration fails, since through the target table sys_user is listed as supported, the log indicates that the IRE is not properly engaging the User table for identification. What are the two prerequisite steps the administrator must verify or complete to enable IRE support for the User table? (Choose 2)",
    "options": [
      "B. The User table name (sys_user) must be added to the system property glide.identification_engine.non_cmdb_tables",
      "D. The User table must be extended from the cmdb_ci table",
      "C. An Identification Rule (CI Identifier) must be created specifically for the User table",
      "A. The administrator must set the glide.required.attribute.enabled property to true"
    ],
    "correct": [
      "B. The User table name (sys_user) must be added to the system property glide.identification_engine.non_cmdb_tables",
      "C. An Identification Rule (CI Identifier) must be created specifically for the User table"
    ],
    "explanation": "IRE for non-CMDB tables like sys_user is a supported but non-CMDB table for IRE and ETL processing, since it doesn't engage automatically. First, add \"sys_user\" to the glide.identification_engine.non_cmdb_tables system property. This enables IRE support for the table. Second, create a dedicated Identification Rule (CI Identifier) for the sys_user table with appropriate identifier entries to handle reconciliation and prevent duplicates. Option A (glide.required.attribute.enabled) relates to required field validation, not IRE activation for non-CMDB tables. Option D is incorrect since sys_user cannot be extended from cmdb_ci — it's a base platform table unrelated to the CMDB hierarchy. These steps ensure IRE property identifies and processes User records during ETL import, resolving the log issue.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 158,
    "question": "From which of the following can the Managed by group be configured and synchronized to the underlying group or class of Configuration Items (CIs)? (Choose 2)",
    "options": [
      "Technology Management Offerings",
      "Technology Management Services",
      "Business Services",
      "Business Service Offerings",
      "CI Class Manager"
    ],
    "correct": [
      "Technology Management Offerings",
      "CI Class Manager"
    ],
    "explanation": "CI Class Manager: This tool sets the Managed by Group attribute for an entire CI class in one operation. All CIs in the class inherit this group unless overridden by a technology management offering, with synchronization handled via CSDM Data Sync jobs. Technology Management Offerings: These offerings link to dynamic CI groups, where you directly set the Managed by group (along with Support and Change groups). The values propagate to associated CIs, taking precedence over CI Class Manager values. Technology Management Services, Business Services, and Business Service Offerings do not support direct Managed by group synchronization to underlying CIs; they focus on higher-level service modeling in CSDM.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 159,
    "question": "A CMDB Administrator wants to remove all Linux Servers in the organization that have not been updated in six months. Which recommended action should the Administrator take in Data Foundations?",
    "options": [
      "Create a scheduled job",
      "Create a business rule",
      "Create an archive policy"
    ],
    "correct": [
      "Create an archive policy"
    ],
    "explanation": "In ServiceNow CMDB Data Foundations (formerly Data Manager), the recommended action for a CMDB Administrator to remove Linux Servers not updated in six months is to create an archive policy. This policy uses filter criteria like class (Linux Server) and last updated date to identify stale CIs, then archives or deletes the records in a controlled, auditable way. Archive policies in Data Foundations handle CI lifecycle management efficiently, replacing older methods like manual jobs or business rules. They support actions such as archiving to read-only storage or permanent deletion based on conditions like no updates for 180 days. Creating a business rule is reactive and lacks built-in auditing/scheduling for bulk CI cleanup, and creating a scheduled job is less governed by policies than native CI lifecycle integration. This approach ensures CMDB health is systematically removing obsolete records while maintaining governance.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 160,
    "question": "Aligning to the Common Service Data Model (CSDM) allows for auto-population of the assignment group field on new incident and change request records. Which of the following are true when creating a new Incident or Change Request in ServiceNow? (Choose 2)",
    "options": [
      "C. Support group on the selected CI auto-populates the assignment group field on the incident form",
      "B. Change group on the selected CI auto-populates the assignment group field on the change request form",
      "A. Managed by group on the selected CI auto-populates the assignment group field on the incident form",
      "D. Approval group on the selected CI auto-populates the assignment group field on the change request form"
    ],
    "correct": [
      "C. Support group on the selected CI auto-populates the assignment group field on the incident form",
      "B. Change group on the selected CI auto-populates the assignment group field on the change request form"
    ],
    "explanation": "Options B and C are correct. The CSDM and ServiceNow OOTB logic use CI-related \"Change group\" to populate the assignment group on Change Requests when a CI is selected, so the Change Group on the selected CI will auto-populate the assignment group on the change request form (Option B). For Incidents, the CI's configured support group/team (commonly the \"Support Group\" or the CI's assignment_group-like field) is used to populate the incident assignment group when a CI is chosen, so Support Group on the selected CI will auto-populate the incident assignment group (Option C). ServiceNow provides an OOTB business rule/logic (Populate Assignment Group based on CI/SO) that runs server-side on save, to set assignment groups from CI or Service Offering attributes; implementations may also add client scripts or before-insert business rules to customize for other changes. Terminology and field names can vary by implementation (for example, some orgs use fields named assignment_group, support_group, change_group, or dynamic CI groups); confirm your instance's CI class fields and any custom mappings if behavior differs.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 161,
    "question": "In CI Class Manager, which element controls whether a CI class is visible and filterable in the \"Configuration Item\" reference field on ITSM forms (such as Incident, Problem, Change), helping to reduce clutter for end users?",
    "options": [
      "Principal Class",
      "Managed By Group",
      "Extensible flag",
      "CI Identifier"
    ],
    "correct": [
      "Principal Class"
    ],
    "explanation": "In ServiceNow's CI Class Manager, the Principal Class setting determines which classes appear as filterable options in the \"Configuration Item\" reference field on forms like Incident, Problem, and Change. This helps reduce clutter by limiting the lookup to only relevant, principal classes designated for ITSM use, excluding less relevant subclasses. CI Identifier defines unique identification rules for CIs but does not affect CI visibility. Extensible flag controls whether the class can have child classes extended, unrelated to lookup filtering. Managed By Group specifies the support group responsible for the class but has no impact on lookup filtering.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 162,
    "question": "Remediation Playbooks that can be used to fix common CMDB and CSDM issues are accessible from which management tool?",
    "options": [
      "CI Class Manager",
      "CMDB and CSDM Data Foundations Dashboards",
      "CMDB Query Builder",
      "Data Manager"
    ],
    "correct": [
      "CMDB and CSDM Data Foundations Dashboards"
    ],
    "explanation": "Remediation playbooks for fixing common CMDB (Configuration Management Database) and CSDM (Common Service Data Model) issues are accessible from the CMDB & CSDM Data Foundations Dashboards in ServiceNow. These dashboards provide guided steps, known as \"Get Well Playbooks\" or remediation playbooks, targeting data health metrics like CI completeness, relationships, and duplicates. They offer insights into upstream causes, downstream effects, and specific actions (Remediation Plays) for each issue. Navigate to the dashboards via the ServiceNow App Store or CMDB Workspace's Management tools section, where playbook URLs link to detailed fixes like handling missing CI references on incidents.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 163,
    "question": "Which are general usage guidelines for location records? (Choose 3)",
    "options": [
      "Non-hierarchical",
      "Unique",
      "Come from multiple sources",
      "Parent field populated occasionally",
      "Clear to end users",
      "Hierarchical"
    ],
    "correct": [
      "Unique",
      "Clear to end users",
      "Hierarchical"
    ],
    "explanation": "General usage guidelines for location records, particularly in Configuration Management Database (CMDB) systems, require that records are unique, hierarchical, and clear to end users. Ensuring uniqueness prevents duplicate locations, a hierarchical structure allows logical grouping (e.g., Campus > Building > Floor) for better management and reporting, and clarity ensures they are easily understood and actionable. Key guidelines include: Unique — locations must be unique to prevent confusion and duplicated efforts; Hierarchical — records should be organized in a hierarchical structure for better management and reporting; Clear to End Users — location information should be intuitive and easily understood; Standardized — consistent naming conventions should be applied to all locations; Not Empty — key fields, such as name and address, should be populated to ensure the record is useful; Single Source — ideally, locations should come from a single, trusted source of truth to maintain accuracy.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 164,
    "question": "A CMDB administrator recently set the global system property glide.class.downgrade.enabled to false. The administrator runs Discovery against a specific server. The IRE identifies that the server exists in the CMDB as a Windows Server CI, but the incoming payload suggests it should be reclassified to the generic Server class (a class downgrade). What is the resulting action in the system and why?",
    "options": [
      "The IRE stops processing the payload, and the CI remains untouched, without any task generated",
      "The CI is automatically deleted from the Windows Server class",
      "The CI is automatically moved to the Server class, but a log entry is created",
      "A Reclassification Task is generated, allowing the administrator to manually approve or reject the downgrade"
    ],
    "correct": [
      "A Reclassification Task is generated, allowing the administrator to manually approve or reject the downgrade"
    ],
    "explanation": "A Reclassification Task is generated, allowing the administrator to manually approve or reject the downgrade. When the global system property glide.class.downgrade.enabled is set to false, the Identification and Reconciliation Engine (IRE) prevents automatic downgrade reclassifications during Discovery processing. In this scenario, the IRE matches the incoming server payload to an existing Windows Server CI (child class), but the payload's generic Server class (parent class) triggers a downgrade. Since automatic downgrades are disabled, IRE rejects the reclassification part of the payload and creates a Reclassification Task for manual review. This ensures data integrity, as downgrades can lead to attribute loss from the child class, and allows administrators to approve, reject, or adjust the change.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 165,
    "question": "You are configuring the CMDB Health Dashboard to assist the CI maintenance team. You need to set up automated or guided actions to fix data quality issues found during the health scans. Which of the following specific mechanisms are used by ServiceNow to execute these remediation actions? (Choose 2)",
    "options": [
      "Workflow",
      "Scheduled Job",
      "Business Rule",
      "Duplicate CI Remediator"
    ],
    "correct": [
      "Workflow",
      "Duplicate CI Remediator"
    ],
    "explanation": "ServiceNow's CMDB Health Dashboard uses specific mechanisms to execute remediation actions for data quality issues like duplicates or incompleteness. Duplicate CI Remediator handles automated detection and merging of duplicate Configuration Items (CIs) based on predefined rules, and Workflow remediation rules trigger dedicated workflows (classic or Orchestration) to fix issues, such as deleting stale CIs or updating attributes. Scheduled Jobs calculate health scores but do not execute remediation, and Business Rules provide general automation but are not the specific mechanism for CMDB health fixes.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 166,
    "question": "A Configuration Management Process Owner is preparing solution options for presentation to technical governance for ingesting custom CIs into the CMDB. The solution must align with best practices, minimize future technical debt, and ensure upgrade compliance. Which solutions accomplish this? (Choose 2)",
    "options": [
      "C. Extending the existing Asset CI class table to custom CI class attributes",
      "A. Repurposing a base CI class and renaming attributes as required",
      "D. Extending an existing CI class table to accommodate the custom CI class attributes",
      "B. Installing or upgrading the CMDB CI Class Models Store application to find a suitable existing CI class accommodating any new attributes"
    ],
    "correct": [
      "D. Extending an existing CI class table to accommodate the custom CI class attributes",
      "B. Installing or upgrading the CMDB CI Class Models Store application to find a suitable existing CI class accommodating any new attributes"
    ],
    "explanation": "B and D are the correct solutions. These options align with ServiceNow CMDB best practices for ingesting custom CIs while minimizing technical debt and ensuring upgrade compliance. Installing or upgrading the CMDB CI Class Models Store application first checks for an existing suitable class. This prevents unnecessary customizations by reusing out-of-box (OOB) models, reducing debt and maintaining upgrade paths. Extending an existing CI class table accommodates custom attributes without repurposing base classes or misusing Asset Tables. ServiceNow recommends targeted extensions (not from cmdb_ci base or Assets) to preserve data model integrity and future-proof changes. Repurposing a base CI class (A) breaks OOB structure and invites upgrade issues, and extending Asset tables (C) violates CI-asset separation, creating governance and integration risks.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 167,
    "question": "DRAG DROP — Given a list of Service types in the platform, drag the appropriate service to its definition.\n\n**Items:** Application Service / Business Service / Technology Management Service (Technical Service)\n\n**Definitions:**\n1. Logical representation of a deploy system or application stack\n2. Published to Service Owners and underpins one or more business or Application Services\n3. Published to Business Users and underpins one or more business capabilities",
    "options": [],
    "correct": [
      "Application Service → Logical representation of a deploy system or application stack",
      "Technology Management Service (Technical Service) → Published to Service Owners and underpins one or more business or Application Services",
      "Business Service → Published to Business Users and underpins one or more business capabilities"
    ],
    "explanation": "Application Service is a logical representation of a deployed system or application stack. Technology Management Service is published to Service Owners and underpins business/application services. Business Service is published to Business Users and underpins business capabilities.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 168,
    "question": "A Configuration Manager needs to leverage a policy type to automate the creation and assignment of tasks to validate the existence of CIs. Which policy type should be used to accomplish this goal?",
    "options": [
      "Certification",
      "Attestation",
      "Delete",
      "Retire"
    ],
    "correct": [
      "Attestation"
    ],
    "explanation": "In ServiceNow CMDB, the Attestation policy type automates task creation and assignment to validate Configuration Item (CI) existence by having users confirm or reject if CIs still exist. This distinguishes it from other options: Certification focuses on data accuracy reviews across records, not specifically existence validation; Retire marks CIs as retired/end of life, without users-based validation; and Delete permanently removes CIs, typically post-validation. Use CMDB Data Manager in CMDB Workspace to configure Attestation policies with frequency and assignee rules for ongoing CI health checks.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 169,
    "question": "Cloud Dimensions is reviewing the metrics provided by their CMDB Correctness Scorecard. In reviewing the Duplicate metric for the Server class, it displays Healthy CIs/Evaluated 700/800. Which of the following is true regarding the duplicate server records calculated on the Duplicate metric?",
    "options": [
      "D. 800 server records are duplicates in the CMDB",
      "C. 700 Linux and 800 Windows server records are duplicates in the CMDB",
      "A. 700 server records are duplicates in the CMDB",
      "B. 100 server records are duplicates in the CMDB"
    ],
    "correct": [
      "B. 100 server records are duplicates in the CMDB"
    ],
    "explanation": "The CMDB Correctness Scorecard's Duplicate metric for the Server class shows \"Healthy CIs/Evaluated\" as 700/800. This standard ServiceNow format means 800 total Server CIs were evaluated, with 700 classified as healthy (non-duplicate), leaving 100 as duplicates. Option A wrongly claims all 700 are duplicates, reversing the healthy count. Option C adds unmentioned OS details (Linux/Windows), unsupported by the metric. Option D miscasts 800 as duplicates, ignoring the healthy/evaluated split. Duplicates are detected via the Identification and Reconciliation Engine (IRE) on CIs with defined rules, often triggering remediation tasks. The scorecard reflects this ratio directly for health tracking.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 170,
    "question": "Which table acts as a governor to ensure data integrity by defining exactly which Stage and Stage Status combinations are valid for a specific CI Class (e.g., preventing a Server from being set to Operational + Pending Disposal)?",
    "options": [
      "life_cycle_stage",
      "life_cycle_validation",
      "life_cycle_control",
      "life_cycle_policy"
    ],
    "correct": [
      "life_cycle_control"
    ],
    "explanation": "The life_cycle_control table governs data integrity in ServiceNow CMDB by defining valid combinations of Life Cycle Stage and Life Cycle Status for specific CI Classes (e.g., preventing invalid pairings like Operational stage with Pending Disposal status on a Server CI). This table acts as the authoritative control mechanism, with records filtered by the CI's table/class to enforce allowed stage status pairs during updates via Data Manager, Discovery, or manual changes. Other options serve different roles: life_cycle_policy manages lifecycle automation rules, life_cycle_stage lists available stages, and life_cycle_validation (if existent) handles broader checks rather than class-specific combinations.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 171,
    "question": "The Windows Server class has two reconciliation rules configured for the RAM (MB) attribute. Static Reconciliation Rule: Prioritizes SCCM (Priority 100) over all other sources. Dynamic Reconciliation Rule: Set to Largest Value. An incoming payload from ServiceNow Discovery reports RAM as 8192 MB, while the SCCM data reports 4096 MB. The CI record updates to 8192 MB (ServiceNow's value), despite the Static Reconciliation Rule prioritizing SCCM. What is the most likely cause of this behavior?",
    "options": [
      "A. The Static Reconciliation Rule was configured incorrectly and should have Priority 200",
      "D. The CI was last updated by ServiceNow Discovery, causing the \"Last Update Wins\" principle to apply",
      "B. The Dynamic Reconciliation Rule (Largest Value) takes precedence over the Static Reconciliation Rule, overriding the priority set for SCCM",
      "C. The glide.identification_engine.multisource_enabled property is set to false"
    ],
    "correct": [
      "B. The Dynamic Reconciliation Rule (Largest Value) takes precedence over the Static Reconciliation Rule, overriding the priority set for SCCM"
    ],
    "explanation": "In ServiceNow's Identification and Reconciliation Engine (IRE), static reconciliation rules prioritize specific data sources like SCCM (at priority 100), but Dynamic Reconciliation Rules — such as \"Largest Value\" for the RAM attribute — take precedence when both are configured for the same CI class. Here, ServiceNow Discovery's 8192 MB value exceeds SCCM's 4096 MB value, so the dynamic rule selects and applies the larger value, overriding the static priority. Option A is incorrect: priority values work inversely (lower numbers like 100 indicate higher precedence), so this setup is correct — the issue isn't a misconfiguration of the number. Option C is incorrect since the glide.identification_engine.multisource_enabled property (introduced in San Diego release) enables dynamic reconciliation rules, so it must be true here for the dynamic rule to function. Option D is incorrect: \"Last Update Wins\" principle overrides configured reconciliation rules in IRE; reconciliation strictly follows rule precedence, not update timing.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 172,
    "question": "Configuration Management needs to ensure data quality for all CIs in the CMDB. What areas of data quality for CIs are included in the CMDB Health Dashboard? (Choose 2)",
    "options": [
      "Stale CIs",
      "Downgraded CIs",
      "Duplicate CIs",
      "Upgraded CIs",
      "Missing CIs"
    ],
    "correct": [
      "Stale CIs",
      "Duplicate CIs"
    ],
    "explanation": "The two areas of data quality for Configuration Items (CIs) included in the CMDB Health Dashboard are Duplicate CIs and Stale CIs. The ServiceNow CMDB Health Dashboard measures data quality across three primary pillars: Completeness, Compliance, and Correctness. Duplicate CIs is a key metric within the Correctness scorecard — it identifies records that likely represent the same physical or logical entity, helping to maintain a single source of truth. Stale CIs is also part of the Correctness scorecard (or aligned with Compliance governance in some contexts); this metric identifies CIs that have not been updated within a specified timeframe, indicating they may no longer be active or accurate. Missing CIs is not a standard standalone health metric — \"Completeness\" tracks missing fields or relationships, not standalone \"Missing CIs\". Upgraded CIs and Downgraded CIs refer to CI class changes (reclassification) rather than data or data quality metrics monitored on the dashboard.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 173,
    "question": "A CMDB Administrator wants to create a CMDB Query to find all databases located in Seattle that are connected to application services. They also want to include incidents related to those databases. Which actions can the company take to build this query? (Choose 2)",
    "options": [
      "C. Add to the canvas the Incident table from the Non-CMDB Tables list",
      "D. Add property columns to the application service node",
      "B. Set the relationship level to 'Up to 2nd level relationships'",
      "A. Add a filter to the database node for location = Seattle"
    ],
    "correct": [
      "C. Add to the canvas the Incident table from the Non-CMDB Tables list",
      "A. Add a filter to the database node for location = Seattle"
    ],
    "explanation": "To build this CMDB query in ServiceNow's CMDB Query Builder, the administrator uses a combination of query types to link databases by location, their connections to application services, and related incidents from non-CMDB tables. Query Setup: Access the CMDB Query Builder (requires cmdb_query_builder role). Drag the Database CI class (cmdb_ci_db_instance) onto the canvas as the starting node. Location Filter: Apply a condition on the Database node for location: set Location equals Seattle (or use the specific cmn_location field value for Seattle). Service Connection: Connect the Database node to an Application Service node (cmdb_ci_service_auto) via a relationship type (right-side to left-side or vice versa), in Connection Properties, configure direction (e.g., Database as child), first-level relationships, and type like \"Application Service > Database Instance\" or \"Used by/Used by.\" Incident Inclusion: Drag the Incident table (a non-CMDB table) onto the canvas and connect it to the Database node. Select the CI reference column (e.g., cmdb_ci) in Connection Properties to link incidents where the database is the affected CI. Finalize and Run: Toggle AND/OR operators as needed (e.g., AND for location/service Connection, OR if alternatives). Preview results, save the query, and run or export for reporting. Correct Answers: A, C — these are the essential steps to filter databases by Seattle location and include related incidents from the non-CMDB Incident table.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 174,
    "question": "You have 10 servers part of a CMDB group (Servers 1-10). What will be the percentage listed on the Correctness scorecard - non-duplicate metric for the group given the following information: Server 1 fails the non-duplicate metric. Server 2 fails the non-duplicate metric. Server 3 fails the non-stale metric. Server 4 fails the non-orphan metric. The remaining servers pass all three metrics.",
    "options": [
      "60%",
      "80%",
      "20%",
      "90%"
    ],
    "correct": [
      "80%"
    ],
    "explanation": "There are 10 servers in the CMDB group. Servers 1 and 2 fail the non-duplicate metric, so 2 out of 10 fail this specific metric, while the other 8 (including Server 3 and the rest) pass it. The Correctness scorecard's non-duplicate metric measures the percentage of CIs in the group that pass the non-duplicate check, calculated as passing CIs divided by total CIs (80% here). Failures in other metrics (non-stale for Server 3, non-orphan for Server 4) do not count against the non-duplicate metric; each metric is evaluated independently.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 175,
    "question": "After an external inventory source runs, the Identification and Reconciliation Engine (IRE) attempts to change an existing Windows Server CI to the generic Server CI class because essential Windows-specific attributes were lost or missing. What type of reclassification behavior is the IRE attempting to execute?",
    "options": [
      "Switch",
      "Downgrade",
      "Upgrade"
    ],
    "correct": [
      "Downgrade"
    ],
    "explanation": "The Identification and Reconciliation Engine (IRE) in ServiceNow CMDB is attempting a Downgrade reclassification. This occurs when moving from a more specific child class like cmdb_ci_win_server (Windows Server CI) to a more general parent class like cmdb_ci_server (generic Server CI). Reclassification types: Downgrade shifts to a higher-level (more general) class in the hierarchy, losing specific attributes like Windows OS details if missing from incoming data. Upgrade moves to a lower-level (more specific) subclass, adding specialized attributes. Switch changes across different branches (e.g., Linux to Windows servers), combining downgrade (attribute loss) and upgrade (new attributes gained). After an external inventory source runs and processes data with missing Windows-specific attributes, IRE triggers this automatic downgrade to match available details against the generic Server CI class, causing data loss on reclassification unless disabled. This aligns with default IRE behavior unless overridden.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 176,
    "question": "What are 3 pillars to focus on to achieve a successful data foundation?",
    "options": [
      "Ingest",
      "Govern",
      "Compliance",
      "Completeness",
      "Insight",
      "Correctness"
    ],
    "correct": [
      "Ingest",
      "Govern",
      "Insight"
    ],
    "explanation": "In ServiceNow CMDB, the 3 pillars for successful data foundations are Ingest, Insight, and Govern (or Governance). These pillars ensure reliable configuration data for IT service management, aligning with enterprise needs like SAP or Salesforce integrations. Pillar details: Ingest — automate data population using tools like Discovery, Service Mapping, and Service Graph Connectors to handle volume and change rates in hybrid/cloud environments — continuously merge, update, and delete CIs. Insight — analyze and operationalize data via CMDB Workspace, Query Builder, Service Graph Visualizer, and CMDB 360 for operations support, planning, and CSDM-aligned reporting. Govern (Governance & Health) — proactively track quality with CMDB Health dashboards focusing on Compliance (policy adherence), Correctness (accuracy), and Completeness (full attributes/relationships), using Data Certification and governance committees.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 177,
    "question": "The HR department has a centralized support process called \"Employee Benefits Support.\" They define two specific service tiers for this process: a \"Standard Support\" commitment (response within 4 hours, 5-day week) and a \"Premium Support\" commitment (response within 1 hour, 7-day week). Which CSDM element is the specific record that defines the Premium Support commitment, including its specific response time and availability?",
    "options": [
      "A. Business Application",
      "C. Business Service",
      "B. Service Offering",
      "D. Technical Service"
    ],
    "correct": [
      "B. Service Offering"
    ],
    "explanation": "The specific CSDM element that defines the Premium Support commitment, including its 1-hour response time and 7-day availability, is the Service Offering. In the ServiceNow Common Service Data Model (CSDM), a Service Offering refines a parent Business Service (like \"Employee Benefits Support\") by specifying unique commitments such as response timing, availability, and support tiers. For example, gold/silver offerings with distinct response guarantees (e.g., 30 minute weekdays), directly matching the Premium vs. Standard tiers here. Business Applications represent software like HR apps; no response service level. Business Service is the high-level service (e.g., \"Employee Benefits Support\"), contains offerings. Technical Service is the IT-internal service supporting apps for technical consumption. Business Services provide the overarching value, but Service Offerings hold the granular SLAs and commitments.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 178,
    "question": "A new custom class is needed to reflect a new application being managed in the CMDB. Which roles are minimally needed to add this custom CI class?",
    "options": [
      "C. cmdb_inst_admin and personalize_form",
      "D. itil_admin and personalize_form",
      "A. data_classification_admin and personalize_dictionary",
      "B. sn_cmdb_admin and personalize_dictionary"
    ],
    "correct": [
      "B. sn_cmdb_admin and personalize_dictionary"
    ],
    "explanation": "To add a new custom CI class in ServiceNow's CMDB, users need sn_cmdb_admin for CMDB-specific administration, such as accessing CI Class Manager to create or manage classes. The personalize_dictionary role is also required to modify dictionary entries and attributes associated with the new class. Why these roles: sn_cmdb_admin grants access to core CMDB functions like class creation under Configuration > CI Class Manager, beyond basic ITIL permissions. personalize_dictionary enables custom dictionary personalization for fields and attributes on the new class. Other option pairs fall short: data_classification_admin handles data classification, not classes (ruled out by A); cmdb_inst_admin focuses on instances, not classes; personalize_form is for UI forms (ruling out C); itil_admin lacks CMDB depth without sn_cmdb_admin (ruling out D).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 179,
    "question": "The CMDB team configures health inclusion rules so that: Network devices in a certain lab are excluded from CMDB Health. All other network devices remain included. Later, a manager asks why the health score for the Network gear looks higher after this change. Which is the most accurate explanation?",
    "options": [
      "D. Inclusion rules moved excluded CIs to a separate archive table",
      "A. Inclusion rules only change the dashboard layout, not the scores",
      "B. Inclusion rules automatically repair all CIs covered by them",
      "C. Inclusion rules turn off metrics at class level for all network devices",
      "E. Excluding the lab devices means they are no longer counted in the health calculations"
    ],
    "correct": [
      "E. Excluding the lab devices means they are no longer counted in the health calculations"
    ],
    "explanation": "CMDB Health inclusion rules define which CIs are included in health metrics like completeness, correctness, and compliance. Excluding specific network devices (those in a lab) removes them from the numerator and denominator in health metric calculations, so remaining \"Network gear\" CIs show improved KPIs if the lab devices had issues (e.g., stale data, missing fields, or duplicates). Option A is incorrect since rules filter data for both calculations and display; scores change based on scoped CIs. Option B is incorrect since inclusion rules scope evaluation, not repair data. Option C is incorrect since rules target specific CIs (e.g., lab network devices), not all network devices, and don't turn off metrics. Option D is incorrect since excluded CIs remain in the CMDB but are ignored in health rules — they aren't moved to a separate archive table.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 180,
    "question": "Which core process is NOT handled by the CMDB Data Manager and must instead be addressed by separate governance features like the CMDB Health Correctness Scorecard or the Duplicate CI Remediator wizard?",
    "options": [
      "Certification",
      "De-duplication",
      "Delete",
      "Archive",
      "Retire",
      "Attest"
    ],
    "correct": [
      "De-duplication"
    ],
    "explanation": "De-duplication is intentionally not part of CMDB Data Manager's scope; it's handled by separate CMDB Health and governance tools like the Health Correctness engine and Duplicate CI Remediator. This matches how ServiceNow positions CMDB Data Manager and the de-duplication capabilities: CMDB Data Manager is a policy-driven framework for bulk CI lifecycle operations — Retire, Archive, Delete, Attest, and Certification. It does not provide a \"De-duplication policy\" and does not perform duplicate detection or merging as part of its lifecycle model. What CMDB Data Manager actually does: CMDB Data Manager focuses on bulk management of CIs to keep the CMDB lean and aligned with business rules. Typical policy types: Retire — mark CIs as end-of-life while keeping them visible in lists, ITSM, and CMDB Health. Archive — move retired/inactive CIs into an archive table so they don't clutter the active CMDB but remain available for reference/compliance. Delete — permanently remove CIs when they are no longer needed and when business rules allow it. Attestation — create tasks to verify that CIs actually exist in the environment (location, owner, support group) for CI health. Certification — confirm specific attribute values are aligned with CSDM standards (for example: archive/delete after a CI is retired). These policies run in bulk and are aligned with CSDM standards. Why de-duplication is separate: Duplicate detection and remediation is treated as a data correctness problem, not a lifecycle transition. De-duplication requires attribute comparison and identification logic (Health Correctness rules, IRE identification, etc.), which is more complex than simple \"state change\" policies. De-duplication uses CMDB Health Correctness KPIs and the Duplicate CI Remediator wizard to: flag potential duplicates via reconciliation rules, let admins choose a master CI, merge attributes, and decide whether to delete or retire the duplicate. When duplicates are flagged via ITSM records, correlated candidate incidents/changes/problems, the tooling guides users to either merge, retire, or link records to their correct \"duplicate CI\" rather than just deleting. This is why the platform separates governance/lifecycle policies (Data Manager) from \"quality remediation\" (Health + Remediator).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 181,
    "question": "Reconciliation rules are configured to control which of the following?",
    "options": [
      "Deletion of a CI",
      "Updates to a CI",
      "Inserts of a CI",
      "Reading of a CI"
    ],
    "correct": [
      "Updates to a CI"
    ],
    "explanation": "Reconciliation rules are configured primarily to control Updates to a CI. The Reconciliation process is part of the overall Identification and Reconciliation Engine (IRE) flow and happens after the identification process determines a CI match. They specify which data sources are authorized to update specific attributes or sets of attributes and help ensure data integrity by defining priority among multiple discovery sources to avoid conflicts. The decision to insert a new CI record is managed during the Identification process. If the IRE cannot find a match for an incoming payload using the identification rules, it creates a new CI record (an insert) on the unmatched CIs. Reconciliation rules focus specifically on updates to existing CIs, not the creation process. However, an administrator can block inserts from an unwanted source using CI Data Source Rules, with a separate configuration from reconciliation. Deletion of CIs is typically governed by CMDB Data Manager policies or handled through manual remediation tasks like the Duplicate CI Remediator Wizard, not by reconciliation rules. Reading or viewing of CI data is managed by standard ServiceNow access controls (ACLs) and specialized tools like CMDB Query Builder or the Multisource CMDB (CMDB 360), which allows viewing of retained raw data from all sources. In summary, reconciliation rules are designed to manage and prioritize data updates to CIs when multiple sources contribute information.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 182,
    "question": "Defines policies for retiring CIs that are no longer in use, often based on criteria like age or lack of discovery.",
    "options": [
      "Delete",
      "Retire",
      "Archive",
      "Data Certification",
      "Attestation"
    ],
    "correct": [
      "Retire"
    ],
    "explanation": "In ServiceNow CMDB management, the \"Retire\" policy specifically defines rules for retiring Configuration Items (CIs) that are no longer in use. These policies use criteria like age, operational state (e.g., \"End of Life\"), or lack of recent discovery activity (e.g., no updates in 30-90 days). Key distinctions: Retire — updates CI status (e.g., lifecycle stage to \"End of Life\") via scheduled jobs or Data Manager policies. Archive — moves retired CIs to storage after a retention period, preserving history. Delete — permanently removes CIs (avoided for audits; used sparingly for orphans). Data Certification/Attestation — focus on periodic data validation/ownership confirmation, not lifecycle retirement. Usage example: a common Retire policy might target CIs undiscovered for 90 days: `Operational State = Retired AND Last Discovered < 90 days ago`, triggering via CMDB Data Manager. This keeps CMDB health high while following retention best practices.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 183,
    "question": "Why do organisations fail to complete implementation or realise business value from the CMDB? Select 3 Answers from the below options.",
    "options": [
      "Too many non-IT Configuration Items",
      "Inconsistent data quality",
      "Ill-defined relationships among Configuration Items",
      "Unknown Configuration Items"
    ],
    "correct": [
      "Inconsistent data quality",
      "Ill-defined relationships among Configuration Items",
      "Unknown Configuration Items"
    ],
    "explanation": "Organizations often fail to complete CMDB implementations or realize business value due to core data-related issues. The three primary reasons from the options are: Unknown Configuration Items — missing or undiscovered CIs lead to incomplete visibility, undermining the CMDB's foundational accuracy. Inconsistent data quality — poor, unreliable data entry and maintenance cause errors in decision making and service management. Ill-defined relationships among Configuration Items — unclear dependencies prevent effective impact analysis and change management. Why these matter: these issues create a vicious cycle: unknown CIs result in gaps, inconsistent quality erodes trust, and poor relationships block faster incident resolution. \"Too many non-IT Configuration Items\" is less critical, as scope control (focusing on key CIs) is a best practice rather than a failure mode.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 184,
    "question": "Which three metrics are visible in the CMDB 360 view within the CMDB Workspace, providing key analytics on multisource data ingestion? (Select 3)",
    "options": [
      "Duplicate CI Remediator status",
      "Total number of CIs collected for each discovery source",
      "CIs by number of Discovery sources (reported by multiple sources)",
      "CIs reported by a single discovery source",
      "Unassigned Data Manager task"
    ],
    "correct": [
      "Total number of CIs collected for each discovery source",
      "CIs by number of Discovery sources (reported by multiple sources)",
      "CIs reported by a single discovery source"
    ],
    "explanation": "These three metrics appear in the Discovery sources tile of the CMDB 360 view within ServiceNow's CMDB Workspace. They deliver key analytics on multisource CI coverage by breaking down CI coverage across discovery sources. CIs by number of Discovery sources (reported by multiple sources) groups CIs by the count of discovery sources reporting them, highlighting multisource overlap for data quality. Total number of CIs collected for each discovery source displays the distribution of CMDB 360 CIs across all reporting sources via an overview chart. CIs reported by a single discovery source shows CIs from one source only, with breakdowns to spot potential data gaps or single-source risks. Unassigned Data Manager task and Duplicate CI Remediator status relate to CMDB health but are not part of the CMDB 360 view's multisource ingestion analytics.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 185,
    "question": "A Data Center Manager is working with the CMDB CI Class Manager to define the relationship between Application Servers and the Applications they host. The company has multiple Application Servers that host one or more Applications. Which describes the relationship between the Application Server table and the Application table?",
    "options": [
      "One-to-one",
      "Many-to-one",
      "Many-to-many",
      "One-to-many"
    ],
    "correct": [
      "Many-to-many"
    ],
    "explanation": "In the ServiceNow CMDB, the relationship between Application Servers and the Applications they host is defined as Many-to-many. A single Application Server (Tomcat, IIS, WebSphere) can host multiple distinct Applications (e.g. payroll app and benefits app). A single Application can be distributed and hosted across multiple Application Servers to ensure load balancing, high availability, or redundancy. The CI Class Manager uses the `cmdb_rel_ci` table to track these dependencies, where one CI (the server) can have relationships with many other CIs (the applications), and vice versa. One-to-one would wrongly imply any single application can only run on one dedicated server. One-to-many and Many-to-one are too restrictive and don't account for multi-tenant/multi-server real-world deployment models.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 186,
    "question": "DRAG DROP — Drag and drop the CMDB Health Dashboard metric to the correct description.\n\n**Items:** Audits / Duplicate CIs / Orphan CIs / Recommended fields / Required fields / Stale CIs\n\n**Descriptions:**\n1. Use these to compare actual values with expected values\n2. Use of these should be minimized\n3. Certain attribute values are not set, or relationships are missing\n4. Preferable for them to be populated, as they could be useful in troubleshooting issues\n5. Have not been updated and may be outdated\n6. Detected during identification and reconciliation and have associated base system remediation tools",
    "options": [],
    "correct": [
      "Audits → Use these to compare actual values with expected values",
      "Required fields → Use of these should be minimized",
      "Orphan CIs → Certain attribute values are not set, or relationships are missing",
      "Recommended fields → Preferable for them to be populated, as they could be useful in troubleshooting issues",
      "Stale CIs → Have not been updated and may be outdated",
      "Duplicate CIs → Detected during identification and reconciliation and have associated base system remediation tools"
    ],
    "explanation": "Audits compare actual values with expected values. Required fields should be minimized in absence. Orphan CIs have missing attribute values or relationships. Recommended fields are preferable to populate for troubleshooting. Stale CIs have not been updated. Duplicate CIs are detected during identification and reconciliation with associated remediation tools.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 187,
    "question": "When utilizing the Duplicate CI Remediator wizard to resolve duplication tasks, the system provides recommendations to help the administrator select the Main CI (Master CI) to retain. Which field is updated on the discarded duplicate CI record to indicate the CI that was chosen as the original master record?",
    "options": [
      "Operational Status",
      "Duplicate Of",
      "Discovery Source (set to 'duplicate')",
      "Last Updated"
    ],
    "correct": [
      "Duplicate Of"
    ],
    "explanation": "The Duplicate CI Remediator wizard in ServiceNow CMDB updates the `duplicate_of` field on discarded duplicate CI records. This reference field stores the `sys_id` of the selected Main CI (master record), creating an audit trail that links the retired or discarded duplicate to the retained active record. Administrators select the Main CI during remediation, often based on the oldest or most recently updated record. For the duplicates, the `duplicate_of` field gets populated instead of other fields like Operational Status or Discovery Source (Operational Status initially stays \"Unknown\" until remediation resolves it).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 188,
    "question": "CMDB class owners are receiving tasks under the \"My Work\" tab in the CMDB Workspace. Which CMDB management tool is generating those tasks?",
    "options": [
      "CMDB Data Manager",
      "CMDB Health Dashboard",
      "De-duplication templates"
    ],
    "correct": [
      "CMDB Data Manager"
    ],
    "explanation": "The tooling generating the tasks that CMDB class owners see under the \"My Work\" tab in the CMDB Workspace is the CMDB Data Manager. The \"My Work\" view surfaces data compliance tasks such as attestation, certification, and other lifecycle tasks that are created by CMDB Data Manager policies. CMDB Data Manager is a policy-driven framework that evaluates CIs (e.g. class, attributes, and assigned related fields like Managed By Group) and automatically creates tasks assigned to users or groups, including class owners. De-duplication templates and the related De-duplication Dashboard/Remediation flow are focused on handling duplicate CIs, not general CMDB class owner compliance tasks. The CMDB Health Dashboard is a reporting/monitoring view of CMDB quality metrics, not a task generation engine.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 189,
    "question": "A Configuration Manager has configured multiple data sources that are all authorized to update the same class and the same set of attributes in the CMDB. What can the Configuration Manager do to control which data source should be the authoritative source of truth for a specific class or set of attributes?",
    "options": [
      "Configure data refresh rules with a specific time period",
      "Manually run the data source updates in the correct order",
      "Assign a run order to each data source in the identification rules",
      "Assign a priority to each data source in reconciliation rules"
    ],
    "correct": [
      "Assign a priority to each data source in reconciliation rules"
    ],
    "explanation": "In ServiceNow CMDB, reconciliation rules control which data sources can update specific CI attributes and establish the authoritative source of truth by assigning priorities. For classes with multiple authorized data sources, create reconciliation rules in the same Data Sources tab. These rules set precedence (e.g. Source A overrides Source B for certain attributes), ensuring the highest priority source wins during updates and avoiding \"flip flopping\". Key benefits: applies to updates only, since any source can still create new records; rules are class-specific and target individual attributes for granular control; regularly review via the CMDB Health Dashboard to monitor compliance and data quality. Other options fall short: manually running data sources lacks automation and scalability, data refresh rules manage timing, not authority, and identification rules handle CI matching, not authoritative updates. This priority setup ensures data integrity across multiple sources.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 190,
    "question": "What is the main purpose of the Life Cycle Mapping (`life_cycle_mapping`) table?",
    "options": [
      "A. It stores the current lifecycle values for every CI and asset, one row per record",
      "B. It stores CMDB group definitions used by CMDB Health dashboards",
      "C. It stores all possible combinations of lifecycle stage and lifecycle status that are allowed in the system",
      "D. It stores mappings from lifecycle fields to Service Portfolio entries only",
      "E. It stores mapping rules from a legacy status field (for example, install_status or operational_status) to a CSDM lifecycle pair (lifecycle stage + lifecycle status), including an optional reverse-sync choice",
      "F. This choice describes the purpose accurately, but E is the precise definition without extra rationale."
    ],
    "correct": [
      "E. It stores mapping rules from a legacy status field (for example, install_status or operational_status) to a CSDM lifecycle pair (lifecycle stage + lifecycle status), including an optional reverse-sync choice"
    ],
    "explanation": "The Life Cycle Mapping table in ServiceNow stores mapping rules that convert legacy status fields — like `install_status` or `operational_status` — into CSDM lifecycle pairs (lifecycle stage + status), also including an optional reverse-sync choice to propagate lifecycle changes back to legacy CIs and assets. This setup enables synchronization of old and new lifecycle attributes for CMDB CIs and assets. Option A is incorrect: it doesn't store current values, but mappings for deriving them. Option B is wrong: that's `cmdb_health_group` or similar tables. Option C doesn't match: valid combinations are defined elsewhere via the life cycle model. Option D is too narrow: mappings apply broadly, not just to Service Portfolio.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 191,
    "question": "A CMDB Owner starts on the CSDM journey and needs to become familiar with the CSDM domains. Drag the CMDB objects to the correct CSDM domains.\n\n**Items:** Application Service / Business Application / Business Process / Business Service\n\n**Domains:** Design and Planning domain / Foundation domain / Service Delivery domain / Sell/Consume domain",
    "options": [],
    "correct": [
      "Business Process → Design and Planning domain",
      "Business Application → Foundation domain",
      "Application Service → Service Delivery domain",
      "Business Service → Sell/Consume domain"
    ],
    "explanation": "Business Process belongs to the Design and Planning domain. Business Application belongs to the Foundation domain. Application Service belongs to the Service Delivery domain. Business Service belongs to the Sell/Consume domain.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 192,
    "question": "What is the primary operational consequence when a CMDB Administrator sets the `glide.class.switched.enabled` system property to false?",
    "options": [
      "If the IRE finds a match but determines the CI belongs to a different branch (Class Switch), a Reclassification Task is generated.",
      "The system prevents all class upgrades and downgrades.",
      "The CI's Discovery Source is set to 'duplicate.'",
      "The CI is automatically deleted from the CMDB."
    ],
    "correct": [
      "If the IRE finds a match but determines the CI belongs to a different branch (Class Switch), a Reclassification Task is generated."
    ],
    "explanation": "When the `glide.class.switched.enabled` system property is set to false, it disables the automatic reclassification of a Configuration Item (CI) during the Identification and Reconciliation Engine (IRE) process. If the IRE determines that a CI should belong to a different branch of the class hierarchy (\"class switch\"), the system blocks the automatic change and instead generates a Reclassification Task for a CMDB Administrator to review and decide manually. This prevents unintentional data loss that can occur during an automatic class switch. Why other options are incorrect: the CI's Discovery Source is set to 'duplicate' is incorrect since that field indicates when CI data from multiple matching CIs generates a de-duplication task, not related to this property. The system prevents all class upgrades and downgrades is incorrect: separate properties `glide.class.upgrade.enabled` and `glide.class.downgrade.enabled` control upgrades and downgrades respectively. The CI is automatically deleted is incorrect: the CI is not deleted; instead, the class change is blocked and a task is generated to ensure manual review and preservation of data.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 193,
    "question": "A Configuration Management team needs to prevent duplicate server records to avoid confusion among users. Server records are identified when they are processed via the Identification and Reconciliation Engine (IRE) using the configured identification rules. Where would these rules be configured?",
    "options": [
      "CMDB Data Manager",
      "CMDB Health Dashboard",
      "CMDB Workspace",
      "CMDB CI Class Manager"
    ],
    "correct": [
      "CMDB CI Class Manager"
    ],
    "explanation": "In ServiceNow, the IRE identification rules for server CIs (used to prevent duplicate records) are configured in the CMDB CI Class Manager, the centralized place to view the CMDB class hierarchy in a tree-view format and edit class definitions and settings for identification rules, reconciliation rules, and CMDB Health. To access it: navigate to Configuration > CI Class Manager in the Application Navigator, search for and open the desired class (e.g. Server, Linux Server, Windows Server), and click on the \"Identification Rule\" tab. This tab displays identifier entries for that specific class. Each identifier entry has a Priority — the IRE evaluates entries in increasing order of priority. For example, an entry combines Serial Number and Serial Number Type — the IRE first checks CIs with that combination. If found, a match is used; if updated and no further entries are evaluated. If no match is found after evaluating all entries, a new CI is created. Identification rules prevent duplicate server records by defining sets of ServiceNow attributes that uniquely identify a CI within the hierarchy.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 194,
    "question": "A Configuration Manager is reviewing the life cycle of CIs to ensure data accuracy, consistency, and relevance. The manager reviews the legacy status values and their equivalent CSDM life cycle stage and life cycle stage status values. Where are these reviewed?",
    "options": [
      "Life cycle properties",
      "Life cycle choice list",
      "Life cycle mappings"
    ],
    "correct": [
      "Life cycle mappings"
    ],
    "explanation": "The Configuration Manager reviews these in the Life Cycle Mapping table (also called the `life_cycle_mapping` table or Life Cycle Mapping module). What it contains: preloaded mappings between legacy status values (install_status, operational_status, hardware substatus) and their equivalent CSDM life cycle stage and life cycle stage status values. Purpose: translates legacy CI values to CSDM life cycle-value pairs to ensure synchronization and consistency across CI, asset, and IT records. How it works: each record specifies how to map a legacy status value based on the class it applies to, and the best CSDM life cycle-value pair. Priority handling: when multiple rules apply to a class, entries are prioritized, and the highest priority rule is used. The table is located in the ServiceNow base system and can be accessed via the Life Cycle Mapping module in the platform.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 195,
    "question": "How is the CMDB aligned to business processes? (Choose two.)",
    "options": [
      "Provides a centralized view of configuration items and their relationships",
      "Extends service delivery management to all enterprise departments",
      "Enables CFO/CIO to track software licenses",
      "Enhances decision-making and operational efficiency across the organization"
    ],
    "correct": [
      "Provides a centralized view of configuration items and their relationships",
      "Enhances decision-making and operational efficiency across the organization"
    ],
    "explanation": "The correct 2 answers are: Enhances decision-making and operational efficiency across the organization — a CMDB aligned to business processes (especially with CSDM) enables data-driven decision-making, improves ITSM efficiency, and provides better visibility into IT environments. Provides a centralized view of configuration items and their relationships — a CMDB is fundamentally a centralized repository storing configuration items (CIs) and their relationships, which maps IT infrastructure to business services accurately. Why these are correct: the CMDB's primary purpose when aligned to business processes is to provide visibility and decision-making capabilities by showing how IT assets relate to business services. It creates a single source of truth with centralized data about CIs and their dependencies, enabling proactive operations and automated workflows. Why other options are incorrect: enables CFO/CIO to track software licenses is a specific CMDB capability (license management), not the core business process alignment benefit. Extends service delivery management to all enterprise departments describes service management scope, not the core alignment benefit.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 196,
    "question": "How do CMDB management tools and features within the CMDB governance pillar help organizations manage CIs and improve service delivery? (Choose two.)",
    "options": [
      "Gain visibility and control",
      "Enhanced Service Management operations",
      "Reduced hardware costs",
      "Assist integration choices"
    ],
    "correct": [
      "Gain visibility and control",
      "Enhanced Service Management operations"
    ],
    "explanation": "Based on the context of CMDB governance tools and their benefits for managing Configuration Items (CIs) and improving service delivery, the two correct answers are: Gain visibility and control — CMDB governance provides dashboards, reports, and governance scoring that give organizations visibility into CI health, policy compliance, and data quality, along with control through policy enforcement. Enhanced Service Management operations — CMDB governance supports service management operations like incident management, change management, security, asset management, and problem management by providing accurate CI data and relationships. Why other options are incorrect: reduced hardware costs is not a primary benefit of CMDB governance; it focuses on data quality and process improvement, not hardware cost reduction. Assist integration choices — CMDB itself doesn't directly assist with integration decisions; it's a repository for IT asset data. CMDB governance transforms the database into a trusted foundation that enables reliable operations through visibility and control with automated policy enforcement.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 197,
    "question": "An Enterprise Architect of a financial services company is working across the enterprise and wants to track their capabilities. Which CSDM 5 domain is used?",
    "options": [
      "Design and Planning (Design)",
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Foundation",
      "Service Delivery (Manage Technical)"
    ],
    "correct": [
      "Design and Planning (Design)"
    ],
    "explanation": "The CSDM 5 domain used is Design and Planning (Design). Key details confirming this answer: Primary User: Enterprise Architect. Purpose: defines what the business does and how it's supported by applications and data. Key Artifacts: Business Capabilities, Business Applications, Information Objects. Why it fits: Enterprise Architects track business capabilities in this domain to map technology to business outcomes. The Design and Planning domain is specifically described as \"the architecture layer in data\" where Enterprise Architects model capability maps and relate capabilities to Business Applications. It's distinct from other domains like Foundation (core building blocks), Build and Integration (how products are built), or Service Delivery (how services are delivered).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 198,
    "question": "A Service Desk Manager wants to leverage the Unified Map to find active incidents or problems for a selected CI. Which panel will give the manager visibility and details?",
    "options": [
      "Attributes",
      "Related Items",
      "Application Services",
      "Overview"
    ],
    "correct": [
      "Related Items"
    ],
    "explanation": "The Related Items panel (also called the Related items side panel) gives the Service Desk Manager visibility and details of active incidents or problems for a selected CI. Key details about this panel: What it shows — all related CIs grouped by category, including active incidents, active problems, and changes. How to access — select a CI on the Unified Map, then click the Related items icon. Visual indicators — badges show the count of related items for the selected CI. Details view — select an arrow to view details on a card in the panel; clicking a card highlights the associated CI on the map. Configuration — administrators configure which categories (like active incidents/problems) appear globally via User Preferences. This panel is specifically designed to help Service Desk Managers leverage the Unified Map to find and understand active incidents or problems tied to any selected Configuration Item (CI).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 199,
    "question": "A CSDM Data Manager needs metrics on the alignment of product models, locations, and business units with best practices. Which tab in the CSDM Data Foundations Dashboard provides this information?",
    "options": [
      "Crawl",
      "Walk",
      "Foundation",
      "Run",
      "Fly"
    ],
    "correct": [
      "Foundation"
    ],
    "explanation": "The Foundation tab in the CSDM Data Foundations Dashboard provides metrics on the alignment of product models, locations, and business units with best practices. Key details about this tab: Purpose — identifies missing data in the CMDB essential for effective management and compliance. Maturity Stage — appropriate for the foundation stage of CSDM implementation. Specific Metrics — includes reports like Business Units with Companies (business unit records where Company field is not empty) and Locations with Parents (operational status is operational, parent is not empty), Product models without associated product owners. Compliance Indicator — color-coded bars: Red (0-50%), Yellow (50-90%), Green (>90%). The other tabs (Crawl, Walk, Run, Fly) correspond to later maturity stages and focus on metrics like service modeling readiness rather than foundational data alignment.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 200,
    "question": "A CMDB Administrator is tasked with managing the CMDB and needs to define a new CI class to track a new type of equipment that has not been seen before. Which action will ensure a new CI class and it integrates properly with the existing CMDB structure?",
    "options": [
      "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class",
      "Use Service Catalog to define the new class, as the CI Class Manager is only for service-related records and not for hardware CIs",
      "Use the CI Class Manager to create a new CI class but avoid setting up any inheritance, as CI classes should be independent of one another to maintain clarity",
      "Edit an existing CI class under CI Class Manager and add new fields specific to the new equipment type"
    ],
    "correct": [
      "Create a new CI class directly in the CI Class Manager and configure the table inheritance to ensure it inherits from a relevant parent class"
    ],
    "explanation": "To properly add a new CI class and ensure it integrates with the existing CMDB structure, the correct action is to use the CI Class Manager to create a new CI class by extending an existing parent class, defining its attributes, and setting up the appropriate relationships. Why this is the right approach: extend a parent class to inherit existing attributes and relationships, maintaining hierarchy integrity; define attributes to capture the unique properties of the new equipment type; set up relationships so the new CI connects properly to other CIs (e.g. hosted on, connected to, hosted by); use CI Class Manager as the purpose-built tool for managing the CMDB class hierarchy in ServiceNow. Step by step: open CI Class Manager, navigate to Configuration > CI Class Manager, identify the appropriate parent class (e.g. cmdb_ci_hardware or cmdb_ci_computer or cmdb_ci_netgear), create the new class extending the correct table, define attributes/fields specific to the new equipment (inherited fields from the parent table carry over automatically), configure relationships, and apply identification rules so IRE can auto-discover and correctly classify the new CI type. The CMDB's power comes from its hierarchical class model. Any new CI class must extend an existing class in the `cmdb_ci` tree to inherit core attributes (like name, serial_number, managed_by) and participate in relationship mapping, discovery, and reporting.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 201,
    "question": "A CMDB Configuration Manager is reviewing the metrics on the CMDB Health Dashboard's Correctness Scorecard. For the Duplicate metric in the Server class, it shows Healthy CIs/Evaluated = 59,000/60,000. What does this indicate about the scope of server records calculated under this metric?",
    "options": [
      "60,000 server records are in scope for this metric",
      "1,000 server records are in scope for this metric",
      "59,000 Linux and 60,000 Windows servers records are in scope for this metric",
      "59,000 server records are in scope for this metric"
    ],
    "correct": [
      "60,000 server records are in scope for this metric"
    ],
    "explanation": "This indicates that 60,000 server records are in scope for this metric. Key details about the scope: Evaluated (60,000) — the total number of Configuration Items (CIs) in the Server class that the health job evaluated against the Duplicate metric. Healthy CIs (59,000) — the number of CIs that passed the Duplicate check (non-duplicate independent CIs); Unhealthy CIs (1,000) — the duplicate CIs identified (calculated as 60,000-59,000). The Duplicate metric specifically measures the percentage of duplicate-independent CIs, where a duplicate set of size N contributes N-1 duplicates. The scope includes all server records that pass the Health Inclusion Rules for the Duplicate metric (required, orphan, recommended, applicable, stateless filters). Therefore, the denominator (60,000) represents the total scope of server records calculated under this metric, not the healthy count or the unhealthy count.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 202,
    "question": "A Configuration Manager is implementing end to end service modeling and wants to get help on standards and playbooks for improving the quality. What does the Configuration Manager reference to obtain guidance?",
    "options": [
      "CMDB Workspace",
      "Service Mapping Data Foundation Dashboard",
      "CMDB Data Foundation Dashboard",
      "CSDM Data Foundation Dashboard"
    ],
    "correct": [
      "CSDM Data Foundation Dashboard"
    ],
    "explanation": "The CSDM Data Foundation Dashboard is specifically designed to provide a unified view of data quality across the Customer Service Data Model (CSDM). It highlights key health indicators such as completeness, accuracy, and timeliness, while also offering actionable playbooks for improving service modeling practices. Unlike the CMDB Data Foundation Dashboard, it supports a holistic approach by aligning data, processes, and integrations with the CSDM framework. This dashboard is specifically designed for Configuration Managers implementing end-to-end service modeling with the CSDM (Common Service Data Model) framework, helping them take targeted corrective actions to improve configuration data quality.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 203,
    "question": "A Manager needs information on how to correctly establish relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Which CSDM domain would provide this information?",
    "options": [
      "Design and Planning (Design)",
      "Service Delivery (Manage Technical Services)",
      "Build and Integration (Build)",
      "Service Consumption (Sell/Consume)",
      "Foundation"
    ],
    "correct": [
      "Service Delivery (Manage Technical Services)"
    ],
    "explanation": "The Manage Technical Services domain (also called the Service Delivery domain in CSDM 5) provides information on correctly establishing relationships between Infrastructure CIs, Technology Management Offerings (Technical Service Offerings), and Application Services within the CMDB. Key facts about this domain: Core purpose — contains the core of the CMDB, including infrastructure CIs, service CIs, applications, and their relationships. Tables used by — IT Operations (ITOM) products like Service Mapping and Discovery. Key objects — Infrastructure CIs, Technical Services (Technology Management Offerings), and Application Services. Supports — SecOps and Service Operations management. In this domain: Application Services represent deployed application stacks (logical representation of a single technology stack instance); Technical Services (Technology Management Offerings) are shared IT capabilities consumed by multiple Application Services (e.g. Database Service, Authentication Service); Infrastructure CIs are the actual hardware/software components (servers, network devices, storage devices). The relationships follow patterns like \"Hosted on\" (Application Service → Server) and \"Depends on\" (Service → Service).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 204,
    "question": "DRAG DROP - The CMDB Health Dashboard is based on three Key Performance Indicators (KPIs): Completeness, Compliance, and Correctness. Each KPI includes several sub-metrics. Drag the sub-metrics to the KPI. Some options may not apply.\n\n**Items:** Audit / Stability / Required / Certify / Suggested / Orphan\n\n**KPIs:** Completeness / Compliance / Correctness",
    "options": [],
    "correct": [
      "Required → Completeness",
      "Certify → Compliance",
      "Audit → Correctness"
    ],
    "explanation": "Required maps to Completeness. Certify maps to Compliance. Audit maps to Correctness. Stability, Suggested, and Orphan are unused distractors for this question.",
    "multi": true,
    "dragdrop": true,
    "distractors": [
      "Stability",
      "Suggested",
      "Orphan"
    ]
  },
  {
    "id": 205,
    "question": "DRAG DROP - Drag and drop the CMDB Health Dashboard metric to the description.\n\n**Items:** Audit / Duplicate / Orphan / Recommended / Required / Stale\n\n**Descriptions:**\n1. CMDB records that represent the same physical or logical asset multiple times\n2. Fields necessary to create or update a CI record in the CMDB\n3. CMDB records that no longer maintain their logical or physical relationships with other CIs\n4. CMDB records that are no longer actively updated, but remain stored in the database\n5. Fields that support the accuracy, completeness, and usability of CI records in the CMDB\n6. Actual values of specified fields are compared to the expected values defined in a template",
    "options": [],
    "correct": [
      "Duplicate → CMDB records that represent the same physical or logical asset multiple times",
      "Required → Fields necessary to create or update a CI record in the CMDB",
      "Orphan → CMDB records that no longer maintain their logical or physical relationships with other CIs",
      "Stale → CMDB records that are no longer actively updated, but remain stored in the database",
      "Recommended → Fields that support the accuracy, completeness, and usability of CI records in the CMDB",
      "Audit → Actual values of specified fields are compared to the expected values defined in a template"
    ],
    "explanation": "Duplicate records represent the same asset multiple times. Required fields are necessary to create/update a CI. Orphan records no longer maintain relationships. Stale records are no longer actively updated. Recommended fields support accuracy/completeness/usability. Audit compares actual values to template values.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 206,
    "question": "Using CI Class Manager, the Tomcat identification rule has the following criterion attributes configured: Class, Install Directory. Which identifier entry configuration option must be checked to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule?",
    "options": [
      "Independent",
      "Criterion attributes",
      "Allow fallback to parent's rules",
      "Applies to"
    ],
    "correct": [
      "Allow fallback to parent's rules"
    ],
    "explanation": "\"Allow fallback to parent's rules\" is the option that must be checked to allow the system to attempt a match using the Application identification rule if no match is found using the Tomcat identification rule. Since Tomcat is a child class of Application in the CI class hierarchy, checking this option tells the engine \"if this rule fails to match, fall back to the parent class (Application) identification rule and try matching there.\" What the other options mean: Independent — treats this identifier entry as standalone; it does not rely on or chain to other rules; the rule should succeed or fail on its own. Applies to — defines which class or subset of records this identifier entry applies to (scopes the rule's target). Criterion attributes — defines the specific attributes used to match a CI (e.g. Class, Install Directory — the actual matching logic/fields). Since Tomcat is a child of Application in the hierarchy, checking \"Allow fallback to parent's rules\" is the correct mechanism to ensure that if the Tomcat-specific criteria (Class + Install Directory) fail to find a match, the system will automatically attempt identification using the Application-level rule as a fallback.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 207,
    "question": "Which default user groups are available when setting up a CMDB Data Manager policy and specifying the task assignment with the Assignment type set to 'User Group Field'? (Choose two.)",
    "options": [
      "Assignment group",
      "Support group",
      "Owned by group",
      "Managed by group"
    ],
    "correct": [
      "Support group",
      "Managed by group"
    ],
    "explanation": "The default user groups available are Managed By Group and Support Group. Key details: Assignment type: User Group Field. What it does: assigns policy tasks to the user group in the field specified in Task Assignment. Available fields: the drop-down lists for Task Assignment contain \"Managed By Group\" and \"Support Group\". Purpose: Managed By Group is used for CI lifecycle management; Support Group is used for incident/task management. These two fields are the native group reference fields available in CMDB Data Manager policy task assignment when using the User Group Field option.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 208,
    "question": "A CMDB Administrator wants to use the CMDB and CSDM Data Foundations Dashboard. Where can the Administrator obtain the dashboard?",
    "options": [
      "It is a free application on the ServiceNow Innovation Lab.",
      "It is a free application on the ServiceNow Store.",
      "It is active by default.",
      "It is a paid application on the ServiceNow Store."
    ],
    "correct": [
      "It is a free application on the ServiceNow Store."
    ],
    "explanation": "A CMDB Administrator can obtain the CMDB and CSDM Data Foundations Dashboard from the ServiceNow Store (also called the ServiceNow App Store). Key details: What to download — CMDB and CSDM Data Foundations Dashboards store app or plugin. How to install — go to System Definition > Plugins (or the Store), then search for and install it. Alternative access — it can also be found under Plugins in the ServiceNow instance. Minimum version — Version 4.1 or later. Once installed, it can be accessed by navigating to All > Configuration > CSDM Data Foundations Dashboard, or via CMDB Workspace > Management > Optimize section > CSDM Data Foundations Dashboard. The dashboard provides key CMDB and CSDM indicators with remediation playbooks to improve data quality.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 209,
    "question": "Using existing baseline Data Manager policies, what condition must a CI meet before it can be archived or deleted?",
    "options": [
      "Be marked as critical",
      "Be fully operational and in use",
      "Be retired and in end of life",
      "Be marked as inactive"
    ],
    "correct": [
      "Be retired and in end of life"
    ],
    "explanation": "Based on the baseline Data Manager policies in ServiceNow CMDB, a CI must be retired and in end of life before it can be archived or deleted. Key details about the baseline policies: Dependent CI Archival — archives downstream child CIs of a retired CI. Dependent CI Deletion — deletes dependent CIs that are orphaned. Dependent CI Retire — retires downstream child CIs of a CI that has been retired. These three out-of-the-box (OOB) policies only apply to downstream child CIs of a CI that has been retired. Important note: you don't need to modify these policies — they activate and run automatically after enabling the system property for Dependent CI Management. So the correct condition is: Be retired and in end of life.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 210,
    "question": "DRAG DROP - An Enterprise Architect needs to help the CMDB owner understand the benefits of CSDM. Drag the CSDM domains to the respective use cases.\n\n**Items:** Design and Planning / Foundation / Service Consumption / Service Delivery\n\n**Use cases:**\n1. Understand CIs related to business application and related capabilities to identify redundancies, monitor costs and make better investment decisions around roadmap\n2. Understand technical services, technical service offerings, service support and all relationships to underlying technology CIs\n3. Understand business services and ownership, cost, scope of what is offered to the business/consumer and request access to the services\n4. Use the base system tables when implementing the CSDM to derive the highest value from ServiceNow products and the Now Platform",
    "options": [],
    "correct": [
      "Design and Planning → Understand CIs related to business application and related capabilities to identify redundancies, monitor costs and make better investment decisions around roadmap",
      "Service Delivery → Understand technical services, technical service offerings, service support and all relationships to underlying technology CIs",
      "Service Consumption → Understand business services and ownership, cost, scope of what is offered to the business/consumer and request access to the services",
      "Foundation → Use the base system tables when implementing the CSDM to derive the highest value from ServiceNow products and the Now Platform"
    ],
    "explanation": "Design and Planning covers business application/capability analysis for redundancies and investment decisions. Service Delivery covers technical services and their relationships to underlying technology CIs. Service Consumption covers business services as offered to and consumed by the business. Foundation covers the base system tables underpinning CSDM implementation.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 211,
    "question": "DRAG DROP - Drag and drop the product to its description.\n\n**Items:** Agent Client Collector (ACC) / ServiceNow Discovery / Service Graph Connectors / Service Mapping\n\n**Descriptions:**\n1. Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information\n2. Facilitate integration between ServiceNow and external systems to import and synchronize data\n3. Complete topology of the services and shows how they are supported by underlying infrastructure and applications\n4. Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information",
    "options": [],
    "correct": [
      "ServiceNow Discovery → Automatically identifies devices and applications in the network, populating the CMDB with accurate and up-to-date information",
      "Service Graph Connectors → Facilitate integration between ServiceNow and external systems to import and synchronize data",
      "Service Mapping → Complete topology of the services and shows how they are supported by underlying infrastructure and applications",
      "Agent Client Collector (ACC) → Provides real-time visibility into endpoint configurations, populating the CMDB with accurate and up-to-date information"
    ],
    "explanation": "ServiceNow Discovery automatically identifies devices and applications in the network. Service Graph Connectors facilitate integration with external systems. Service Mapping provides complete service topology. Agent Client Collector (ACC) provides real-time endpoint visibility.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 212,
    "question": "A Configuration Management Process Owner needs to configure Data Manager for policy tasks to be correctly assigned and aligned with the group attribute assigned to a class in CI Class Manager. Which is the recommended field to use for a policy task assignment?",
    "options": [
      "Managed by group",
      "Approval group",
      "Support group",
      "Change group"
    ],
    "correct": [
      "Managed by group"
    ],
    "explanation": "The recommended field to use for a policy task assignment in Data Manager is the User Group Field (also referred to as User group field), specifically populated with Managed by group. Key details: When to use — a reference field exists on the target table (also referred to as the reference field). What it does — assigns policy tasks to the user group stored in the selected reference field. Alignment with CI Class Manager — maps to the Managed By Group field in CI Class Manager, which automatically assigns the group responsible for a specific class. Legacy vs. new version — the newer CMDB Workspace version (released November 2023) provides more flexibility, including the User Group Field option. The User Group Field allows you to select the specific user field for use for determining task assignment, ensuring tasks are correctly aligned with the group attribute assigned to a class in CI Class Manager. This is particularly important when the \"Managed By Group\" field is populated for records in a table, as Data Manager will create tasks for published policies only when this field is correctly configured.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 213,
    "question": "A CMDB Configuration Manager sets up the following data filter for a certification policy using CMDB Data Manager. Table: Server [cmdb_ci_server]. Filter: Operating System | contains | Server OR Operating System | contains | Linux. Which operating systems are affected by this policy? (Choose two.)",
    "options": [
      "Windows Server 2022 Datacenter",
      "AIX",
      "Linux CentOS",
      "Windows 2019 Datacenter"
    ],
    "correct": [
      "Windows Server 2022 Datacenter",
      "Linux CentOS"
    ],
    "explanation": "This policy affects all server records where the Operating System field contains the word \"Server\" or \"Linux\" (e.g. Windows Server, Red Hat Enterprise Linux, SUSE Linux). Because of the OR condition, any record matching either criteria will be included in the CMDB certification policy. Windows Server 2022 Datacenter contains the literal string \"Server\", so it matches. Linux CentOS contains \"Linux\", so it matches. Windows 2019 Datacenter does not contain the literal string \"Server\" or \"Linux\" in its OS name, so it does not match. AIX does not contain either keyword, so it does not match. Affected OS examples: Linux distributions — any OS string containing \"Linux\" (Ubuntu Linux, Red Hat Enterprise Linux, CentOS, Debian). Windows Server editions — any OS string containing \"Server\" (Windows Server 2019, Windows Server 2022). Other server/Unix OS whose string doesn't contain either word (Oracle Enterprise Server minus \"Server\" wording variants, SunOS, AIX) are excluded.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 214,
    "question": "A CSDM Data Manager needs metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Which tab in the CSDM Data Foundation Dashboard provides this information?",
    "options": [
      "Run",
      "Walk",
      "Crawl",
      "Fly"
    ],
    "correct": [
      "Walk"
    ],
    "explanation": "The Walk tab in the CSDM Data Foundation Dashboard provides metrics on the alignment of Technology Management Services (Technical Services) and Technology Management Offerings (Technical Service Offerings) with best practices. Key details: CSDM Stage — Walk is an intermediate stage of CSDM maturity. Primary Focus — identifying and populating network infrastructure CIs and applications that technical teams support. Specific Metrics — technical service offerings and their parent technical services; missing references to parent support group (indicates downtime remedy risk). Former Names — Technology Management Services (formerly \"Technical Services\"), Technology Management Offerings (formerly \"Technical Service Offerings\"). The Walk tab specifically focuses on technical service offerings and their parent technical services, making it the correct tab for this metric.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 215,
    "question": "A CMDB Administrator is tasked to create a query using the CMDB Query Builder that displays all operational Configuration Items (CIs) belonging to a specific application service. Which steps provide the desired outcome?",
    "options": [
      "1. Add the Business Application, Application Service, and Configuration Item classes to the canvas. 2. Define a filter for the application service name and operational status of the configuration items. 3. Configure the relationship between the classes. 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status of the configuration items. 4. Run the query.",
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Add the Operational Status and Name fields as columns. 4. Run the query."
    ],
    "correct": [
      "1. Add the Application Service and Configuration Item classes to the canvas. 2. Configure the relationship between the classes. 3. Define a filter for the application service name and the operational status of the configuration items. 4. Run the query."
    ],
    "explanation": "To build a query in the CMDB Query Builder that displays all operational Configuration Items (CIs) belonging to a specific application service, the correct steps are: 1. Add classes to canvas — locate the Application Service class and the base Configuration Item (or specific child class) in the CMDB Classes palette on the left panel; drag and drop both classes onto the visual query builder canvas. 2. Configure class relationships — connect the two nodes on the canvas to define how they relate; draw a relationship connection stretching from the Application Service node down to the Configuration Item node to capture its infrastructure dependencies. 3. Apply node filters — click on the Application Service node and apply an attribute filter where Name matches your specific service; click on the Configuration Item node and add an attribute filter specifying Operational Status = Operational. 4. Execute and review — click the Run button at the top toolbar to process the query; the builder will display the corresponding grid results listing exactly live, operational infrastructure components that support that specific service map. The precise sequential flow required to configure this query topology is to add the Application Service and Configuration Item classes to the canvas, connect their relationship, filter by the specific service name and operational status, and then execute the query.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 216,
    "question": "An IT group has a requirement to upgrade all the Windows servers. There is a Dynamic CI Group containing all the Windows servers. What happens to the Dynamic CI Group when it is referenced from the Configuration Item field on a Change form?",
    "options": [
      "It displays all related CIs in the Affected CIs related list.",
      "It calculates impact against the Dynamic CI Group.",
      "It displays all related CIs in the Impacted Services related list."
    ],
    "correct": [
      "It displays all related CIs in the Affected CIs related list."
    ],
    "explanation": "When a Dynamic CI Group is referenced from the Configuration Item field on a Change form, its member CIs are automatically unpacked and displayed in the Affected CIs related list. Key details about this behavior: Unpacking — all individual CIs in the group (e.g. all Windows servers) are extracted and shown. Flexibility — the change can span across the CIs listed in the Affected CIs list that are not impacted by the change. Impact Calculation — the system calculates derived impact based on the finalized list of affected CIs. Visibility — provides visibility to all CIs in the group, allowing management of the change for all CIs together. This is particularly useful for scenarios like upgrading all Windows servers, where you want to manage the change for the entire group while retaining flexibility to exclude specific servers if needed. The correct answer to your question is: It displays all related CIs in the Affected CIs related list.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 217,
    "question": "A Service Owner needs to view related items, such as Active Incidents and Planned Changes, directly on the home node of the Unified Map. Which work area would allow the Service Owner to meet this goal?",
    "options": [
      "Map",
      "Tool box",
      "Content controls",
      "Contextual side panel"
    ],
    "correct": [
      "Contextual side panel"
    ],
    "explanation": "The Contextual side panel is the part of the Unified Map where related item categories appear for the selected CI, including things like active incidents and active problems. ServiceNow's docs say the Related Items panel is shown in the side panel, and administrators can configure which categories appear there. So in this question, the correct work area is Contextual side panel.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 218,
    "question": "A CMDB Administrator notices that CIs do not have a support group. How can the support group be automatically populated and maintained on the CI record?",
    "options": [
      "Technology Management Service Offering (Technical Service Offering)",
      "Technology Management Service (Technical Service)",
      "CI Class Manager",
      "Dynamic CI group"
    ],
    "correct": [
      "Technology Management Service Offering (Technical Service Offering)"
    ],
    "explanation": "Automatically populate and maintain the support group values on Configuration Item (CI) records by configuring default values via CI Class Manager, utilizing Technical Service Offerings, or establishing automated Data Foundations policies. Synchronize groups by class (CI Class Manager) — you can set a default Support Group for an entire CI class (e.g. all Linux Servers or Databases) so newly created or discovered CIs in that class automatically receive it; navigate to the ServiceNow CMDB Class Manager, select the specific class, and navigate to the Group settings (Managed by Group/Support Group overrides); you can establish a default assignment group for the class, and the platform will automatically synchronize it with existing records in that class. Leverage Technical Service Offerings & Dynamic CI Groups — for an organizational structure aligned with the Common Service Data Model (CSDM), support group information can flow directly from the service offering to the underlying CIs; create a Dynamic CI Group and link it to a Technical Service Offering; by doing this, the support, change, and managed-by groups defined on the Service Offering record automatically populate and maintain parity with all child CIs tied to that offering. Update via Discovery Schedules — if you use discovery to populate your CMDB, you can automate Support Group assignment during the initial payload processing. Data Refresh / Business Rules (Custom Approach) — default groups vary based on attributes like Location or Department; you can build custom automation.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 219,
    "question": "A CMDB Architect intends to build a CMDB using CSDM guidance. Which CMDB tables will the architect use to build the CSDM Sell/Consume domain?",
    "options": [
      "Business Service Offering, Business Service",
      "Business Capability, Information Object, Business Application",
      "Application Service, Technology Management Service (Technical Service), Technology Management Offering (Technical Service Offering)"
    ],
    "correct": [
      "Business Service Offering, Business Service"
    ],
    "explanation": "The CMDB tables used to build the CSDM Sell/Consume domain are Business Service Offering (`sc_cat_item_subscribe`) and Business Service (`cmdb_ci_business_service`). These two tables represent the customer-facing services that the business consumes. Key details: Sell/Consume domain represents \"what users get\" — the business services and offerings consumed by technology reports. Business Service Offering is a specific package/version of a service. Business Service Portfolio is also mentioned in the Sell/Consume domain but is not a CMDB CI table — it provides hierarchy for service-related objects.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 220,
    "question": "A hospital has received a new CT Scanner. The inventory management team has created a catalog item doctors can use to schedule patients for scans. What CSDM domain should the inventory management team map the catalog item to?",
    "options": [
      "Build and Integration (Build)",
      "Service Delivery (Manage Technical Service)",
      "Design and Planning (Design)",
      "Foundation",
      "Service Consumption (Sell/Consume)"
    ],
    "correct": [
      "Service Consumption (Sell/Consume)"
    ],
    "explanation": "The catalog item should be mapped to the Service Consumption (Sell/Consume) domain. Why this domain: this domain represents \"what users get\" — the business services and offerings consumed by the organization. The Service Catalog primarily manages business services in the Sell/Consume domain. Catalog item focus: doctors using the catalog item to schedule patients for CT scans is a business service consumption scenario — the business (hospital) consuming what technology provides. CT Scanner context: the CT Scanner is an asset/equipment, but the catalog item for scheduling is the service being sold/consumed by doctors. The other CSDM domains serve different purposes: Design and Planning (Design) — business capabilities and applications; Build and Integration (Build) — application development and integration; Service Delivery (Manage Technical Service) — technical services from an operational perspective; Foundation — core data elements. Since doctors are consuming a scheduling service, Sell/Consume is the correct mapping.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 221,
    "question": "A customer wants to model their business applications and would like to capture different types of data that includes Personally Identifiable Information (PII) data. Based on these requirements, which CMDB class needs to be leveraged to achieve this?",
    "options": [
      "Data Classification",
      "API Component",
      "Business Capability",
      "Information Object"
    ],
    "correct": [
      "Information Object"
    ],
    "explanation": "The CMDB class that needs to be leveraged is Information Object (also called `cmdb_ci_information_object`). Key facts confirming this is the correct class: Model business applications — Information Objects live on the object hierarchy and relate to Business Applications by way of applicable relationships. Capture different data types — used to track any type of data/information used by applications. PII data classification — you can specify a Data Domain attribute (for PCI, PHI, PII) on the Information Object. Data classification — contains a built-in Data Classification field for confidentiality levels. Information Objects logically describe the types of information interchanged between and used by Business Applications, allowing you to identify which Business Applications possess PII, PCI, PHI, employee data, or customer data for compliance and audit activities.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 222,
    "question": "A Configuration Manager wants to manage manually maintained data attributes of CIs. Which group values are automatically synchronized on CIs using Technology Management Offerings (Technical Service Offerings) and dynamic CI groups? (Choose two.)",
    "options": [
      "Approval group",
      "CMDB group",
      "Change group",
      "Support group"
    ],
    "correct": [
      "Change group",
      "Support group"
    ],
    "explanation": "This question is about what gets auto-populated via Technology Management Offerings (Technical Service Offerings) and dynamic CI groups. Automatic attribute synchronization sources: From Technology Management Offerings (Technical Service Offerings) — when a CI is associated with a Technical Service Offering, the following group/team-related attributes are pushed automatically: Support group — the team responsible for handling incidents and requests for CIs under this offering; Managed by (management team) — the group accountable for the CIs' lifecycle; Service owner — the individual or role defined at the offering level; Maintenance schedule — inherited from the offering's maintenance windows; Change policy — governs what change processes apply to associated CIs; Service classification — the service context tied to the offering. From Dynamic CI Groups — dynamic groups use rule-based membership criteria (e.g. all Linux servers in Production); these attributes are automatically applied or enforced: Environment (e.g. Production, Test, Development); Location (data center, site, region); Operational status; Business criticality; Category/subcategory. What this means for the Configuration Manager: since the attributes above are auto-synced, a Configuration Manager should avoid manually editing them on individual CIs — changes would be overwritten on the next synchronization. Their manual effort should focus on attributes that are not governed by either source, such as serial numbers, custom description fields, relationships to other CIs, and any organization-specific attributes not covered by the offering or group rules. This separation ensures consistency across all CIs belonging to the same offering or dynamic group, while still leaving room for CI-specific data that requires manual input.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 223,
    "question": "A company wants to track regulatory compliance. ServiceNow has an artifact type called an Information object as part of the CSDM framework. What is the purpose of an Information object?",
    "options": [
      "It describes data exchanged between an API interface and an Application.",
      "It describes data in general on a group of Configuration Items.",
      "It describes the logical data to the Business Applications."
    ],
    "correct": [
      "It describes the logical data to the Business Applications."
    ],
    "explanation": "The purpose of a ServiceNow Information object (in the CSDM framework) is to logically describe the type of data that is exchanged between an application and a database. Key details about information objects: What it is — a Configuration Item that displays information in an organized form. Primary function — captures the logical data for a business application. Mapping — after creation, information objects are mapped to applications so that they can be created, read, updated, or deleted. CRUD control — for a given application, they determine if data can be created, read, updated, or deleted. Compliance use — enables risk/compliance teams to define the right level of controls for data security. For regulatory compliance tracking, information objects help organizations discover which applications process sensitive data (like PII, PCI, or personal data), classify data elements using information object categories to align with regulatory requirements, and track granular data operations (read vs. create/update/delete) for each application. This is part of ServiceNow's Application Portfolio Management and Information Portfolio Management capability.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 224,
    "question": "The CMDB Administrator has been tasked to establish Configuration Management with a functional CMDB. Which factor is most critical for successfully operationalizing the CMDB in ServiceNow?",
    "options": [
      "Relying on automated discovery tools to maintain and update CMDB records",
      "Allowing IT teams to modify CMDB records as needed to promote flexibility in data management",
      "Populating the CMDB with as much data as possible to ensure a comprehensive inventory of CIs",
      "Establishing clear governance and continuously monitoring CMDB health"
    ],
    "correct": [
      "Establishing clear governance and continuously monitoring CMDB health"
    ],
    "explanation": "The most critical factor for successfully operationalizing the CMDB in ServiceNow is automating data ingestion (specifically using ServiceNow Discovery) to ensure accurate, current data without manual overhead. Why automation is the key factor: Accuracy — manual approach is hard to ensure; data quickly becomes outdated. Automated approach (Discovery) is real-time as IT environment changes. Scale — manually impossible for cloud/virtualized resources; automated approach automatically finds servers, applications, network infrastructure. Maintenance — data decays fast without ownership vs. self-sustaining with continuous update. Rate of Change — cannot track rapid infiltration/deletion of virtual resources manually; automation handles hybrid on-premises/data centers automatically. Supporting critical elements: while automation is primary, successful operationalization also requires clear scope (start with high-value services, not everything), strong governance (assign CI class owners and schedule audits), and CMDB Health monitoring (track completeness, correctness, and compliance). ServiceNow's official guidance emphasizes that \"while you can manually add data to your CMDB, it's very hard to ensure accuracy and manually keep your CMDB up to date as your IT environment changes.\" Therefore, automating CMDB population through Discovery is the foundational requirement for operational success.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 225,
    "question": "A Configuration Manager needs to restrict the number of classes available in a Configuration Item reference field on an Incident form. How does the Manager set Principal Classes?",
    "options": [
      "By using the Principal Class check box on the CI Class Manager's 'Basic Info' tab for a Class",
      "By using the Principal Class check box on the CI Class Manager's 'Attributes' tab for a Class",
      "By using the Principal Class attribute on the CI",
      "By using the Principal Class check box on the CMDB Workspace"
    ],
    "correct": [
      "By using the Principal Class check box on the CI Class Manager's 'Basic Info' tab for a Class"
    ],
    "explanation": "To set Principal Classes, the Configuration Manager should navigate to the CI Class Manager in their platform, open the desired class, and select the Principal Class (or Principal CI) check box on the Basic Info tab. Key considerations: Forms Affected — setting Principal Classes restricts the Configuration Item (CI) reference fields on operational forms like Incident, Problem, and Change. Subclasses — the designation does not automatically apply to child subclasses; the manager must individually check the box for any subclasses they want to include. Default Behavior — by default, no classes are designated as principal. The moment at least one class is marked, the filter restricts the field view to only display CIs from designated principal classes.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 226,
    "question": "A CMDB Administrator utilizing the CMDB Data Foundations Dashboard sees an issue and wants to run a playbook. Which types of documentation can they expect to be provided in a playbook? (Choose two.)",
    "options": [
      "Root Cause",
      "Problem Overview",
      "Automated Remediations",
      "Problem Analysis"
    ],
    "correct": [
      "Problem Overview",
      "Problem Analysis"
    ],
    "explanation": "The two best options are Problem Analysis and Problem Overview. Playbooks are described as remediation guides that help identify the issue, explain the impact, and then guide the fix, rather than providing automated remediation. So for a CMDB Administrator running a playbook from the CMDB Data Foundations Dashboard, expect documentation focused on what the problem is and how to analyze it.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 227,
    "question": "A Business Relationship Manager in an organization wants to implement Service Portfolio Management (SPM) and to present offerings to business consumers. Which CSDM Domain does this align with?",
    "options": [
      "Design and Planning (Design)",
      "Service Consumption (Sell/Consume)",
      "Build and Integration (Build)",
      "Service Delivery"
    ],
    "correct": [
      "Service Consumption (Sell/Consume)"
    ],
    "explanation": "This aligns with the Service Consumption domain (also called Sell/Consume) in the CSDM framework. Key facts confirming this alignment: Typical user role — Business Relationship Manager. Primary function — implement Service Portfolio Management (SPM) and present offerings to business consumers. What it does — identifies internal/external business services and links business service offerings to deployed digital products. CSDM domain name — Service Consumption (Sell/Consume). The Service Consumption domain is specifically designed for roles like Business Relationship Managers who manage service portfolios and present business service offerings to consumers, distinguishing it from other CSDM domains like Design and Planning (Design), Build and Integration (Build), or Service Delivery (Manage Technical).",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 228,
    "question": "A CMDB Administrator wants to leverage the Staleness metric from the CMDB Health Dashboard – Correctness Scorecard. What is the default duration of this metric?",
    "options": [
      "24 days",
      "7 days",
      "60 days",
      "30 days"
    ],
    "correct": [
      "60 days"
    ],
    "explanation": "The default duration of the Staleness metric from the CMDB Health Dashboard – Correctness Scorecard is 60 days. Key details about the metric: Default Effective Duration — 60 days. Definition — percentage of Configuration Items (CIs) not updated within the Effective Duration of the staleness rule. Overridable — yes, can be overridden per CI class. Base Rule Class — Configuration Item (`cmdb_ci` class). A CI is considered stale if it was not updated by the data source (e.g. daily server scans) within the 60-day period. This lowers the Correctness score, as stale data may represent assets that no longer exist or haven't been scanned recently. For service environments with frequent scans (e.g. daily-server scans), best practice is to align staleness rules with scan frequency — such as 7 days — rather than sticking with the 60-day default.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 229,
    "question": "A CMDB Architect intends to populate the CMDB using the CSDM guidance. Which key stakeholders from the organization should be involved in decisions regarding population of the CMDB using the CSDM Crawl Stage?",
    "options": [
      "Business Service Manager, Technology Service Owner",
      "Application Owner, Application Service Owner",
      "Customer Service Manager, Infrastructure Manager"
    ],
    "correct": [
      "Application Owner, Application Service Owner"
    ],
    "explanation": "The key stakeholders for the CSDM Crawl Stage of CMDB population are application owners and configuration/application managers. Key details about Crawl Stage stakeholders: Application Owners — provide ownership and accountability for Business Applications; perform Business Impact Analysis (BIA) to score service criticality. Configuration Managers — manage configuration items (CI) and ensure data quality for the factual data mapping. Application Service Owners — responsible for Application Service quality and operations. Why these stakeholders: the Crawl Stage involves mapping factual data (Configuration Items) to lay the foundation of your CMDB. During this phase, you focus on critical infrastructure like load balancers, application servers, database servers, and key network equipment. Application Owners determine business criticality of Application Services through Business Impact Analysis. You work with Application Owners and groups responsible for supporting services to identify the right data. Service owners and technology consumers are added as stakeholders in later stages (Walk/Run), not during Crawl.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 230,
    "question": "ServiceNow Event Management significantly benefits from a well-maintained and properly populated CMDB. What are key advantages it provides to Event Management? (Choose two.)",
    "options": [
      "Mapped services provide visibility to users consuming the service",
      "Correlation of alerts to knowledge base articles",
      "Mapped services provide visibility to the business impact of an alert",
      "Binding of alerts to specific CIs"
    ],
    "correct": [
      "Mapped services provide visibility to the business impact of an alert",
      "Binding of alerts to specific CIs"
    ],
    "explanation": "Based on ServiceNow documentation and best practices, the two key advantages that a well-maintained CMDB provides to Event Management are: Binding of alerts to specific CIs — alerts from monitoring tools correlate to existing Configuration Items (CIs) in the CMDB, which enriches events with supporting data beyond source-system context. Mapped services provide visibility to the business impact of an alert — discovered services (defined by interrelated CIs from through Service Mapping) allow an impact trace showing outage severity, providing real-time visibility into business impact.",
    "multi": true,
    "dragdrop": false
  },
  {
    "id": 231,
    "question": "A retail organization needs to ensure that incidents affecting customer-facing services are resolved quickly to reduce potential revenue loss. Which CSDM attribute is used to prioritize these services?",
    "options": [
      "Business Criticality in the Service Offering",
      "Assignment Group on the CI record",
      "Service classification in the Technical Service",
      "Affected CIs in the Incident record"
    ],
    "correct": [
      "Business Criticality in the Service Offering"
    ],
    "explanation": "The CSDM attribute used to prioritize customer-facing services is Business (specifically, the criticality or business impact attribute of the Business Service). In ServiceNow's Common Service Data Model (CSDM), Business Services represent the services that customers actually consume and that drive business value. When incidents affect these services, organizations prioritize them based on their business criticality — indicating how essential the service is to revenue generation, customer satisfaction, or operational continuity. Key distinction: Business Service — represents customer-facing services that generate revenue. Criticality/Business Impact — the specific attribute within Business Service used to prioritize response based on revenue potential. Application Service — technical services supporting Business Services (lower priority). For a retail organization, customer-facing services (like online ordering or payment processing) should be marked as high criticality Business Services, ensuring incidents affecting them get P1/P2 priority to minimize revenue loss.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 232,
    "question": "A CMDB Administrator has taken over management of a ServiceNow instance and has determined there are multiple deficiencies in the CMDB. During review of the CMDB Data Foundations Dashboard, the Administrator sees that ServiceNow offers Remediation Playbooks. How can Playbooks assist the Administrator in resolving these issues?",
    "options": [
      "Playbooks can be installed in the instance to automatically fix issues.",
      "Playbooks can automatically track common CMDB issues and output metrics.",
      "Playbooks can help analyze and fix issues."
    ],
    "correct": [
      "Playbooks can help analyze and fix issues."
    ],
    "explanation": "Playbooks assist the CMDB Administrator by providing step-by-step guided actions to identify, analyze, and remediate specific CMDB data quality issues, ultimately improving the accuracy, consistency, and usability of Configuration Items (CIs). Key benefits of Remediation Playbooks: Guided Actions — provide targeted, recommended actions for each data quality issue found in the CMDB Data Foundations Dashboard. Issue Identification — help identify specific problems like CIs with invalid/unpopulated names, missing location, missing \"managed by\" groups, stale records, and duplicates. Root Cause Analysis — show upstream and downstream impacts derived from CIs, explaining what will happen if not remediated. Remediation Steps — include concrete instructions on how to fix each issue and improve dashboard results. Data Quality Improvement — through guided actions, enhance CI accuracy, consistency, and trustworthiness in the CMDB. Specific issues playbooks address: CIs with invalid or unpopulated names — correct principal class CIs lacking valid names; CIs missing location — assign location data for incident routing and asset tracking; CIs missing \"managed by\" group — assign ownership for routing incidents to correct teams; Stale CIs — remove or update CIs not updated/discovered recently; Duplicate CIs — remove or merge duplicate records to prevent split incident history. The Administrator can access these playbooks by selecting a segment or count on a chart in the CMDB Data Foundations Dashboard, which opens the Remediation actions panel with relevant suggestions.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 233,
    "question": "During a CMDB implementation, a team member is tasked with ensuring the accuracy and completeness of CI data. This person is also responsible for maintaining data quality and resolving discrepancies. Which role is responsible for these tasks?",
    "options": [
      "CMDB Architect",
      "Service Owner",
      "Configuration Manager",
      "IT Asset Manager"
    ],
    "correct": [
      "Configuration Manager"
    ],
    "explanation": "Based on ServiceNow's official documentation and community resources, the role responsible for ensuring the accuracy and completeness of CI (Configuration Item) data, maintaining data quality, and resolving discrepancies during a CMDB implementation is the CMDB Lead (also referred to as CMDB Process Lead). A CMDB Lead is the Configuration Management Database Process Lead who administers, manages, and carries out all aspects of the CMDB process within an organization, ensuring that data yielded from this process is of high quality and providing management with the right level of business intelligence and reporting. Key responsibilities of the CMDB Lead: Data accuracy — ensure data yielded from the CMDB process is of high quality. Process administration — administer, manage, and carry out all aspects of the CMDB process. Data completeness — ensure data quality and provide management with the right level of business intelligence. Discrepancy resolution — work closely with other process leads to ensure data quality and consistently followed processes. The CMDB Lead will also ensure data yielded from this process will be of high quality and provide management with the right level of business intelligence and reporting. Note: there are related roles like CMDB Developer (implements technical solutions for CMDB health) and CMDB Admin (monitors health dashboard results and checks why CIs were not compliant), but the overarching responsibility for data accuracy and quality belongs to the CMDB Lead.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 234,
    "question": "A Service Portfolio Manager wants to know what Application Services their Business Service Offering depend on. What stage of CSDM would map this relationship?",
    "options": [
      "Foundation",
      "Run",
      "Walk",
      "Fly",
      "Crawl"
    ],
    "correct": [
      "Run"
    ],
    "explanation": "The relationship between Business Service Offerings and the Application Services they depend on is mapped in the Run phase of the Common Service Data Model (CSDM). The stage of CSDM (Common Service Data Model) that maps the relationship between Business Service Offerings and their Application Services is the Service Portfolio Management stage (also referred to as the Service Layer or Service Portfolio layer of CSDM). More specifically, this mapping occurs within the \"Business Service Offering to Application Service\" relationship defined in the CSDM framework. According to ServiceNow's CSDM guidelines, you map Business Service Offering to Application Services using the \"Set Relationships\" wizard on the Application Service record, moving the Business Service Offering from \"Available\" to \"Selected\". The Application Services layer represents the logical deployment stack of infrastructure CIs, while the Business Service Offering layer represents what the end customer consumes. The relationship between them clarifies which Application Services support each Business Service Offering. This is critical for Service Portfolio Managers because it enables to trace how technology dependencies underpin business service offerings, supporting incident impact analysis, change management, and service health tracking.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 235,
    "question": "The Change Management team in an organization wants to implement a Change across multiple CIs at the same time. Which field on the Change Request form needs to be populated with a dynamic CI group?",
    "options": [
      "Service Offering",
      "Configuration Item",
      "Business Service"
    ],
    "correct": [
      "Configuration Item"
    ],
    "explanation": "The field that needs to be populated with a dynamic CI group is the Configuration Item field on the Change Request form. Key details: What happens — when a dynamic CI group is selected in the Configuration Item field, its member CIs are automatically unpacked and displayed in the Affected CIs related list. Example — selecting \"CO-Sydney Win Servers Dynamic CI Group\" in the Configuration Item field populates all CIs in that group under the Affected CIs tab. Business Rule — the \"Sync Affected Dynamic CI Group\" business rule handles this unpacking automatically for changes, problems, and incidents. This is a standard ServiceNow feature for implementing changes across multiple Configuration Items (CIs) simultaneously.",
    "multi": false,
    "dragdrop": false
  },
  {
    "id": 236,
    "question": "DRAG DROP - A Platform Owner is building the governance team to support the CSDM. Drag the domain to the roles that make up the governance team.\n\n**Items:** Design Domain / Foundation Domain / Portfolio Domain / Technical Domain\n\n**Roles:**\n1. Service Owner(s), Platform Owner\n2. Technology Service Owner(s), Application Service Owner(s), Platform Owner\n3. Enterprise Architect(s), Platform Owner\n4. Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner",
    "options": [],
    "correct": [
      "Portfolio Domain → Service Owner(s), Platform Owner",
      "Technical Domain → Technology Service Owner(s), Application Service Owner(s), Platform Owner",
      "Design Domain → Enterprise Architect(s), Platform Owner",
      "Foundation Domain → Enterprise Architect(s), Data Steward(s), Process Owner(s), Platform Owner"
    ],
    "explanation": "Portfolio Domain governance includes Service Owner(s) and Platform Owner. Technical Domain includes Technology Service Owner(s), Application Service Owner(s), and Platform Owner. Design Domain includes Enterprise Architect(s) and Platform Owner. Foundation Domain includes Enterprise Architect(s), Data Steward(s), Process Owner(s), and Platform Owner.",
    "multi": true,
    "dragdrop": true,
    "distractors": []
  },
  {
    "id": 237,
    "question": "A CMDB Administrator is asked to clean up the CMDB duplicates. What is the preferred way to manage this task?",
    "options": [
      "A. The de-duplication task module",
      "B. The de-duplication dashboard on the CMDB workspace",
      "C. My tasks in the application navigator"
    ],
    "correct": [
      "B. The de-duplication dashboard on the CMDB workspace"
    ],
    "explanation": "This is the preferred, modern landing page for a CMDB Administrator to manage data integrity. The CMDB Workspace serves as the central hub for health metrics, and its dedicated De-duplication Dashboard lets administrators track, prioritize, and systematically launch the Duplicate CI Remediator wizard to resolve duplicate records in bulk.",
    "multi": false,
    "dragdrop": false
  }
];
