import { appStoreCards, type AppStoreCard } from "./apps";
import type { ProjectTag } from "./project-types";

type ProjectBase = {
  id: string;
  tags: readonly ProjectTag[];
  hidden?: boolean;
};

type AppProject = ProjectBase & {
  kind: "app";
  app: AppStoreCard;
};

export type CaseStudyProject = ProjectBase & {
  kind: "case-study";
  name: string;
  description: string;
  image: string;
  href: string;
};

export type WorkProject = AppProject | CaseStudyProject;

// A project's tags determine every filter it appears under.
export const workProjects: readonly WorkProject[] = [
  ...appStoreCards.map((app): AppProject => ({
    id: app.iosLink,
    kind: "app",
    tags: app.tags,
    app,
  })),
  {
    id: "liquid-cat-sort",
    hidden: true,
    kind: "case-study",
    name: "Liquid Cat Sort",
    description: "A playful pixel art take on the water sort puzzle.",
    image: "/images/img_8.png",
    href: "/work/liquid-cat-sort",
    tags: ["apps", "digital-products", "game"],
  },
  {
    id: "half-byte",
    hidden: true,
    kind: "case-study",
    name: "Half Byte",
    description: "A card game inspired by Boolean algebra.",
    image: "/images/img_4.png",
    href: "/work/half-byte",
    tags: ["game"],
  },
];
