import { SkillsSectionType } from "../types/section";
import { getId } from "../utils/helper";

export const skillsSection: SkillsSectionType = {
  title: "what I do",
  skills: [
    {
      id: getId(),
      title: "full stack development",
      //animation lottie file : https://lottiefiles.com/
      lottie: {
        light: "/lotties/frontend.json",
        dark: "/lotties/frontend-dark.json",
      },
      points: [
        "Building full-stack web applications using Next.js with TypeScript, TailwindCSS, and APIs",
        "Developing responsive single-page applications using ReactJS",
        "Creating RESTful APIs using Express for backend development",
      ],

      softwareSkills: [
        //iconify icons: https://icon-sets.iconify.design/

        { name: "html-5", icon: "vscode-icons:file-type-html" },
        { name: "css-3", icon: "vscode-icons:file-type-css" },
        { name: "javascript", icon: "vscode-icons:file-type-js-official" },
        { name: "reactjs", icon: "logos:react" },
        { name: "nextjs", icon: "logos:nextjs-icon" },
        {
          name: "typescript",
          icon: "vscode-icons:file-type-typescript-official",
        },
        { name: "sass", icon: "vscode-icons:file-type-sass" },
        { name: "tailwindcss", icon: "logos:tailwindcss-icon" },
        { name: "nodejs", icon: "logos:nodejs-icon" },
        { name: "expressjs", icon: "logos:express-icon" },
        { name: "mongodb", icon: "logos:mongodb-icon" },
        { name: "postgresql", icon: "logos:postgresql-icon" },
        { name: "redux", icon: "logos:redux" },
        { name: "database", icon: "vscode-icons:file-type-sql" },
        { name: "jest", icon: "vscode-icons:file-type-jest" },
      ],
    },
    {
      id: getId(),
      title: "UI/UX designing",
      lottie: {
        light: "/lotties/designing.json",
        dark: "/lotties/designing-dark.json",
      },
      points: [
        "Experience in developing user-friendly interfaces with figma",
        "Experience in developing design systems and style guides",
        "Proivude user friendly design solutions",
      ],
      softwareSkills: [
        { name: "figma", icon: "logos:figma" },
        { name: "adobe illustrator", icon: "logos:adobe-illustrator" },
        { name: "adobe photoshop", icon: "logos:aobe-photoshop" },
      ],
    },
  ],
};
