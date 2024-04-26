'use client';

import Image from "next/image";
import Intro from "./features/Intro";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
import Expertises from "./features/Expertises";
import { useActiveSectionContext } from "./context/active-section-context";

import type { SectionName } from "./../lib/types";
import { useSectionInView } from "@/lib/hooks";
import Expériences from "./features/Experiences";
import Project from "./features/Project";
type SectionType ={
  children: string | JSX.Element | JSX.Element[]
  name: SectionName;
  repeat: boolean;
  sens: string;
  id: string;
}


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:px-32 px-8 overflow-hidden" id='home'>
        <Intro/>
        <Expertises />
        <Project />
        <Expériences />
    </main>
  );
}
