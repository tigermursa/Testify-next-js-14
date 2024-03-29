import React from "react";
import VideoPage from "./HeroVideo";
import { Edu_QLD_Beginner } from "next/font/google";
const edu = Edu_QLD_Beginner({
  weight: "700",
  subsets: ["latin"],
  display: "swap",
});
const HeroPage = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col md:flex-row ">
        <div className=" w-[50%] h-[550px] ">
          <VideoPage />
        </div>
        <div
          className={`0 w-[50%] flex flex-col items-center justify-center ${edu.className}`}
        >
          <h1 className={`text-5xl font-bold mb-4  `}>
            Practice All Features of Next js
          </h1>
          <h2 className="text-4xl font-bold mb-4">Lead a Error free life 😇</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
