import type { Metadata } from "next";
import { Header, Footer } from "../site-chrome";
import { AppCards, Rally, OtherWorks } from "../project-cards";
import styles from "../page.module.css";
export const metadata: Metadata = { title: "Work — AXLT Studio", description: "Explore apps, websites, branding design and upcoming projects from AXLT Studio." };
export default function Work() {
 return <><Header /><main>
  <section className={`${styles.container} ${styles.pageIntro}`}>
   <span className={styles.eyebrow}>Selected work</span>
   <h1>Apps, websites and branding.</h1>
   <p>Projects designed and shipped by our team.</p>
  </section>
  <section id="apps" aria-labelledby="apps-heading" className={`${styles.container} ${styles.section} ${styles.workSection}`}>
   <div className={styles.sectionHeading}>
    <span className={styles.eyebrow}>01</span>
    <h2 id="apps-heading">Apps</h2>
   </div>
   <AppCards expanded />
  </section>
  <section id="websites" aria-labelledby="websites-heading" className={`${styles.container} ${styles.section}`}>
   <div className={styles.sectionHeading}>
    <span className={styles.eyebrow}>02</span>
    <h2 id="websites-heading">Websites</h2>
    <p>Website projects coming soon.</p>
   </div>
  </section>
  <section id="branding" aria-labelledby="branding-heading" className={`${styles.container} ${styles.section}`}>
   <div className={styles.sectionHeading}>
    <span className={styles.eyebrow}>03</span>
    <h2 id="branding-heading">Branding design</h2>
    <p>Branding projects coming soon.</p>
   </div>
  </section>
  <Rally /><OtherWorks />
 </main><Footer /></>;
}
