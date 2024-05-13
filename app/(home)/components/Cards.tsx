"use client"
import { HoverEffect } from "../../../components/ui/card-hover-effect";
import { SiReact } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiGit } from "react-icons/si";




export const projects = [
  {
    text: "REACT",
    Icon:SiReact
  },
  {
    text: "NEXT.JS",
    Icon:RiNextjsFill
  },
  {
    text: "TYPESCRIPT",
    Icon:SiTypescript
  },
  {
    text: "JAVASCRIPT",
    Icon:SiJavascript
  },
  {
    text: "CSS",
    Icon:SiCss3
  },
  {
    text: "NODE.JS",
    Icon:FaNodeJs
  },
  {
    text: "MONGODB",
    Icon:SiMongodb
  },
  {
    text: "SQL",
    Icon:BiLogoPostgresql
  },
  {
    text: "GIT",
    Icon:SiGit
  },
];

export function Cards() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

