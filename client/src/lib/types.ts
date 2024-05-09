import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];

export type ProjectType = {
    _id: number;
    name: string;
    description: string;
    mockup: {
        type: "image" | "video";
        url: string;
        alt: string;
    }
    cover: {
        url: string;
        alt: string;
    }
    pictures:[
        {
            images:string[];
            alt: string;
        }
    ]
    link: string;
    support: string;
    technologies: string[];
    reseau?:[
        {
            name: string;
            url: string;
            icon: string;
        },
    ];
    tags:[
        {
            mission: string,
            strategie: string,
            client?: string,
            designer?: string,

        }
    ]
    createAt: string;
}

export interface ProjectList extends ProjectType {}


export type ExpertiseProps = {
    title: string;
    subtitle: string;
    text: string;
    icon: string;
}