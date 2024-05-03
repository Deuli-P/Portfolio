'use client';

import Image from "next/image";
import Intro from "./features/Intro";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Expertises from "./features/Expertises";
import { useActiveSectionContext } from "./context/active-section-context";

import type { SectionName } from "../lib/types";
import { useSectionInView } from "@/lib/hooks";
import Expériences from "./features/Experiences";
import Project from "./features/Project";
import { CircleLoader } from "@/components/Loader";
type SectionType ={
  children: string | JSX.Element | JSX.Element[]
  name: SectionName;
  repeat: boolean;
  sens: string;
  id: string;
}


export default function Home() {

  const [ isClient, setIsClient ] = useState(false);

  useEffect(()=>{
    setIsClient(true);
  },[])

  return (
    <>
        { isClient ? 
            (
              <main className="flex w-full flex-col items-center gap-5 md:px-32 px-8 overflow-hidden min-w-[320px]">
              <Intro/>
              <Expertises />
              <Project />
              <Expériences />
              </main>
            )
            :
            (
              <main className="h-[100vh] w-full flex items-center justify-center ">
                <CircleLoader />
              </main>
            )
          }
        </>
  );
}
