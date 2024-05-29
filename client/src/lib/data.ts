

export const links = [
    {
      name: "Moi",
      hash: "#about",
    },
    {
      name: "Compétences",
      hash: "#skills",
    },
    {
      name: "Projets",
      hash: "#projects",
    },
    {
      name: "Expériences",
      hash: "#experience",
    },
  ] as const;



  export const technologies: string[] = [
    "CSS",
    "SASS",
    "HTML",
    "NextJS",
    "ViteJS",
    "NodeJs",
    "ReactJS",
    "MongoDB",
    "Javascript",
    "Typescript",
    "TailwindCSS",
] as const;

export const support: string[] = [
    "Dev Mobile",
    "Dev Web",
    "Audit",
] as const;


export const mission: string[] = [ 
    "Fullstack",
    "Frontend",
    "Backend",
    "Layout",
    "SEO",
] as const;


export const dataExpertise = [
  {
    id: 1,
    title: "Frontend",
    text: "Passionné de développement web depuis longtemps, je suis à la recherche de nouveaux challenges en Frontend dans l'optique de faire des sites beau et dynamique. J'optimise les sites pour qu'ils soient performants, responsive et bien référencés.",
    icon: "frontend",
    subtitle: "ReactJs, Tailwind, Framer",
  },
  {
    id: 2,
    title: "Backend",
    text: "Developper un site sécurisé et performant est ma priorité, pouvoir se connecter, ajouter ou supprimer des données.",
    icon: "backend",
    subtitle: "Express, MongoDB, NodeJs",
  },
  {
    id: 3,
    title: "UI/UX",
    text: "Je suis passionné par le design et l'expérience utilisateur. J'aime créer des interfaces simples et intuitives. J'utilise Figma pour mes maquettes.",
    icon: "ui/ux",
    subtitle: "Figma, Photoshop",
  },
] as const;


export const dataIntro = {
  prenom: "Pierre",
  nom: "Antoniutti",
  profession: "Développeur Fullstack",
  text: "spécialisé en React et NodeJs. J'aime créer des sites optimisé et esthétiquement beau, ainsi que des applications web. J'habite sur Paris et je recherche une entreprise pour une alternance. N'hésitez pas à me contacter pour plus d'informations.",
  gituhb:"https://github.com/Deuli-P",
  linkedin:"https://www.linkedin.com/in/pierre-antoniutti/",
  cv:"http://pierre-antoniutti.fr/v01/Pierre-Antoniutti-CV.pdf",
  image: "/pierre-antoniutti-crete-400.webp"
} as const;
