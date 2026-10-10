import type { Metadata } from "next";
import { Project } from "../project";
import content from "./content.json";

export const metadata: Metadata = { title: "Liquid Cat Sort — AXLT Studio" };
export default function LiquidCatSort() { return <Project content={content} />; }
