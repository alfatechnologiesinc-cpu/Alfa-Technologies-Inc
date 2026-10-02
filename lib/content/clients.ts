export type ClientCategory =
  | "Government"
  | "NGO"
  | "Pharma"
  | "Hospitality"
  | "Construction"
  | "Real Estate"
  | "Logistics"
  | "Manufacturing"
  | "Professional Services"
  | "Retail";

export type Client = {
  name: string;
  category: ClientCategory;
  featured?: boolean;
};

export const clientCategories: ClientCategory[] = [
  "Government",
  "NGO",
  "Pharma",
  "Hospitality",
  "Construction",
  "Real Estate",
  "Logistics",
  "Manufacturing",
  "Professional Services",
  "Retail",
];

export const clients: Client[] = [
  { name: "WSC, Ministry of Textiles", category: "Government", featured: true },
  { name: "Action Aid Association", category: "NGO", featured: true },
  { name: "Himalay Meditek", category: "Pharma" },
  { name: "Trifed", category: "Government", featured: true },
  { name: "Aga Khan Foundation", category: "NGO", featured: true },
  { name: "Macro Hospitality Services", category: "Hospitality" },
  { name: "Irrigation Department", category: "Government" },
  { name: "Ashrith Hotels Pvt Ltd", category: "Hospitality" },
  { name: "Naseer Investments", category: "Real Estate" },
  { name: "DH Architecture Studio Pvt Ltd", category: "Construction" },
  { name: "Associated Road Carriers", category: "Logistics" },
  { name: "Origin Pharmaids", category: "Pharma" },
  { name: "Abhay Associates", category: "Professional Services" },
  { name: "Delhi Assam Road Carriers Limited", category: "Logistics" },
  { name: "Rockiera Engineering Pvt Ltd", category: "Construction" },
  { name: "BPR Infrastructures Pvt Ltd", category: "Construction" },
  { name: "BZone Engineering & Constructions Pvt Ltd", category: "Construction" },
  { name: "Sahasra Extraction & Trading Company", category: "Manufacturing" },
  { name: "Bekem Infra Projects Pvt Ltd", category: "Construction" },
  { name: "Contech Design & Engineering Pvt Ltd", category: "Construction" },
  { name: "SEG Technologies Pvt Ltd", category: "Manufacturing" },
  { name: "Fabex Steel Structures Pvt Ltd", category: "Manufacturing" },
  { name: "CRK Reality Projects Pvt Ltd", category: "Real Estate" },
  { name: "Surat Goods & Transport", category: "Logistics" },
  { name: "AB Constructions Pvt Ltd", category: "Construction" },
  { name: "Automotive Designs & Solutions (SEZ)", category: "Manufacturing" },
  { name: "Wholesale Bazaar.com", category: "Retail" },
  { name: "Archies Infra Developers", category: "Construction" },
  { name: "Genious Constructions", category: "Construction" },
  { name: "VG Rao Associates", category: "Professional Services" },
  { name: "Agrimore Solutions Pvt Ltd", category: "Manufacturing" },
  { name: "GKRS Properties", category: "Real Estate" },
  { name: "COVA", category: "Real Estate" },
  { name: "FDC Ltd", category: "Pharma", featured: true },
  { name: "VRX Lens Pvt Ltd", category: "Pharma" },
  { name: "Ramesh & Co", category: "Professional Services" },
  { name: "Trisha Polymers Pvt Ltd", category: "Manufacturing" },
  { name: "Global Steel Structures Pvt Ltd", category: "Manufacturing" },
];
