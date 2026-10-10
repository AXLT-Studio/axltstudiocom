import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="AXLT Studio home">
        <span className={styles.logo}><Image src="/axlt-studio-logo.png" alt="" width={40} height={40} /></span>
        <span>AXLT STUDIO</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#work" className={styles.activeNav}>work</Link>
        <Link href="/#apps">apps</Link>
        <Link href="/#other-works">other works</Link>
      </nav>
    </header>
  );
}

export function Footer() {
  return <footer className={styles.footer}>👾 2026 © Made with ❤️ by AXLT Studio 👾</footer>;
}
