import { getCollection } from 'astro:content';

// Drafts show while you preview locally (npm run dev) and are hidden on the live site.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;
const byOrder = (a: { data: { order: number; year: string } }, b: { data: { order: number; year: string } }) =>
  a.data.order - b.data.order || b.data.year.localeCompare(a.data.year);

export async function getProjects() {
  return (await getCollection('projects', visible)).sort(byOrder);
}

export async function getScreens() {
  return (await getCollection('screens', visible)).sort(byOrder);
}
