import { socialLinks } from "./portfolio";
import { SocialSectionType } from "../types/section";

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: "tabler:brand-github",
      url: socialLinks.github,
    },
    {
      icon: "mdi:instagram",
      url: socialLinks.instagram,
    },
    {
      icon: "lucide:twitter",
      url: socialLinks.twitter,
    },
    {
      icon: "lucide:linkedin",
      url: socialLinks.linkedin,
    },
    {
      icon: "lucide:facebook",
      url: socialLinks.facebook,
    },
  ],
};
