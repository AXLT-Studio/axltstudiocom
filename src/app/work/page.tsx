import type { Metadata } from "next";
import { Header, Footer } from "../site-chrome";
import { Rally } from "../project-cards";
import { SelectedWork } from "../selected-work";
export const metadata: Metadata = { title: "Work — AXLT Studio", description: "Explore apps, websites, branding design and upcoming projects from AXLT Studio." };
export default function Work() {
 return <><Header /><main><SelectedWork /><Rally /></main><Footer /></>;
}
