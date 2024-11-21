import { HeroSectionType } from "../types/section";
import { resumeFileName } from "../utils/config";

export const heroSection: HeroSectionType = {
  subtitle: "Hi, my name are",
  title: "Ishimwe Jolie Princesse",
  tagline: "I create visually pleasing interfaces for the web.",
  description:
    "I'm a passionate Full-Stack web developer with hands-on experience in building web application using ReactJs and NextJS with TypeScript, TailwindCSS, and NodeJS, with UI/UX designing.",
  specialText: "Currently available for job opportunities",
  cta: {
    title: "see my resume",
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
