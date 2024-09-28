export const salesList = [
  {
    sales_id: "SP001",
    created_at: "2024-09-06",
    account_owner: "Richard",
    insured_name: "PT Whitesky Aviation",
    insurance_type: "Aviation Aircraft",
    progress: "100",
    estimated_income: "100000000",
    business_unit: "aviation",
  },
  {
    sales_id: "SP002",
    created_at: "2024-08-05",
    account_owner: "Bilbo",
    insured_name: "PT Blacksky Aviation",
    insurance_type: "Aviation Aircraft",
    progress: "80",
    estimated_income: "50000000",
    business_unit: "aviation",
  },
  {
    sales_id: "SP003",
    created_at: "2024-09-01",
    account_owner: "John Doe",
    insured_name: "PT Wijaya Karya",
    insurance_type: "CECR",
    progress: "0",
    estimated_income: "80000000",
    business_unit: "construction",
  },
  {
    sales_id: "SP004",
    created_at: "2024-05-01",
    account_owner: "Raygun",
    insured_name: "PT Poseidon ",
    insurance_type: "Health Insurance",
    progress: "20",
    estimated_income: "2000000",
    business_unit: "eb",
  },
  {
    sales_id: "SP005",
    created_at: "2024-06-08",
    account_owner: "Raygun",
    insured_name: "PT Asuransi Jiwa",
    insurance_type: "Motor Vehicle",
    progress: "50",
    estimated_income: "11500000",
    business_unit: "others",
  },
];

export const accountOwnerDummy = [
  {
    label: "Richard",
    value: "US001",
  },
  {
    label: "Raygun",
    value: "US002",
  },
  {
    label: "John Doe",
    value: "US003",
  },
  {
    label: "Bilbo",
    value: "US004",
  },
];

export const businessUnitData = [
  {
    label: "Aviation",
    value: "aviation",
  },
  {
    label: "Construction",
    value: "construction",
  },
  {
    label: "Employee Benefit",
    value: "EB",
  },
  {
    label: "Others",
    value: "others",
  },
];

export const accountTypeData = [
  {
    label: "New",
    value: "new",
  },
  {
    label: "Renewal",
    value: "renewal",
  },
];

export const newAccountStatusData = [
  {
    label: "New Account",
    value: "new",
  },
  {
    label: "Affiliated with Existing Account",
    value: "affiliated",
  },
];

export const renewalAccountStatusData = [
  {
    label: "Affiliated with Existing Account",
    value: "affiliated",
  },
  {
    label: "Existing Account",
    value: "exisiting",
  },
];

export const formStatusData = [
  {
    label: "New",
    value: "new",
  },
  {
    label: "Existing",
    value: "existing",
  },
];

export const sourceTypeData = [
  {
    label: "Insured",
    value: "insured",
  },
  {
    label: "Insurer",
    value: "insurer",
  },
  {
    label: "Business Partner",
    value: "business_partner",
  },
];

export const sourceDummy = [
  {
    label: "Richard",
    value: "SC001",
  },
  {
    label: "Raygun",
    value: "SC002",
  },
  {
    label: "John Doe",
    value: "SC003",
  },
  {
    label: "Bilbo",
    value: "SC004",
  },
  {
    label: "Bilbo",
    value: "SC005",
  },
  {
    label: "Bilbo",
    value: "SC006",
  },
  {
    label: "Bilbo",
    value: "SC007",
  },
];

export const companyDummy = [
  {
    label: "PT. Wijaya Karya (Persero)",
    value: "CP001",
  },
  {
    label: "PT. Wijaya Karya Beton Tbk.",
    value: "CP002",
  },
  {
    label: "PT. Whitesky Aviation",
    value: "CP003",
  },
  {
    label: "PT. Whitesky Aviation",
    value: "CP003",
  },
  {
    label: "PT. Whitesky Aviation",
    value: "CP003",
  },
  {
    label: "PT. Whitesky Aviation",
    value: "CP003",
  },
  {
    label: "PT. Whitesky Aviation",
    value: "CP003",
  },
];

export const insuredTypeData = [
  {
    label: "Holding",
    value: "holding",
  },
  {
    label: "Subsidiary",
    value: "subsidiary",
  },
  {
    label: "Standalone",
    value: "standalone",
  },
];

export const picDummy = [
  {
    label: "Richard",
    value: "PC001",
  },
  {
    label: "Raygun",
    value: "PC002",
  },
  {
    label: "John Doe",
    value: "PC003",
  },
  {
    label: "Bilbo",
    value: "PC004",
  },
  {
    label: "Bilbo",
    value: "PC005",
  },
  {
    label: "Bilbo",
    value: "PC006",
  },
  {
    label: "Bilbo",
    value: "PC007",
  },
];

