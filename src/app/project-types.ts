export const projectFilters = [
  { id: "all", label: "All works" },
  { id: "apps", label: "Apps" },
  { id: "webs", label: "Webs" },
  { id: "digital-products", label: "Digital products" },
  { id: "game", label: "Game" },
  { id: "branding", label: "Branding" },
] as const;

export type ProjectFilter = (typeof projectFilters)[number]["id"];
export type ProjectTag = Exclude<ProjectFilter, "all">;

export function projectTagLabels(tags: readonly ProjectTag[]) {
  return tags.map(tag => projectFilters.find(filter => filter.id === tag)!.label);
}
