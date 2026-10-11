import { AppCard, OtherWorkCard } from "./project-cards";
import { projectTagLabels } from "./project-types";
import { WorkGallery } from "./work-gallery";
import { workProjects } from "./work-projects";

export function SelectedWork({ home = false }: { home?: boolean }) {
  return <WorkGallery home={home} projects={workProjects.filter(project => !project.hidden).map(project => ({
    id: project.id,
    tags: project.tags,
    card: project.kind === "app"
      ? <AppCard app={project.app} expanded={!home} tags={projectTagLabels(project.tags)} headingLevel={home ? "h3" : "h2"} />
      : <OtherWorkCard work={project} tags={projectTagLabels(project.tags)} headingLevel={home ? "h3" : "h2"} />,
  }))} />;
}
