import { company } from "@/lib/content/company";

export type Leader = {
  name: string;
  title: string;
  photo: string;
  bio: string[];
};

export const leadership: Leader[] = [
  {
    name: company.contactPerson,
    title: company.ownerTitle,
    photo: "/images/jayanth-kunde.jpg",
    bio: [
      "Jayanth Kunde founded Alfa Technologies in 1994, right after completing his Computer Science Engineering degree. With a strong technical foundation and an entrepreneurial vision, he built the company from the ground up and has continued to lead its growth for over three decades.",
      "As Proprietor, Jayanth remains closely involved in the company's operations, customer relationships, and strategic direction. His experience, technical expertise, and commitment to the business have been instrumental in establishing Alfa Technologies as a trusted technology partner.",
    ],
  },
  {
    name: "Abhishek Kunde",
    title: "Marketing Director",
    photo: "/images/abhishek-kunde.jpg",
    bio: [
      "Abhishek Kunde is the Marketing Director at Alfa Technologies, responsible for the company's marketing strategy, brand development, and client relationships.",
      "With previous experience as a Network Manager at Tata Communications, he brings a strong technical background and enterprise technology expertise to his role. His combination of technical knowledge and business-focused thinking helps Alfa Technologies deliver effective technology solutions while building long-term customer relationships.",
    ],
  },
];
