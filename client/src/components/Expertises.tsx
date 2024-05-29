'use client';
import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { CiMobile3 } from "react-icons/ci";
import { ExpertiseProps } from "../lib/types";




const ExpertiseCard = ({ title, subtitle, icon, text }: ExpertiseProps) => {
  return (
    <article 
      className="p-4 bg-primary text-secondary border-2 border-accent shadow-lg backdrop-blur-2xl relative w-[350px] md:h-[300px] sm:max-w-[90%]
        first:border-b-[3px] first:border-l-2 md:first:border-b-2 md:first:border-l-[3px] 
        last:border-t-[3px] last:border-r-2 last:first:border-t-2 last:first:border-r-[3px] 
      "
    >
      {/* TOP */}
      <div className="flex justify-start gap-2 items-center h-auto w-full">
        {/* ICON */}
        <div className="size-14 text-zinc-50 ">
          {icon === "frontend" ? (
            <FaReact className="size-full" />
          ) : icon === "backend" ? (
            <FaNodeJs className=" size-full " />
          ) : icon === "ui/ux" ? (
            <MdDesignServices className=" size-full " />
          ) : icon === "mobile" ? (
            <CiMobile3 className=" size-full " />
          ) : (
            <AiFillPicture className=" size-full" />
          )}
        </div>
        <h4 className=" flex flex-col text-[1.1rem] w-auto pl-5 h-auto justify-center py-2 items-start font-roboto">
          <span
            className="font-bold relative z-0 text-[1.375rem]
                         after:-skew-y-3 after:bottom-[15%] after:absolute after:-z-[1] after:h-[0.3em] after:w-[90%] after:bg-accent after:left-[17%]"
          >
            {title}
          </span>
          {subtitle}
        </h4>
      </div>

      <div className=" py-5 px-[15px] flex flex-row justify-between h-auto" >
        <div
          className="relative flex flex-row-reverse items-center
                        after:opacity-30
                        after:h-[65%]
                        after:bottom-0 
                        after:left-[17px] 
                        after:border-solid 
                        after:border-[1px] 
                        after:border-accent 
                        after:content-default"
        >
          <div
            className="pl-[35px] text-[12px] flex flex-col items-start
                            before:ml-[-50px]
                            before:content-['<h3>'] 
                            before:text-accent
                            before:mb-[5px] 
                            before:opacity-30 
                            after:ml-[-50px]
                            after:mt-[5px]
                            after:text-accent
                            after:content-['</h3>'] 
                            after:opacity-30
                            "
          >
            <p className=" text-left px-2 ">{text}</p>
          </div>
        </div>
      </div>
    </article>
  );
};


export default ExpertiseCard;
