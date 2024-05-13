import React from "react";
import Title from "./Title";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const AboutMe = () => {
  const words = `My Proficient in ReactJS, HTML, CSS, TypeScript, and Next.js. Possesses expertise in designing and developing responsive and interactive user interfaces. Demonstrated ability to translate design mockups into pixel-perfect web pages. Experienced in optimizing application performance and ensuring cross-browser compatibility. Excels in collaborating with cross-functional teams to deliver high-quality software solutions.
    `;
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="About Me"
        className="flex items-center flex-col justify-center -rotate-6"
      />
      {/* <p className="w-full mt-10 text-center text-lg text-gray-300"> */}
        <TextGenerateEffect words={words} />
      {/* </p> */}
    </div>
  );
};

export default AboutMe;