export const currencyData = [
  {
    label: "IDR",
    value: "idr",
  },
  {
    label: "USD",
    value: "usd",
  },

  {
    label: "EUR",
    value: "eur",
  },
];

export const salesDetailProgress = [
  {
    progress: "0",
    label: "Contact",
    requirements: "Call Made/Meeting up/Introduction to client",
  },
  {
    progress: "5",
    label: "Prospect Review",
    requirements:
      "Prospect Judged as a legitimate revenue opportunity for the next 12 months",
  },
  {
    progress: "10",
    label: "Productive Meeting",
    requirements:
      "Have had a productive meeting with the prospect/ Decision Maker",
  },
  {
    progress: "20",
    label: "Bid Invitation",
    requirements: "Invitation to include us in Bid",
  },
  {
    progress: "40",
    label: "Proposal Submission",
    requirements: "Written Proposal Submitted",
  },
  {
    progress: "60",
    label: "Still in Mix",
    requirements:
      "Deal Status Still in Mix (e.g. shortlisted or oral presentation)",
  },
  {
    progress: "80",
    label: "Broker of Record",
    requirements: "Broker of Record /Letter of Appointment issued to us",
  },
  {
    progress: "100",
    id:"100",
    label: "Close Deal",
    requirements: "Close Deal With Client",
  },
  {
    progress: "100",
    id:"endorsement",
    label: "Endorsement",
    requirements: "Received final endorsement",
  },
];

export const salesDetailDummy = {
  accountInfo: {
    created_at: "01 Jan 2024",
    created_by: "US001",
    sales_status: "pending", //win, lost , pending(default)
    progress: "10",
    account_owner: "John Doe",
    business_unit: "Aviation",
    insurance_type: "Aviation Aircraft",
    account_type: "New",
    account_status: "Affiliated with Existing Account",
    existing_account: "PT. Blacksky Aviation",
  },
  sourceInfo: {
    source_id: "SC001",
    type: "Business Partner",
    name: "Janet Smith",
    email: "Janetsmith@gmail.com",
    mobile: "+62 812897329773",
    agreement_no: "008/LIB-BP/1-2023",
  },
  insuredInfo: {
    insured_id: "IN001",
    company_id: "CP001",
    name: "PT. Whitesky Aviation",
    address:
      "Secure Building, Tower A, 1st Floor, Jl. Raya Protokol Halim Perdanakusuma, RT.5/RW.10, Halim Perdana Kusumah, Kec. Makasar, Kota Jakarta Timur, Daerah Khusus Ibukota Jakarta 13610",
    phone: "0218092365",
  },
  picInfo: {
    pic_id: "PC001",
    name: "Richard Smith",
    email: "Richardsmith@gmail.com",
    mobile: "+62 812897329773",
  },
  salesEst: {
    inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
    premium_currency: "IDR",
    premium_amount: "100000000",
    brokerage_currency: "IDR",
    brokerage_amount: "15000000",
    consultation_currency: "IDR",
    consultation_amount: "2000000",
    source_currency: "IDR",
    source_amount: "5000000",
    endorsement_currency: "IDR",
    endorsement_amount: "70000000",
  },
};

export const selectLostSalesStatus = [
  {
    label: "Lost",
    value: "lost",
  },
];

export const positionData = [
  {
    label: "Head",
    value: "head",
  },
  {
    label: "Staff",
    value: "staff",
  },
];

