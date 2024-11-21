import { FeaturedProjectsSectionType } from "../types/section";
import { getId } from "../utils/helper";

const FeaturedProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: "Spotify_clone",
      description: "A clone of spotify",
      tasks:
        "As a a developer, I tried to clone Spotify. I included the frontend UI, backend setup with database, APIS, and integration with the premium features. (Project still Under development)",
      url: "https://github.com/IshimweJoliePrincesse/spotify_clone",
      img: "data:image/png;base64,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",
      tags: ["React Js", "Javascript", "TailwindCSS", "NodeJS", "UI/UX"],
    },
    {
      id: getId(),
      name: "healthcare dashboard",
      description:
        "A health dashboard that fetches data from an API to get the patients's data",
      tasks:
        "As a developer, I developed this project by making a dashboard to keep control of the patient's blood pressure from a given REST API",
      url: "https://github.com/IshimweJoliePrincesse/haealth_care-dashboard",
      img: "https://ibb.co/HpsCmY7",
      tags: ["REST API", "NextJS", "TailwindCSS", "TypeScript"],
    },
    {
      id: getId(),
      name: "Food Delivery app",
      description:
        "A food delivery app that allows users to order food and track their orders",
      tasks:
        "As a developer, I built this project by developing a food delivery app using  ReactJS, and Redux",
      url: "https://github.com/IshimweJoliePrincesse/Food_delivery-app",
      img: "https://repository-images.githubusercontent.com/774882122/0022ed18-eedf-4833-a0ec-58e5a4a62c6f",
      tags: ["REACTJS", "TailwindCSS", "Express", "APIs"],
    },
    {
      id: getId(),
      name: "Initial Portfolio",
      description:
        "The first portfolio I made in my first eight months of coding",
      tasks:
        "As a developer, I had a long way to go, I coded my first portfolio using HTML, CSS, Javascript",
      url: "https://jolieprincesseportfolio.vercel.app/",
      img: "https://ibb.co/hmsY5WP",
      tags: ["HTML, CSS, JAVASCRIPT"],
    },
  ],
};

export default FeaturedProjectsSection;