import type { Metadata } from "next";
import { Header, Footer } from "../site-chrome";
import { serviceGroups } from "./content";
import common from "../page.module.css";
import styles from "./services.module.css";
export const metadata: Metadata = { title: "Services — AXLT Studio", description: "UX research, expert reviews, app, web, and brand design, web and app development, and maintenance." };
export default function Services() {
 return <><Header /><main><section className={`${common.container} ${common.pageIntro}`}><span className={common.eyebrow}>Services</span><h1>Understand it, design it, build it.</h1><p>Hire AXLT Studio for one piece of the work or for all of it. Every project starts with a short conversation about what you are trying to ship.</p></section>
 {serviceGroups.map((group,index) => <section key={group.title} className={styles.band}><div className={`${common.container} ${styles.group}`}><div className={styles.intro}><span className={common.coordinates}>0{index+1}</span><h2>{group.title}</h2><p>{group.description}</p></div><div className={styles.details}>{group.services.map(service => <article key={service.title}><h3>{service.title}</h3><p>{service.description}</p><ul>{service.deliverables.map(item => <li key={typeof item === "string" ? item : item.label}>{typeof item === "string" ? item : <><strong>{item.label}</strong> {item.description}</>}</li>)}</ul></article>)}</div></div></section>)}
 </main><Footer /></>;
}
