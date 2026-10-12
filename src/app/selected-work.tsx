import { AppCard, OtherWorkCard } from "./project-cards";
import { projectTagLabels } from "./project-types";
import { WorkGallery } from "./work-gallery";
import { workProjects } from "./work-projects";

const homeAppNames = new Set(["ASVAB 2026: Ultimate Prep", "Kokyu: Apnea Training", "LeetCard: AI-Powered Flashcard"]);

export function SelectedWork({ home = false }: { home?: boolean }) {
  return <WorkGallery home={home} projects={workProjects.filter(project => !project.hidden && (!home || (project.kind === "app" && homeAppNames.has(project.app.name)))).map(project => ({
    id: project.id,
    tags: project.tags,
    card: project.kind === "app"
      ? <AppCard app={project.app} expanded={!home} tags={projectTagLabels(project.tags)} headingLevel={home ? "h3" : "h2"} />
      : <OtherWorkCard work={project} tags={projectTagLabels(project.tags)} headingLevel={home ? "h3" : "h2"} />,
  }))} />;
}
