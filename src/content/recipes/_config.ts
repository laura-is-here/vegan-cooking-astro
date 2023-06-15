// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const recipeCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        title: z.string(),
        tags: z.array(z.string()),
        ingredient: z.array(z.string()).optional(),
        featureImg: z.string().optional(),
        featureImgAttr: z.string().optional(),
        source: z.string().optional(),
        youtubeId: z.string().optional(),
        summary: z.string()

    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'recipes': recipeCollection,
};