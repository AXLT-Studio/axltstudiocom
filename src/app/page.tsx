import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span className={styles.wordmark}>AXLT STUDIO</span>
        <span className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Coming soon
        </span>
      </header>

      <main className={styles.hero}>
        <Image
          className={styles.logo}
          src="/axlt-studio-logo.png"
          alt="AXLT Studio — white axolotl logo"
          width={500}
          height={500}
          preload
          unoptimized
        />
        <h1 className={styles.headline}>
          Good things
          <span>are on the way.</span>
        </h1>
        <p className={styles.description}>
          A new home for AXLT Studio is taking shape.
          <span>Stay curious. We’ll see you soon.</span>
        </p>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 AXLT Studio</span>
        <span className={styles.footerNote}>Small studio. Endless possibility.</span>
      </footer>
    </div>
  );
}
