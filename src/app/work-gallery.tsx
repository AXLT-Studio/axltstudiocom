"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import { projectFilters, type ProjectFilter, type ProjectTag } from "./project-types";
import common from "./page.module.css";
import styles from "./work-gallery.module.css";

type GalleryProject = {
  id: string;
  tags: readonly ProjectTag[];
  card: ReactNode;
};

export function WorkGallery({ projects, home = false }: { projects: readonly GalleryProject[]; home?: boolean }) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("all");
  const headingId = useId();
  const resultsId = useId();
  const Heading = home ? "h2" : "h1";
  const visibleProjects = projects.filter(project => activeFilter === "all" || project.tags.includes(activeFilter));
  const activeLabel = projectFilters.find(filter => filter.id === activeFilter)!.label;

  return <section id="work" aria-labelledby={headingId} className={`${common.container} ${styles.selectedWork} ${home ? styles.home : styles.page}`}>
    <div className={styles.intro}>
      <div className={styles.copy}>
        <span className={common.eyebrow}>Selected work</span>
        <Heading id={headingId} className={styles.heading}>Projects designed and shipped by our team.</Heading>
      </div>
      <div className={styles.filters} role="group" aria-label="Filter projects by type">
        {projectFilters.map(filter => {
          const count = filter.id === "all" ? projects.length : projects.filter(project => project.tags.includes(filter.id)).length;
          return <button key={filter.id} type="button" className={styles.filter} aria-pressed={activeFilter === filter.id} aria-controls={resultsId} onClick={() => setActiveFilter(filter.id)}>
            <span>{filter.label}</span>
            <sup aria-label={`${count} ${count === 1 ? "project" : "projects"}`}>{count}</sup>
          </button>;
        })}
      </div>
    </div>
    <div id={resultsId}>
      <p role="status" aria-live="polite" aria-atomic="true" className={styles.srOnly}>{activeLabel}: {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}.</p>
      {visibleProjects.length > 0
        ? <div className={home ? common.appGrid : common.appGridExpanded}>{visibleProjects.map(project => <div key={project.id} className={styles.project}>{project.card}</div>)}</div>
        : <div className={styles.empty}><p>No projects in this category yet.</p><button type="button" className={common.textLink} onClick={() => setActiveFilter("all")}>View all works →</button></div>}
    </div>
    {home && <Link href="/work" className={common.textLink}>All work →</Link>}
  </section>;
}
