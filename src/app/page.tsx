import Link from "next/link";
import { Header, Footer } from "./site-chrome";
import { Rally } from "./project-cards";
import { SelectedWork } from "./selected-work";
import { serviceGroups } from "./services/content";
import styles from "./page.module.css";
export default function Home() {
 return <><Header /><main>
  <section className={`${styles.container} ${styles.hero}`}>
   <div className={styles.heroCopy}><span className={styles.eyebrow}><span className={styles.dot} />Proudly based in Austin, Texas</span><h1>Clear design for apps, brands and websites.</h1><div className={styles.heroDetails}><p>AXLT Studio is a design-led studio in Austin, Texas. We research, design and build digital products for other teams, and we are building apps of our own.</p><Link href="/work" className={styles.outlineButton}>See selected work <span aria-hidden="true">↗</span></Link></div></div>
  </section>
  <section className={styles.paperBand}><div className={`${styles.container} ${styles.section}`}>
   <div className={styles.sectionHeading}><span className={styles.eyebrow}>What we do</span><h2>From the first question to a finished product</h2></div>
   <div className={styles.serviceCards}>{serviceGroups.map((group,index) => <article className={styles.serviceCard} key={group.title}><span className={styles.coordinates}>0{index+1}</span><h3>{group.title}</h3><p>{group.description}</p><div>{group.services.map(service => <div className={styles.servicePreview} key={service.title}><h4>{service.title}</h4><p>{service.description}</p></div>)}</div></article>)}</div>
   <Link href="/services" className={styles.textLink}>All services →</Link>
  </div></section>
  <SelectedWork home />
  <Rally />
 </main><Footer /></>;
}
