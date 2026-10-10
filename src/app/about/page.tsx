import type { Metadata } from "next";
import Link from "next/link";
import { Header, Footer } from "../site-chrome";
import common from "../page.module.css";
import styles from "./about.module.css";
export const metadata: Metadata = { title: "About — AXLT Studio" };
export default function About() {
 return <><Header /><main>
  <section className={`${common.container} ${common.pageIntro}`}><span className={common.eyebrow}><span className={common.dot} />About</span><h1>A small design studio, proudly based in Austin.</h1><p>AXLT Studio designs and builds digital products for other teams, and makes apps of its own. It works from Austin, Texas.</p></section>
  <section className={common.paperBand}><div className={`${common.container} ${styles.profile}`}><div className={styles.portraitColumn}><div className={styles.portrait} role="img" aria-label="Portrait placeholder">[PORTRAIT]</div><span className={common.coordinates}>Austin, Texas · 30.2672° N, 97.7431° W</span></div><div className={styles.bio}><span className={common.eyebrow}>Who is behind it</span><h2>Yung-Chu Chuang</h2><p>I’m a UX engineer with experience designing and developing mobile apps. I’ve designed and shipped production apps used by real customers.</p><p className={styles.muted}>More about the story behind AXLT Studio is coming soon.</p><Link href="/work" className={common.outlineButton}>See the work</Link></div></div></section>
  <section className={`${common.container} ${common.section}`}><div className={common.sectionHeading}><span className={common.eyebrow}>Where the studio is headed</span><h2>Client work, apps, and room for play</h2></div><div className={styles.directionGrid}><article className={styles.now}><span className={common.eyebrow}>Now</span><p>Design and web work for client teams</p><p>Our own apps, in development</p></article><article className={styles.next}><span className={common.eyebrow}>Next</span><p>Games for phone and computer</p><p>Tabletop board games, made as physical products</p></article></div></section>
 </main><Footer /></>;
}
