import type { Metadata } from "next";
import { Header, Footer } from "../site-chrome";
import { AppCards, Rally, OtherWorks } from "../project-cards";
import styles from "../page.module.css";
export const metadata: Metadata = { title: "Work — AXLT Studio", description: "Explore our apps, Rally, Liquid Cat Sort, and Half Byte." };
export default function Work() {
 return <><Header /><main><section className={`${styles.container} ${styles.pageIntro}`}><span className={styles.eyebrow}>Selected work</span><h1>Apps already in people’s hands.</h1><p>A selection of apps designed and shipped before AXLT Studio. Available on iOS and Android, with Slacker exclusively on iOS.</p></section><section id="apps" aria-label="Apps for iOS and Android" className={`${styles.container} ${styles.section} ${styles.workSection}`}><AppCards expanded /></section><Rally /><OtherWorks /></main><Footer /></>;
}
