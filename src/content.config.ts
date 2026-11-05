import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const features = defineCollection({
  loader: glob({ pattern: "**/*.yaml", base: "./src/content/features" }),
  schema: z.object({
    label: z.string().min(1),
    description: z.string().min(1),
    category: z.enum(["find-launch", "calculate-convert", "tools-shortcuts"]),
    order: z.number().int().nonnegative().default(100),
    query: z.string().min(1),
    rows: z
      .array(
        z.object({
          title: z.string().min(1),
          subtitle: z.string().default(""),
          icon: z.string().default("⌕"),
          group: z.string().default("Commands"),
          hero: z.boolean().default(false),
          action: z.string().default("Copy"),
        }),
      )
      .min(1),
  }),
});

export const collections = { features };
