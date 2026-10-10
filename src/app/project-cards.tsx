import Image from "next/image";
import Link from "next/link";
import { appStoreCards } from "./apps";
import { AppStoreIcon, PlayStoreIcon } from "./store-icons";
import styles from "./page.module.css";
export function AppCards({ expanded = false }: { expanded?: boolean }) {
 const apps = expanded ? appStoreCards : appStoreCards.slice(0,3);
 return <div className={expanded ? styles.appGridExpanded : styles.appGrid}>{apps.map(app => <article className={styles.appCard} key={app.name}>
  <a href={app.iosLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${app.name} in the App Store`} className={styles.appVisual}>
   {app.screenshots.slice(0,expanded ? 3 : 2).map((src,index) => <Image src={src} alt={`${app.name} screenshot ${index+1}`} key={src} width={1242} height={2688} sizes={expanded ? "(max-width: 600px) 25vw, 145px" : "(max-width: 600px) 38vw, (max-width: 900px) 18vw, 135px"} />)}
  </a>
  <h3>{app.name}</h3><p>{app.description}</p>
  {expanded && <dl className={styles.facts}><div><dt>Platform</dt><dd>{app.androidLink ? "iOS and Android" : "iOS"}</dd></div></dl>}
  <div className={styles.appLinks}>
   <a href={app.iosLink} target="_blank" rel="noopener noreferrer" aria-label={`View in the App Store: ${app.name}`} className={styles.textLink}><AppStoreIcon className={styles.storeIcon} /><span>View in the App Store →</span></a>
   {app.androidLink && <a href={app.androidLink} target="_blank" rel="noopener noreferrer" aria-label={`View in the Play Store: ${app.name}`} className={styles.textLink}><PlayStoreIcon className={styles.storeIcon} /><span>View in the Play Store →</span></a>}
  </div>
 </article>)}</div>;
}
export function Rally() {
 return <section id="rally">
  <div className={`${styles.container} ${styles.rallyRow}`}>
   <div className={styles.rallyCopy}><span className={styles.eyebrow}>In the studio</span><h2>Rally: Your Adventure Passport</h2><p>Turn real travel into a collection.</p><span className={styles.badge}>Coming Soon</span><a href="https://www.kickstarter.com/projects/kubicle-studio/rally-your-adventure-passport?ref=527wu1" target="_blank" rel="noopener noreferrer" className={styles.textLink}>Explore Rally →</a></div>
   <Image src="/images/img_rally.jpg" alt="Rally travel app screens" width={960} height={540} sizes="(max-width: 800px) 100vw, 560px" className={styles.rallyImage} />
  </div>
 </section>;
}
export function OtherWorks() {
 return <section id="other-works" className={`${styles.container} ${styles.section}`}>
  <div className={styles.sectionHeading}><span className={styles.eyebrow}>Other works</span><h2>Room for play.</h2></div>
  <div className={styles.otherGrid}>{[{title:"Liquid Cat Sort",href:"/work/liquid-cat-sort",image:"/images/img_8.png",description:"A playful pixel art take on the water sort puzzle."},{title:"Half Byte",href:"/work/half-byte",image:"/images/img_4.png",description:"A card game inspired by Boolean algebra."}].map(work => <Link href={work.href} key={work.title} className={styles.otherCard}><Image src={work.image} alt={work.title} width={576} height={576} sizes="(max-width: 600px) 100vw, 520px" /><h3>{work.title}</h3><p>{work.description}</p><span className={styles.textLink}>View project →</span></Link>)}</div>
 </section>;
}
