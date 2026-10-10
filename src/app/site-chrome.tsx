import Link from "next/link";
import styles from "./page.module.css";
export { Header } from "./site-header";
export function Footer() {
 return <footer className={`${styles.container} ${styles.footer}`}>
  <div className={styles.footerTop}>
   <div><Link href="/" className={styles.wordmark}>AXLT <span>Studio</span></Link><p>Proudly based in Austin, Texas</p></div>
   <nav aria-label="Footer navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link></nav>
  </div>
  <div className={styles.footerBottom}><span>© 2026 AXLT Studio</span><span>30.2672° N, 97.7431° W</span></div>
 </footer>;
}
