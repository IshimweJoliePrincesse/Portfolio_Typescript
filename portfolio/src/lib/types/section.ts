import {
  CTAType,
  ExperienceType,
  FeaturedProjectType,
  NavlinkType,
  ProjectType,
  SocialLinkType,
  SoftwareSkillType,
} from ".";

export interface sections {
  title: string;
}

export interface NavbarSectionType {
  navLinks: NavlinkType[];
  cta: CTAType;
}

export interface HeroSectionType extends sections {
  subtitle?: string;
  tagline: string;
  description?: string;
  specialText?: string;
  cta?: CTAType & {
    hideInDesktop?: boolean;
  };
}

export interface AboutSectionType extends sections {
  list: {
    title: string;
    items: string[];
  };
  img: string;
}

type SkillType = {
  id: string;
  title: string;
  lottie: {
    light: string;
    dark: string;
  };
  points: string[];
  softwareSkills: SoftwareSkillType[];
};

export interface SkillsSectionType extends sections {
  skills: SkillType[];
}

export interface ExperienceSectionType extends sections {
  experiences: ExperienceType[];
}

export interface ProjectsSectionType extends sections {
  projects: ProjectType[];
}

export interface FeaturedProjectsSectionType extends sections {
  projects: FeaturedProjectType[];
}

export interface ContactSectionType extends sections {
  subtitle?: string;
  paragraphs: string[];
  link: string;
}

export interface SocialSectionType {
  socialLinks: SocialLinkType[];
}

export interface FooterSectionType extends sections {
  link: string;
}
