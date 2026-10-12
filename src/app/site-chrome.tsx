import Image from "next/image";
import Link from "next/link";
import horizontalLogo from "../../AXLT Studio-Horizontal Logo.png";
import { inversionz } from "./brand-font";
import styles from "./page.module.css";
import contact from "./footer-contact.module.css";

export { Header } from "./site-header";
export function Footer() {
 return <footer className={contact.footerRoot}>
  <section className={contact.band} aria-label="Contact AXLT Studio">
   <div className={`${styles.container} ${contact.content}`}>
    <h2>Sup?</h2>
    <div className={contact.emailBlock}>
     <a href="mailto:sup@axltstudio.com">sup@axltstudio.com</a>
     <p>Project ideas, quick questions, hellos. We read everything.</p>
    </div>
   </div>
  </section>
  <div className={`${styles.container} ${styles.footer}`}>
  <div className={styles.footerTop}>
   <div><Link href="/" className={styles.wordmark} aria-label="AXLT Studio home"><span className={styles.footerLogoFrame}><Image src={horizontalLogo} alt="AXLT" className={styles.footerLogo} sizes="144px" /></span><span className={`${inversionz.className} ${styles.footerStudio}`}>Studio</span></Link><p>Proudly based in Austin, Texas</p><a href="https://www.linkedin.com/company/axlt-studio/" className={styles.textLink} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
   <nav aria-label="Footer navigation"><Link href="/work">Work</Link><Link href="/services">Services</Link><Link href="/about">About</Link></nav>
  </div>
  <div className={styles.footerBottom}><span>© 2026 AXLT Studio</span><span>30.2672° N, 97.7431° W</span></div>
  </div>
 </footer>;
}
