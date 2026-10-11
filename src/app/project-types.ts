const projectTagNames = {
  apps: "Apps",
  webs: "Webs",
  "digital-products": "Digital products",
  game: "Game",
  branding: "Branding",
} as const;

export type ProjectTag = keyof typeof projectTagNames;

export const projectFilters = [
  { id: "all", label: "All works" },
  { id: "apps", label: projectTagNames.apps },
  { id: "digital-products", label: projectTagNames["digital-products"] },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]["id"];

export function projectTagLabels(tags: readonly ProjectTag[]) {
  return tags.map(tag => projectTagNames[tag]);
}
