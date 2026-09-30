import accountingImage from "@/assets/img/Accounting n Book keeping image.png";
import financialStatementImage from "@/assets/img/Financial Statement Preparation image.png";
import internalAuditImage from "@/assets/img/Internal Audit Image.png";
import managementConsultancyImage from "@/assets/img/Management Consultancy image.png";
import payrollImage from "@/assets/img/Payroll Image.png";
import secretarialImage from "@/assets/img/Secretary Image1.png";
import taxImage from "@/assets/img/Tax Image.png";

export type ServiceItem = {
  slug: string;
  label: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  features: string[];
  featureDescriptions: string[];
  steps: string[];
  stepDescriptions: string[];
  related: string[];
};

export const SERVICE_CATALOG: ServiceItem[] = [
  {
    slug: "accounting-bookkeeping",
    label: "Accounting & Bookkeeping Services",
    tag: "Accounting & Bookkeeping",
    title: "Accounting & Bookkeeping Services",
    summary:
      "Accurate and timely financial information is fundamental to the success of every business. We provide professional accounting and bookkeeping services designed to ensure that your financial records are accurate, up to date, and maintained in accordance with applicable accounting requirements.",
    image: accountingImage,
    features: [
      "Accurate bookkeeping and transaction recording",
      "General ledger and financial record maintenance",
      "Bank and account reconciliations",
      "Management reporting and cash flow insight",
      "Financial control support and decision-ready reporting",
      "Reliable support for business growth and compliance",
    ],
    featureDescriptions: [
      "Record sales, purchases, receipts and expenses consistently, with each transaction classified to the right account.",
      "Keep the general ledger and supporting schedules current so account balances can be reviewed with confidence.",
      "Compare bank statements with ledger balances, investigate differences and clear unreconciled items.",
      "Turn financial activity into regular reports that show results, cash position and emerging trends.",
      "Review key balances and reporting procedures to improve accuracy and support informed decisions.",
      "Maintain dependable records and compliance support as the business grows and reporting needs change.",
    ],
    steps: [
      "Understand your reporting needs",
      "Capture and review financial records",
      "Maintain accurate books and reconciliations",
      "Prepare management insights and reports",
      "Review performance and advise next steps",
      "Provide ongoing support and continuity",
    ],
    stepDescriptions: [
      "Agree the reporting frequency, required outputs and account information management needs.",
      "Organise source documents and check transactions for completeness, accuracy and correct coding.",
      "Post reviewed transactions and reconcile bank, supplier, customer and other control accounts.",
      "Prepare management reports that explain financial results and highlight cash-flow movements.",
      "Discuss trends and variances, then identify practical actions based on the reported figures.",
      "Maintain the records and reporting cycle, adjusting support as the business requirements evolve.",
    ],
    related: [
      "tax-consultancy",
      "payroll-management",
      "financial-statement-preparation",
      "management-consultancy",
    ],
  },
  {
    slug: "tax-consultancy",
    label: "Tax Compliance, Tax Filing & Advisory",
    tag: "Tax Compliance, Tax Filing & Advisory",
    title: "Tax Compliance, Tax Filing & Advisory",
    summary:
      "Effective tax management is about more than meeting filing requirements. We provide practical tax compliance, tax filing and advisory services to help businesses understand their obligations, manage tax risks, improve tax efficiency and remain compliant with applicable regulations.",
    image: taxImage,
    features: [
      "Tax planning and advisory support",
      "Tax compliance guidance",
      "Tax risk review and optimisation",
      "Preparation and filing support",
      "Practical recommendations for better tax management",
      "Clear advice for confident compliance",
    ],
    featureDescriptions: [
      "Review business circumstances and identify lawful ways to plan for upcoming tax obligations.",
      "Clarify applicable filing duties, deadlines and documentation needed to meet current requirements.",
      "Identify exposure areas and opportunities to improve tax efficiency while following applicable rules.",
      "Compile required information, prepare returns and check figures before submission.",
      "Prioritise practical actions for record keeping, payment planning and recurring tax obligations.",
      "Explain tax positions and filing requirements in clear terms so decisions can be made with confidence.",
    ],
    steps: [
      "Assess tax obligations and risk areas",
      "Review records and compliance requirements",
      "Develop the right tax strategy",
      "Prepare and validate filings",
      "Support ongoing compliance decisions",
      "Provide practical advisory guidance",
    ],
    stepDescriptions: [
      "Identify the taxes that apply, upcoming deadlines and areas where the business may face exposure.",
      "Review financial records and supporting documents against the relevant filing and compliance rules.",
      "Set out a tax approach that reflects the business activity, obligations and available lawful options.",
      "Prepare returns from verified records, check calculations and coordinate submission requirements.",
      "Help management respond to tax questions and plan payments, filings and record updates.",
      "Provide focused advice when transactions, regulations or business circumstances change.",
    ],
    related: [
      "accounting-bookkeeping",
      "company-secretarial",
      "financial-statement-preparation",
      "internal-audit",
    ],
  },
  {
    slug: "company-secretarial",
    label: "Company Secretarial Services",
    tag: "Company Secretarial Services",
    title: "Company Secretarial Services",
    summary:
      "Good corporate governance begins with timely and accurate statutory compliance. We provide professional company secretarial services to help businesses meet their statutory obligations, maintain proper corporate records, and manage corporate changes efficiently.",
    image: secretarialImage,
    features: [
      "Corporate & Statutory Compliance",
      "Corporate Advisory & Support",
      "Company incorporation and registration support",
      "Annual return preparation and filing",
      "Maintenance of statutory registers and records",
      "Board and shareholder resolutions and meeting notes",
      "Share transfers, allotments and corporate changes",
      "Governance and regulatory compliance advisory",
    ],
    featureDescriptions: [
      "Track statutory obligations and deadlines so required company filings are completed on time.",
      "Advise on governance responsibilities, corporate procedures and the documentation needed for decisions.",
      "Coordinate incorporation requirements and prepare registration documents for submission.",
      "Compile annual return information, confirm company details and arrange the required filing.",
      "Keep statutory registers and company records organised and updated after corporate changes.",
      "Prepare clear minutes and resolutions to record board and shareholder decisions accurately.",
      "Document share transfers, allotments and other company changes, then update the relevant records.",
      "Provide guidance on governance practices and regulatory duties relevant to the company.",
    ],
    steps: [
      "Review compliance requirements",
      "Gather corporate records and documents",
      "Prepare and file statutory submissions",
      "Support board and shareholder actions",
      "Maintain registers and governance records",
      "Provide ongoing secretarial assistance",
    ],
    stepDescriptions: [
      "Confirm the company’s filing calendar, governance duties and requirements for planned changes.",
      "Collect incorporation documents, registers, resolutions and other records needed for the work.",
      "Prepare submissions, verify company details and coordinate filing with the relevant authority.",
      "Draft resolutions and meeting records to support properly documented corporate decisions.",
      "Update statutory registers and retain the supporting records for each completed action.",
      "Monitor upcoming deadlines and assist with future filings, governance actions and company changes.",
    ],
    related: [
      "tax-consultancy",
      "accounting-bookkeeping",
      "internal-audit",
    ],
  },
  {
    slug: "payroll-management",
    label: "Payroll Management Services",
    tag: "Payroll Services",
    title: "Payroll Management Services",
    summary:
      "At HSB, we provide accurate, confidential and efficient payroll solutions tailored to businesses of all sizes. Our payroll services help organisations streamline payroll administration, ensure compliance with statutory requirements and allow management to focus on their core operations.",
    image: payrollImage,
    features: [
      "Monthly payroll preparation and processing",
      "Salary, allowances, deductions and overtime calculations",
      "EPF, ETF and statutory contribution support",
      "Payroll tax and statutory compliance assistance",
      "Payslips, payroll reports and reconciliations",
      "Confidential and timely payroll reporting",
    ],
    featureDescriptions: [
      "Process each pay period from approved employee and attendance information using an agreed schedule.",
      "Apply salary terms, allowances, deductions and overtime rules consistently to each payroll run.",
      "Calculate applicable EPF, ETF and other statutory contributions and prepare supporting schedules.",
      "Check payroll tax and statutory requirements so calculations and submissions are properly supported.",
      "Prepare payslips and reconcile payroll totals against employee records and payment schedules.",
      "Restrict access to sensitive payroll data and deliver reports to authorised contacts on time.",
    ],
    steps: [
      "Collect payroll information and schedules",
      "Calculate earnings, deductions and statutory contributions",
      "Validate payroll accuracy and compliance",
      "Prepare reports and payslips",
      "Support payment and reconciliation process",
      "Deliver ongoing payroll support",
    ],
    stepDescriptions: [
      "Gather approved employee changes, attendance, leave, overtime and other period-specific inputs.",
      "Calculate gross pay, deductions and statutory contributions using the supplied employment details.",
      "Review calculations against prior periods and resolve missing or inconsistent information before approval.",
      "Generate payslips and payroll summaries for review, payment processing and record keeping.",
      "Compare payroll totals with payment records and prepare reconciliations for the period.",
      "Maintain secure payroll records and coordinate the next cycle’s inputs, deadlines and changes.",
    ],
    related: [
      "accounting-bookkeeping",
      "management-consultancy",
      "financial-statement-preparation",
      "tax-consultancy",
    ],
  },
  {
    slug: "financial-statement-preparation",
    label: "Financial Statement Preparation",
    tag: "Financial Reporting",
    title: "Financial Statement Preparation",
    summary:
      "We provide professional financial statement preparation services designed to deliver accurate, reliable, and timely financial information. We assist businesses in preparing financial statements in accordance with applicable accounting standards and regulatory requirements, enabling management and stakeholders to make informed decisions with confidence.",
    image: financialStatementImage,
    features: [
      "Preparation of financial statements and schedules",
      "Support for account reconciliations and reporting",
      "Compliance with accounting standards and regulations",
      "Clear, decision-ready reporting for stakeholders",
      "Management reporting and financial insight",
      "Reliable support for better business decisions",
    ],
    featureDescriptions: [
      "Compile the primary statements and supporting schedules from reviewed accounting records.",
      "Reconcile key balances and resolve differences that could affect the reported figures.",
      "Apply relevant reporting requirements consistently and document significant accounting treatments.",
      "Present results in a clear format that helps owners, management and stakeholders understand performance.",
      "Explain important movements and trends to give management useful context for its decisions.",
      "Provide dependable reporting information for planning, compliance and communication with stakeholders.",
    ],
    steps: [
      "Review the accounting records and data set",
      "Check transactions and supporting schedules",
      "Prepare financial statements and reconciliations",
      "Validate accuracy and compliance requirements",
      "Review with management and finalise reporting",
      "Deliver reporting support for ongoing use",
    ],
    stepDescriptions: [
      "Review the ledger, trial balance and available records to confirm the reporting period and scope.",
      "Check balances against bank statements, ledgers and supporting schedules, following up on variances.",
      "Prepare the statements and disclosures using the verified balances and applicable reporting basis.",
      "Check calculations, cross-references and presentation against the relevant accounting requirements.",
      "Discuss draft results with management, make agreed adjustments and finalise the reporting pack.",
      "Provide final statements and supporting schedules that can be used in future reporting cycles.",
    ],
    related: [
      "accounting-bookkeeping",
      "tax-consultancy",
      "management-consultancy",
      "internal-audit",
    ],
  },
  {
    slug: "internal-audit",
    label: "Internal Audit",
    tag: "Internal Audit",
    title: "Internal Audit",
    summary:
      "Our internal audit services provide businesses with an independent assessment of their internal controls, financial processes and operational practices. We help identify weaknesses, reduce risks and strengthen the systems that support effective business management.",
    image: internalAuditImage,
    features: [
      "Review of internal control systems",
      "Assessment of financial and operational processes",
      "Risk identification and evaluation",
      "Detection of control weaknesses and potential irregularities",
      "Review of policies and procedures",
      "Recommendations for process improvements",
    ],
    featureDescriptions: [
      "Examine control design and operation to assess whether key risks are being managed effectively.",
      "Trace selected financial and operational activities to identify delays, errors or control gaps.",
      "Evaluate risks by likelihood and impact so review effort focuses on significant exposures.",
      "Investigate unusual transactions and weak controls, documenting evidence and areas for follow-up.",
      "Compare day-to-day practices with approved policies and identify procedures that need clarification.",
      "Set out practical actions to address findings, assign ownership and strengthen ongoing monitoring.",
    ],
    steps: [
      "Understand the business structure and control environment",
      "Assess financial and operational processes",
      "Test relevant transactions, records and controls",
      "Report key findings and areas requiring attention",
      "Support management with improvement actions",
    ],
    stepDescriptions: [
      "Understand responsibilities, key systems and existing controls before defining the review scope.",
      "Map relevant workflows and identify where errors, losses or non-compliance could occur.",
      "Select transactions and controls, inspect supporting evidence and document test results.",
      "Share prioritised findings with evidence, implications and clear recommendations for management.",
      "Help owners plan corrective actions and track progress against agreed control improvements.",
    ],
    related: [
      "management-consultancy",
      "tax-consultancy",
      "company-secretarial",
      "accounting-bookkeeping",
    ],
  },
  {
    slug: "management-consultancy",
    label: "Management Consultancy",
    tag: "Management Consultancy",
    title: "Management Consultancy",
    summary:
      "Strategic business guidance helps leaders improve performance, solve operational challenges and plan confidently for the future. We support organisations with practical consulting advice that strengthens decision-making, operational efficiency and long-term growth.",
    image: managementConsultancyImage,
    features: [
      "Business strategy and organisational review",
      "Operational improvement and process optimisation",
      "Leadership and decision-support advisory",
      "Performance analysis and growth planning",
      "Risk-aware business recommendations",
      "Practical guidance for sustainable change",
    ],
    featureDescriptions: [
      "Review strategic priorities, roles and organisational arrangements against the business objectives.",
      "Identify process delays and inefficiencies, then prioritise changes that can improve how work is done.",
      "Provide structured analysis and options to help leaders make well-informed operational decisions.",
      "Use available performance information to set practical targets and plan sustainable business growth.",
      "Consider financial, operational and compliance risks when assessing proposed business actions.",
      "Turn recommendations into sequenced actions that teams can own, implement and review over time.",
    ],
    steps: [
      "Assess your business objectives and challenges",
      "Review operations, performance and strategic priorities",
      "Develop practical recommendations and action plans",
      "Support implementation and decision-making",
      "Monitor progress and refine next steps",
    ],
    stepDescriptions: [
      "Agree the outcomes sought, constraints and questions that the consultancy work needs to address.",
      "Review processes, performance information and priorities to understand current operating conditions.",
      "Develop recommendations with clear rationale, owners and practical steps for implementation.",
      "Work with decision-makers to resolve implementation issues and keep planned actions moving.",
      "Review results against agreed measures and refine the plan as circumstances and priorities change.",
    ],
    related: [
      "internal-audit",
      "tax-consultancy",
      "accounting-bookkeeping",
      "company-secretarial",
    ],
  },
];

export const SERVICE_NAV_ITEMS = SERVICE_CATALOG.map((service) => ({
  label: service.label,
  href: `/services/${service.slug}`,
}));
