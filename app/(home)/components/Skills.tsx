import React from "react";
import Title from "./Title";
import { Cards } from "./Cards";

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills"
        className="flex items-center flex-col justify-center -rotate-6"
      />
      <Cards />
    </div>
  );
};

export default Skills;
