import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { isFigmaUrl } from './lib/figma';

const figmaUrl = z.string().refine(isFigmaUrl, { message: 'Must be an https://www.figma.com/... link' });

const prototype = z.object({
  title: z.string(),
  url: figmaUrl,
  device: z.enum(['mobile', 'desktop']).default('mobile'),
});

// Case studies: one folder per project in src/content/projects/<slug>/index.md
const projects = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/projects', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string().min(1, 'Describe the cover image for screen-reader users'),
      order: z.number().default(99),
      draft: z.boolean().default(false),
      year: z.string(),
      role: z.string(),
      duration: z.string(),
      team: z.string().optional(),
      platform: z.string().optional(),
      tools: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      tldr: z.object({
        problem: z.string(),
        approach: z.string(),
        outcome: z.string(),
      }),
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      prototypes: z.array(prototype).default([]),
      figmaFile: figmaUrl.optional(),
    }),
});

// Screen designs: one folder each in src/content/screens/<slug>/index.md
const screens = defineCollection({
  loader: glob({ pattern: '**/index.md', base: './src/content/screens', generateId: ({ entry }) => entry.split('/')[0] }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      order: z.number().default(99),
      draft: z.boolean().default(false),
      year: z.string(),
      tools: z.array(z.string()).default(['Figma']),
      images: z
        .array(z.object({ src: image(), alt: z.string().min(1, 'Every screen needs alt text') }))
        .min(1),
      prototype: prototype.optional(),
      figmaFile: figmaUrl.optional(),
    }),
});

export const collections = { projects, screens };
