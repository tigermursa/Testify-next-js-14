import React from "react";
import heroImage from "@/assets/hero-image.jpg";
import Image from "next/image";
import VideoPage from "./HeroVideo";

const HeroPage = () => {
  return (
    <div className="mt-12">
      <div className="flex">
        <div className=" w-[50%] h-[550px] ">
          <VideoPage />
        </div>
        <div className="0 w-[50%] flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold mb-4">
            Practice All Features of Next js
          </h1>
          <h2 className="text-4xl font-bold mb-4">Lead a Error free life 😇</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
