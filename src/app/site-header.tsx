"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import horizontalLogo from "../../AXLT Studio-Horizontal Logo.png";
import { inversionz } from "./brand-font";
import styles from "./site-header.module.css";
const links = [{label:"Work",href:"/work"},{label:"Services",href:"/services"},{label:"About",href:"/about"}];
export function Header() {
 const pathname = usePathname();
 const [open, setOpen] = useState(false);
 useEffect(() => {
  const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
  document.addEventListener("keydown", close);
  return () => document.removeEventListener("keydown", close);
 }, []);
 const active = (href: string) => pathname === href || pathname.startsWith(href + "/");
 return <header className={styles.header}>
  <div className={styles.inner}>
   <Link href="/" className={styles.brand} onClick={() => setOpen(false)} aria-label="AXLT Studio home"><span className={styles.brandLogoFrame}><Image src={horizontalLogo} alt="AXLT" className={styles.brandLogo} sizes="(max-width: 600px) 144px, 184px" loading="eager" /></span><span className={`${inversionz.className} ${styles.brandStudio}`}>Studio</span></Link>
   <nav className={styles.desktop} aria-label="Main navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} className={active(link.href) ? styles.active : ""}>{link.label}</Link>)}</nav>
   <button className={styles.toggle} onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} aria-controls="mobile-navigation"><span /><span /></button>
  </div>
  {open && <nav id="mobile-navigation" className={styles.mobile} aria-label="Mobile navigation">{links.map(link => <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
 </header>;
}
