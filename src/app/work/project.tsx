import Image from "next/image";
import Link from "next/link";
import { Header, Footer } from "../site-chrome";
import styles from "./project.module.css";

type ProjectContent = {
  title: string;
  subtitle?: string;
  heroImage: string;
  tags: string[];
  projectUrl?: string;
  ctaText?: string;
  overview: { summary: string; items: { label: string; value: string }[] };
  blocks: { kind: string; content: string; alt?: string }[];
};

export function Project({ content, isHalfByte = false }: { content: ProjectContent; isHalfByte?: boolean }) {
  return <>
    <Header />
    <main className={styles.project}>
      <Link className={styles.back} href="/#other-works">← All works</Link>
      <h1>{content.title}</h1>
      {content.subtitle && <p className={styles.subtitle}>{content.subtitle}</p>}
      <div className={styles.tags}>{content.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
      {content.projectUrl && <a className={styles.cta} href={content.projectUrl} target="_blank" rel="noopener noreferrer">{content.ctaText} ↗</a>}
      <Image className={styles.heroImage} src={content.heroImage} alt={content.title} width={1600} height={900} sizes="(max-width: 960px) 100vw, 960px" preload />
      <section className={styles.overview} aria-labelledby="overview">
        <h2 id="overview">Overview</h2>
        <p>{content.overview.summary}</p>
        <dl>{content.overview.items.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
      </section>
      {isHalfByte && <video className={styles.video} controls preload="metadata" poster="/images/halfbyte/halfbyte_openbox.png" aria-label="Half Byte game demonstration"><source src="/videos/halfbyte_demo.mp4" type="video/mp4" />Your browser does not support embedded video.</video>}
      <section className={styles.story} aria-label="Project details">
        {content.blocks.map((block, index) => block.kind === 'heading'
          ? <h2 key={index}>{block.content}</h2>
          : block.kind === 'image'
            ? <Image key={index} src={block.content} alt={block.alt || content.title} width={1600} height={1000} sizes="(max-width: 960px) 100vw, 960px" className={styles.detailImage} />
            : <p key={index}>{block.content}</p>)}
      </section>
      {!isHalfByte && <p className={styles.note}>This project is a work in progress.</p>}
      <Link className={styles.next} href={isHalfByte ? '/work/liquid-cat-sort' : '/work/half-byte'}>Next project: {isHalfByte ? 'Liquid Cat Sort' : 'Half Byte'} →</Link>
    </main>
    <Footer />
  </>;
}
