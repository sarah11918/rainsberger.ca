import { z, defineCollection } from "astro:content";

const thoughtsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.string(),
      description: z.string(),
      author: z.string(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  thoughts: thoughtsCollection,
};