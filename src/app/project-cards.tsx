import Image from "next/image";
import Link from "next/link";
import type { AppStoreCard } from "./apps";
import type { CaseStudyProject } from "./work-projects";
import { AppStoreIcon, PlayStoreIcon } from "./store-icons";
import styles from "./page.module.css";
export function AppCard({ app, expanded = false, tags = [], headingLevel = "h3" }: { app: AppStoreCard; expanded?: boolean; tags?: readonly string[]; headingLevel?: "h2" | "h3" }) {
 const Heading = headingLevel;
 return <article className={styles.appCard}>
  <a href={app.iosLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${app.name} in the App Store`} className={styles.appVisual}>
   {app.screenshots.slice(0,expanded ? 3 : 2).map((src,index) => <Image src={src} alt={`${app.name} screenshot ${index+1}`} key={src} width={1242} height={2688} sizes={expanded ? "(max-width: 600px) 25vw, 145px" : "(max-width: 600px) 38vw, (max-width: 900px) 18vw, 135px"} />)}
  </a>
  <Heading>{app.name}</Heading><p>{app.description}</p>
  {tags.length > 0 && <p className={styles.projectTags} aria-label="Project types">{tags.join(" / ")}</p>}
  {expanded && <dl className={styles.facts}><div><dt>Platform</dt><dd>{app.androidLink ? "iOS and Android" : "iOS"}</dd></div></dl>}
  <div className={styles.appLinks}>
   <a href={app.iosLink} target="_blank" rel="noopener noreferrer" aria-label={`View in the App Store: ${app.name}`} className={styles.textLink}><AppStoreIcon className={styles.storeIcon} /><span>View in the App Store →</span></a>
   {app.androidLink && <a href={app.androidLink} target="_blank" rel="noopener noreferrer" aria-label={`View in the Play Store: ${app.name}`} className={styles.textLink}><PlayStoreIcon className={styles.storeIcon} /><span>View in the Play Store →</span></a>}
  </div>
 </article>;
}
export function Rally() {
 return <section id="rally">
  <div className={`${styles.container} ${styles.rallyRow}`}>
   <div className={styles.rallyCopy}><span className={styles.eyebrow}>In the studio</span><h2>Rally: Your Adventure Passport</h2><p>Turn real travel into a collection.</p><span className={styles.badge}>Coming Soon</span><a href="https://www.kickstarter.com/projects/kubicle-studio/rally-your-adventure-passport?ref=527wu1" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Explore Rally →</a></div>
   <Image src="/images/img_rally.jpg" alt="Rally travel app screens" width={960} height={540} sizes="(max-width: 800px) 100vw, 560px" className={styles.rallyImage} />
  </div>
 </section>;
}
export function OtherWorkCard({ work, tags = [], headingLevel = "h3" }: { work: CaseStudyProject; tags?: readonly string[]; headingLevel?: "h2" | "h3" }) {
 const Heading = headingLevel;
 return <Link href={work.href} className={styles.otherCard}>
  <span className={styles.caseStudyVisual}><Image src={work.image} alt={work.name} width={576} height={576} sizes="(max-width: 600px) 100vw, 520px" /></span>
  <Heading>{work.name}</Heading><p>{work.description}</p>
  {tags.length > 0 && <p className={styles.projectTags} aria-label="Project types">{tags.join(" / ")}</p>}
  <span className={styles.textLink}>View project →</span>
 </Link>;
}
