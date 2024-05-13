import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import React from "react";
import { SiReact } from "react-icons/si";
import Title from "./Title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiSass } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";







const Project = () => {
  const projects = [
    {
      title: "I2pify",
      tech: [SiReact,SiCss3,SiTailwindcss,SiRedux,SiTypescript],
      background: "bg-green-500",
      cover: "/i2pify.png",
      link: "https://www.i2pify.ai/",
    },
    {
      title: "Estimify",
      tech: [SiReact,SiMui,SiTailwindcss,SiJavascript,SiTypescript],
      background: "bg-indigo-500",
      cover: "/estimify.png",
      link: "https://estimify.i2pify.ai/",
    },
    {
      title: "Supplymint",
      tech: [SiReact,SiSass,SiBootstrap,SiJavascript],
      background: "bg-pink-500",
      cover: "/supplymint.png",
      link: "https://www.supplymint.com/",
    },
    {
      title: "Country Details",
      tech: [SiReact,SiTypescript,SiTailwindcss,SiCss3,SiRedux],
      background: "bg-blue-500",
      cover: "/country.png",
      link: "https://country-assignment.firebaseapp.com/",
    },
  ];
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Projects"
        className="flex items-center flex-col justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5">
      {projects?.map((project, index) => {
        return (
          <Link href={project.link} key={index}>
            <div className={cn('p-5 rounded-md',project.background)}>
              <DirectionAwareHover imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">
                <div className="space-y-4">
                <h1 className="text-2xl font-bold">{project.title}</h1>
                </div>
                <div className="flex mt-2">
                    {
                        project.tech?.map((icon,index)=>{
                            const Icon=icon
                            return(
                                <Icon key={index} className="w-8 h-8 mx-1"/>
                            )
                        })
                    }
                </div>
              </DirectionAwareHover>
            </div>
          </Link>
        );
      })}
      </div>
    </div>
  );
};

export default Project;
