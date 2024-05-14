import { Button } from "@/components/ui/moving-border";
import Link from "next/link";
import React from "react";
import Title from "./Title";
import { FaShoppingBag } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between animate-move-up min-h-[60vh] flex-col-reverse gap-10 lg:gap-0 lg:flex-row">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you 👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            {"I'm a Shubham Rawat "}
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          {
            "I'm a Skilled Frontend Developer with 2.5 years of experience in building modern web applications."
          }
        </p>
        <Link
          href={"mailto:shubhamrawatbox@gmail.com"}
          className="inline-block group"
        >
          <Title text="Contact Me" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
          <div className="glow absolute top-[40%] right-[50%]"></div>
        </div>
        <div className="absolute bottom-5 sm:bottom-16 left-0 sm:-left-10">
          <Link
            href={
              "https://drive.google.com/file/d/1ZEuYRvpe0MaGlAszzj9q5WqfNbq0JXkZ/view?usp=sharing"
            }
            target="_blank"
            download
          >
            <Button
              borderRadius="0.5rem"
              className="p-3 font-semibold"
            >
              <p className="ml-2">{" 📄 View & Download CV"}</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
