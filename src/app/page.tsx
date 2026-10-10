import Image from "next/image";
import Link from "next/link";
import { appStoreCards } from "./apps";
import { Footer, Header } from "./site-chrome";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="hero-title">
          <h1 id="hero-title">Placeholder headline.<br />A few big words about what we create and why we create it.</h1>
          <p>Placeholder for a short introduction to AXLT Studio.</p>
          <span className={styles.accent}>More to come.</span>
        </section>

        <section id="work" className={styles.featured} aria-label="Featured project">
          <a className={styles.rally} href="https://www.kickstarter.com/projects/kubicle-studio/rally-your-adventure-passport?ref=527wu1" target="_blank" rel="noopener noreferrer">
            <Image src="/images/img_rally.jpg" alt="Rally adventure passport and collectible travel stamps" fill sizes="(max-width: 960px) 100vw, 960px" preload className={styles.cover} />
            <div className={styles.rallyText}>
              <h2>Rally: Your Adventure Passport</h2>
              <p>Turn real travel into a collection</p>
              <span className={styles.badge}>Coming Soon</span>
            </div>
          </a>
        </section>

        <section id="apps" className={styles.apps} aria-labelledby="apps-title">
          <h2 id="apps-title" className={styles.sectionTitle}>THINGS ON APP STORE</h2>
          <div className={styles.carousel} tabIndex={0} aria-label="Apps. Scroll horizontally to explore all five apps.">
            <div className={styles.track}>
              {appStoreCards.map((app) => (
                <a className={styles.appCard} key={app.name} href={app.link} target="_blank" rel="noopener noreferrer">
                  <div className={styles.appHeader}>
                    <Image src={app.icon} alt="" width={64} height={64} className={styles.appIcon} />
                    <div>
                      <h3>{app.name}</h3>
                      <p>{app.description}</p>
                      <div className={styles.rating} aria-label={`${app.rating} out of 5 stars, ${app.numRating} ratings in the original portfolio`}>
                        <span aria-hidden="true">{"★".repeat(app.rating)}<span className={styles.emptyStars}>{"★".repeat(5 - app.rating)}</span></span>
                        <span className={styles.ratingCount}>{app.numRating}</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.screenshots}>
                    {app.screenshots.map((src, i) => (
                      <Image src={src} key={src} alt={`${app.name} screenshot ${i + 1}`} width={160} height={320} sizes="160px" />
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="other-works" className={styles.otherWorks} aria-labelledby="other-title">
          <h2 id="other-title" className={styles.sectionTitle}>OTHER WORKS</h2>
          <div className={styles.workGrid}>
            <Link href="/work/liquid-cat-sort" className={styles.workCard} aria-label="View Liquid Cat Sort">
              <Image src="/images/img_8.png" alt="Liquid Cat Sort" width={576} height={576} sizes="(max-width: 600px) 44vw, 288px" />
            </Link>
            <Link href="/work/half-byte" className={styles.workCard} aria-label="View Half Byte">
              <Image src="/images/img_4.png" alt="Half Byte" width={576} height={576} sizes="(max-width: 600px) 44vw, 288px" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
