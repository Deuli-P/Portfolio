'use client';

import Link from "next/link";
import type { SectionName } from "./../../lib/types";


type ElementProps = {
    hash: string;
    name: SectionName;
    handle?: ()=>void;
}


const Element = ({hash, name, handle}: ElementProps) =>{

    return(
        <li
                className="h-3/4 flex items-center justify-center relative w-1/3 "
                key={hash}
              >
                <Link
                  className={` w-full px-4 py-2 transition-all duration-150 z-[2] font-roboto font-semibold text-md hover:underline text-primary underline-offset-[10px] rounded-lg md:rounded-full active:font-bold active:bg-foregroundActive active:text-secondary`}
                  href={hash}
                  onClick={handle? ()=>handle(): undefined}
                >
                  {name}

                </Link>
              </li>
    )
}

export default Element;