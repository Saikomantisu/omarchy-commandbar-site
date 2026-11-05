import { getCollection, type CollectionEntry } from "astro:content";

type Scene = CollectionEntry<"features">["data"];
export type FeatureCommand = { label: string; text: string; scene: Scene };
export type FeatureGroup = {
  id: string;
  title: string;
  text: string;
  commands: FeatureCommand[];
};

const categories = {
  "find-launch": {
    title: "Find & launch",
    text: "Get to the app, window or file you need.",
  },
  "calculate-convert": {
    title: "Calculate & convert",
    text: "Quick answers without reaching for another app.",
  },
  "tools-shortcuts": {
    title: "Tools & shortcuts",
    text: "Small utilities for the things you do every day.",
  },
} satisfies Record<Scene["category"], { title: string; text: string }>;

export async function getFeatureGroups(): Promise<FeatureGroup[]> {
  const entries = (await getCollection("features")).sort(
    (a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id),
  );
  return Object.entries(categories)
    .map(([id, category]) => ({
      id,
      ...category,
      commands: entries
        .filter(({ data }) => data.category === id)
        .map(({ data }) => ({
          label: data.label,
          text: data.description,
          scene: data,
        })),
    }))
    .filter((group) => group.commands.length > 0);
}
