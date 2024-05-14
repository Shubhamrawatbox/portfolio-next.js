import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import React from "react";
import Image from "next/image";
import Title from "./Title";

const content = [
  {
    title: "Software Developer",
    companyName:"I2pify (June 2023 - April 2024)",
    description:
      "Worked on the development of a browser-based application using React and TypeScript, contributing to a 20% increase in user engagement.Enhanced application performance through optimization of REST API calls, leading to a 15% improvement in page speed. Collaborated effectively with cross-functional teams to ensure the timely delivery of project milestones as a Software Developer at I2pify",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        I2PIFY
      </div>
    ),
  },
  {
    title: "Frontend Developer",
    companyName:"Turning Cloud Solution  ( July 2022 - June 2023)",
    description:
      " My primary responsibility is to develop and maintain the frontend components of the SupplyMint application using ReactJS. This involves translating UI/UX designs into high-quality code, ensuring responsiveness, and optimizing the user experience.  Write unit tests and perform thorough testing of frontend components to ensure reliability, stability, and compatibility across different browsers and devices. Debug and troubleshoot issues reported by users or detected during testing phases.",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       TURNING CLOUD SOLUTION (SUPPLYMINT)
      </div>
    ),
  },
  {
    title: "Frontend Developer Intern",
    companyName:"Esports4G  (January 2022 - July 2022)",
    description:
      " Developed and maintained several React-based web applications using Redux for state management and Axios for HTTP requests. Collaborated with cross-functional teams to design and implement UI features that improved the user experience and increased engagement. Participated in code reviews and contributed to improving the overall quality and maintainability of the codebase.",
    content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       ESPORTS4G.COM
      </div>
    ),
  },
];

const Experience = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      {" "}
      <Title
        text="Experience"
        className="flex items-center flex-col justify-center -rotate-6"
      />{" "}
      <StickyScroll content={content} />
    </div>
  );
};

export default Experience;
