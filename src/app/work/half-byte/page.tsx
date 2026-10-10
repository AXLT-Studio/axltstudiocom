import type { Metadata } from "next";
import { Project } from "../project";
import content from "./content.json";

export const metadata: Metadata = { title: "Half Byte — AXLT Studio" };
export default function HalfByte() { return <Project content={content} isHalfByte />; }