export const reportDummy = [
  {
    sales_id: "SP001",
    created_at: "2024-09-06",
    account_owner: "Richard",
    insured_name: "PT Whitesky Aviation",
    insurance_type: "Aviation Aircraft",
    progress: "100",
    estimated_income: "100000000",
    business_unit: "aviation",
    //addition
    source: "Dyandra",
    inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
    //est
    premium_currency: "IDR",
    premium_amount: "100000000",
    brokerage_currency: "IDR",
    brokerage_amount: "15000000",
    consultation_currency: "IDR",
    consultation_amount: "2000000",
    income_currency: "IDR",
    income_amount: "5000000",
    //progress header
    update_diff: "10",
    input_diff: "20",
    requirement: "Scan Placing Slip Signed by Insurer and QS to Client",
    uploaded: "Quotation Slip",
    //
    account_type: "new",
  },
  {
    sales_id: "SP002",
    created_at: "2024-08-05",
    account_owner: "Bilbo",
    insured_name: "PT Blacksky Aviation",
    insurance_type: "Aviation Aircraft",
    progress: "80",
    estimated_income: "50000000",
    business_unit: "aviation",
    //addition
    source: "Dyandra",
    inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
    //est
    premium_currency: "IDR",
    premium_amount: "100000000",
    brokerage_currency: "IDR",
    brokerage_amount: "15000000",
    consultation_currency: "IDR",
    consultation_amount: "2000000",
    income_currency: "IDR",
    income_amount: "5000000",
    //progress header
    update_diff: "10",
    input_diff: "20",
    requirement: "Scan Placing Slip Signed by Insurer and QS to Client",
    uploaded: "Quotation Slip",
    //
    account_type: "new",
  },
  {
    sales_id: "SP003",
    created_at: "2024-09-01",
    account_owner: "John Doe",
    insured_name: "PT Wijaya Karya",
    insurance_type: "CECR",
    progress: "0",
    estimated_income: "80000000",
    business_unit: "construction",
    //addition
    source: "Dyandra",
    inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
    //est
    premium_currency: "IDR",
    premium_amount: "100000000",
    brokerage_currency: "IDR",
    brokerage_amount: "15000000",
    consultation_currency: "IDR",
    consultation_amount: "2000000",
    income_currency: "IDR",
    income_amount: "5000000",
    //progress header
    update_diff: "10",
    input_diff: "20",
    requirement: "Scan Placing Slip Signed by Insurer and QS to Client",
    uploaded: "Quotation Slip",
    //
    account_type: "new",
  },
  {
    sales_id: "SP004",
    created_at: "2024-05-01",
    account_owner: "Raygun",
    insured_name: "PT Poseidon ",
    insurance_type: "Health Insurance",
    progress: "20",
    estimated_income: "2000000",
    business_unit: "eb",
    //addition
    source: "Dyandra",
    inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
    //est
    premium_currency: "IDR",
    premium_amount: "100000000",
    brokerage_currency: "IDR",
    brokerage_amount: "15000000",
    consultation_currency: "IDR",
    consultation_amount: "2000000",
    income_currency: "IDR",
    income_amount: "5000000",
    //progress header
    update_diff: "10",
    input_diff: "20",
    requirement: "Scan Placing Slip Signed by Insurer and QS to Client",
    uploaded: "Quotation Slip",
    //
    account_type: "new",
  },
  {
    sales_id: "SP005",
    created_at: "2024-06-08",
    account_owner: "Raygun",
    insured_name: "PT Asuransi Jiwa",
    insurance_type: "Motor Vehicle",
    progress: "50",
    estimated_income: "11500000",
    business_unit: "others",
    //addition
    source: "Dyandra",
    inception_date: "10 Jan 2024", //if existing then select source and autofill source_id
    //est
    premium_currency: "IDR",
    premium_amount: "100000000",
    brokerage_currency: "IDR",
    brokerage_amount: "15000000",
    consultation_currency: "IDR",
    consultation_amount: "2000000",
    income_currency: "IDR",
    income_amount: "5000000",
    //progress header
    update_diff: "10",
    input_diff: "20",
    requirement: "Scan Placing Slip Signed by Insurer and QS to Client",
    uploaded: "Quotation Slip",
    //
    account_type: "new",
  },
];

export const rateDummy = [
  {
    year: "2024",
    jan: {
      usd: "15000",
      eur: "16000",
    },
    feb : {
      usd : "16000",
      eur: "16000"
    },
    mar : {
      usd : "14000",
      eur: "13000"
    },
    apr : {
      usd : "15000",
      eur: "18000"
    },
    may : {
      usd : "0",
      eur: "0"
    },
    jun : {
      usd : "0",
      eur: "0"
    },
    jul : {
      usd : "0",
      eur: "0"
    },
    aug : {
      usd : "0",
      eur: "0"
    },
    sep : {
      usd : "0",
      eur: "0"
    },
    oct : {
      usd : "0",
      eur: "0"
    },
    nov : {
      usd : "0",
      eur: "0"
    },
    dec : {
      usd : "0",
      eur: "0"
    },
  },
  {
    year: "2025",
    jan: {
      usd: "13000",
      eur: "14000",
    },
    feb : {
      usd : "17000",
      eur: "17000"
    },
    mar : {
      usd : "18000",
      eur: "15000"
    },
    apr : {
      usd : "16000",
      eur: "15000"
    },
    may : {
      usd : "10000",
      eur: "11000"
    },
    jun : {
      usd : "0",
      eur: "0"
    },
    jul : {
      usd : "0",
      eur: "0"
    },
    aug : {
      usd : "0",
      eur: "0"
    },
    sep : {
      usd : "0",
      eur: "0"
    },
    oct : {
      usd : "0",
      eur: "0"
    },
    nov : {
      usd : "0",
      eur: "0"
    },
    dec : {
      usd : "0",
      eur: "0"
    },
  },
];
