import Link from "next/link";
import { Header, Footer } from "./site-chrome";
import { AppCards, Rally, OtherWorks } from "./project-cards";
import { serviceGroups } from "./services/content";
import styles from "./page.module.css";
const summaries = ["Find out what people need before anything gets built.","Shape the product and the brand people will recognize.","Launch it, then keep it healthy."];
export default function Home() {
 return <><Header /><main>
  <section className={`${styles.container} ${styles.hero}`}>
   <div className={styles.heroCopy}><span className={styles.eyebrow}><span className={styles.dot} />Proudly based in Austin, Texas</span><h1>Clear design for apps, brands and websites.</h1><div className={styles.heroDetails}><p>AXLT Studio is a design-led studio in Austin, Texas. We research, design and build digital products for other teams, and we are building apps of our own.</p><Link href="/work" className={styles.outlineButton}>See selected work <span aria-hidden="true">↗</span></Link></div></div>
  </section>
  <section className={styles.paperBand}><div className={`${styles.container} ${styles.section}`}>
   <div className={styles.sectionHeading}><span className={styles.eyebrow}>What we do</span><h2>From the first question to a finished product</h2></div>
   <div className={styles.serviceCards}>{serviceGroups.map((group,index) => <article className={styles.serviceCard} key={group.title}><span className={styles.coordinates}>0{index+1}</span><h3>{group.title}</h3><p>{summaries[index]}</p><div>{group.services.map(service => <div className={styles.servicePreview} key={service.title}><h4>{service.title}</h4><p>{service.description}</p></div>)}</div></article>)}</div>
   <Link href="/services" className={styles.textLink}>All services →</Link>
  </div></section>
  <section id="work" className={`${styles.container} ${styles.section}`}><div className={styles.sectionHeading}><span className={styles.eyebrow}>Selected work</span><h2>Apps already in people’s hands</h2><p>A few of the apps designed and shipped before AXLT Studio. Explore the projects and their App Store releases.</p></div><AppCards /><Link href="/work" className={styles.textLink}>All work →</Link></section>
  <Rally /><OtherWorks />
 </main><Footer /></>;
}
