export type ServiceItem = {
  slug: string;
  label: string;
  tag: string;
  title: string;
  summary: string;
  image: string;
  features: string[];
  steps: string[];
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
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Accurate bookkeeping and transaction recording",
      "General ledger and financial record maintenance",
      "Bank and account reconciliations",
      "Management reporting and cash flow insight",
      "Financial control support and decision-ready reporting",
      "Reliable support for business growth and compliance",
    ],
    steps: [
      "Understand your reporting needs",
      "Capture and review financial records",
      "Maintain accurate books and reconciliations",
      "Prepare management insights and reports",
      "Review performance and advise next steps",
      "Provide ongoing support and continuity",
    ],
    related: [
      "tax-consultancy",
      "payroll-management",
      "financial-statement-preparation",
      "business-management-consultancy",
    ],
  },
  {
    slug: "tax-consultancy",
    label: "Tax Consultancy",
    tag: "Tax Consultancy",
    title: "Tax Consultancy",
    summary:
      "Effective tax management is about more than meeting filing requirements. We provide practical tax consultancy services to help businesses understand their tax obligations, manage tax risks, improve tax efficiency, and remain compliant with applicable regulations.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Tax planning and advisory support",
      "VAT, SVAT and income tax compliance guidance",
      "Tax risk review and optimization",
      "Preparation and filing support",
      "Practical recommendations for better tax management",
      "Clear advice for confident compliance",
    ],
    steps: [
      "Assess tax obligations and risk areas",
      "Review records and compliance requirements",
      "Develop the right tax strategy",
      "Prepare and validate filings",
      "Support ongoing compliance decisions",
      "Provide practical advisory guidance",
    ],
    related: [
      "accounting-bookkeeping",
      "company-secretarial",
      "financial-statement-preparation",
      "internal-audit-compliance",
    ],
  },
  {
    slug: "company-secretarial",
    label: "Secretarial Services",
    tag: "Secretarial Services",
    title: "Secretarial Services",
    summary:
      "Good corporate governance begins with timely and accurate statutory compliance. We provide professional company secretarial services to help businesses meet their statutory obligations, maintain proper corporate records, and manage corporate changes efficiently.",
    image:
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
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
    steps: [
      "Review compliance requirements",
      "Gather corporate records and documents",
      "Prepare and file statutory submissions",
      "Support board and shareholder actions",
      "Maintain registers and governance records",
      "Provide ongoing secretarial assistance",
    ],
    related: [
      "tax-consultancy",
      "accounting-bookkeeping",
      "vat-svat-income-tax-compliance",
      "internal-audit",
    ],
  },
  {
    slug: "vat-svat-income-tax-compliance",
    label: "VAT, SVAT & Income Tax Compliance",
    tag: "Tax Compliance",
    title: "VAT, SVAT & Income Tax Compliance",
    summary:
      "We help businesses manage their tax obligations accurately and efficiently while maintaining compliance with Sri Lankan tax regulations. Our services cover VAT, SVAT and income tax compliance, helping clients reduce the risk of penalties, errors and missed filing deadlines.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "VAT and SVAT registration and compliance support",
      "Preparation and submission of tax returns",
      "Income tax computation and filing",
      "Tax payment and deadline monitoring",
      "Review of tax records and supporting documentation",
      "Support for tax-related queries and correspondence",
    ],
    steps: [
      "Understand your business activities and obligations",
      "Review tax records and supporting documentation",
      "Prepare VAT, SVAT and income tax returns",
      "Submit filings within applicable deadlines",
      "Monitor obligations and provide ongoing support",
    ],
    related: [
      "tax-consultancy",
      "accounting-bookkeeping",
      "financial-statement-preparation",
      "business-management-consultancy",
    ],
  },
  {
    slug: "payroll-management",
    label: "Payroll Services",
    tag: "Payroll Services",
    title: "Payroll Services",
    summary:
      "At HSB, we provide accurate, confidential, and efficient payroll solutions tailored to businesses of all sizes. Our payroll services help organizations streamline payroll administration, ensure compliance with statutory requirements, and allow management to focus on their core operations.",
    image:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Monthly payroll preparation and processing",
      "Salary, allowances, deductions and overtime calculations",
      "EPF, ETF and statutory contribution support",
      "Payroll tax and statutory compliance assistance",
      "Payslips, payroll reports and reconciliations",
      "Confidential and timely payroll reporting",
    ],
    steps: [
      "Collect payroll information and schedules",
      "Calculate earnings, deductions and statutory contributions",
      "Validate payroll accuracy and compliance",
      "Prepare reports and payslips",
      "Support payment and reconciliation process",
      "Deliver ongoing payroll support",
    ],
    related: [
      "accounting-bookkeeping",
      "business-management-consultancy",
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
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Preparation of financial statements and schedules",
      "Support for account reconciliations and reporting",
      "Compliance with accounting standards and regulations",
      "Clear, decision-ready reporting for stakeholders",
      "Management reporting and financial insight",
      "Reliable support for better business decisions",
    ],
    steps: [
      "Review the accounting records and data set",
      "Check transactions and supporting schedules",
      "Prepare financial statements and reconciliations",
      "Validate accuracy and compliance requirements",
      "Review with management and finalise reporting",
      "Deliver reporting support for ongoing use",
    ],
    related: [
      "accounting-bookkeeping",
      "tax-consultancy",
      "business-management-consultancy",
      "internal-audit-compliance",
    ],
  },
  {
    slug: "internal-audit",
    label: "Internal Audit",
    tag: "Internal Audit",
    title: "Internal Audit",
    summary:
      "Our internal audit services provide businesses with an independent assessment of their internal controls, financial processes and operational practices. We help identify weaknesses, reduce risks and strengthen the systems that support effective business management.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Review of internal control systems",
      "Assessment of financial and operational processes",
      "Risk identification and evaluation",
      "Detection of control weaknesses and potential irregularities",
      "Review of policies and procedures",
      "Recommendations for process improvements",
    ],
    steps: [
      "Understand the business structure and control environment",
      "Assess financial and operational processes",
      "Test relevant transactions, records and controls",
      "Report key findings and areas requiring attention",
      "Support management with improvement actions",
    ],
    related: [
      "business-management-consultancy",
      "tax-consultancy",
      "company-secretarial",
      "accounting-bookkeeping",
    ],
  },
];

export const SERVICE_NAV_ITEMS = SERVICE_CATALOG.map((service) => ({
  label: service.label,
  href: `/services/${service.slug}`,
}));
