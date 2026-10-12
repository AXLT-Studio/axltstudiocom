import type { Metadata } from "next";
import Image from "next/image";
import studioLogo from "../../../axlt_studio_logo_pink.png";
import { Header, Footer } from "../site-chrome";
import common from "../page.module.css";
import styles from "./about.module.css";

export const metadata: Metadata = { title: "About — AXLT Studio" };

export default function About() {
  return <><Header /><main>
    <section className={`${common.container} ${common.pageIntro}`}>
      <span className={common.eyebrow}><span className={common.dot} />About</span>
      <h1>A design studio in ATX, making things with a sense of play.</h1>
      <p />
    </section>

    <section className={common.paperBand} aria-label="Studio logo"><div className={`${common.container} ${styles.profile}`}><div className={styles.portraitColumn}><div className={styles.portrait}><Image src={studioLogo} alt="AXLT Studio axolotl logo" className={styles.studioMark} sizes="(max-width: 600px) 65vw, 280px" /></div><span className={common.coordinates}>Austin, Texas · 30.2672° N, 97.7431° W</span></div></div></section>

    <section className={`${common.container} ${common.section}`}>
      <div className={common.sectionHeading}>
        <h2>Our story</h2>
        <div className={common.heroCopy}>
          <p>AXLT is short for axolotl, a salamander that never undergoes metamorphosis. Even fully grown, it keeps the features of its youth. We took that as a promise: grow up, but keep playing.</p>
          <p>The studio began as AXLT Game Studio. As our work grew to include apps, brands and websites, we became AXLT Studio. The curiosity stayed the same.</p>
        </div>
      </div>
    </section>

    <section className={`${common.container} ${common.section}`}>
      <div className={common.sectionHeading}>
        <h2>What we believe</h2>
        <p>Our mission is to make digital products that are clear, useful and a pleasure to use. Creativity is how we get there.</p>
      </div>
      <div className={styles.directionGrid}>
        <article className={styles.next}>
          <span className={common.eyebrow}>Play first.</span>
          <p>We start with curiosity and experiments, because the best ideas rarely arrive on the first try.</p>
        </article>
        <article className={styles.next}>
          <span className={common.eyebrow}>Original by default.</span>
          <p>We design for your product and your people, not from a template.</p>
        </article>
        <article className={styles.next}>
          <span className={common.eyebrow}>Made with care.</span>
          <p>Creative work still has to work, so we test it, refine it and ship it.</p>
        </article>
      </div>
    </section>

    <section className={`${common.container} ${common.section}`}>
      <div className={common.sectionHeading}><span className={common.eyebrow}>Where the studio is headed</span><h2>Client work, apps, and room for play</h2></div>
      <div className={styles.directionGrid}>
        <article className={styles.now}>
          <span className={common.eyebrow}>Now</span>
          <p>We work with teams that need design and web help, from research and app design to brand identity, websites and ongoing care.</p>
          <p>We are also building apps under our own name.</p>
        </article>
        <article className={styles.next}>
          <span className={common.eyebrow}>Next</span>
          <p>Next, we want to make games for phones and computers, and tabletop board games you can hold in your hands.</p>
          <p>It is where the studio started, and where we plan to keep playing.</p>
        </article>
      </div>
    </section>
  </main><Footer /></>;
}
