import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: z.object({
    name: z.string(),
    legalName: z.string().optional(),
    tagline: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'building', 'concept', 'archived']),
    stage: z.string().optional(),
    sector: z.string(),
    founded: z.string().optional(),
    url: z.string().url().optional(),
    secondaryUrl: z.string().url().optional(),
    order: z.number().default(99),
    accent: z.string().optional(),
    ogImage: z.string().optional(),
  }),
});

export const collections = { portfolio };
