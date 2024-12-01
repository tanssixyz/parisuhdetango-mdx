/* eslint-disable unused-imports/no-unused-vars */
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const rootDirectory = path.join(process.cwd(), "content", "pages");

export interface Page {
  metadata: PageMetadata;
  content: string;
}

export interface PageMetadata {
  title?: string;
  subtitle?: string;
  intro?: string;
  image?: string;
  description?: string;
  slug: string;
}
export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContent);
    return { metadata: {
      ...data,
      slug,
    }, content };
  }
  catch (error) {
    return null;
  }
}
export async function getAllPages(limit?: number): Promise<PageMetadata[]> {
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .map(file => getPageMetadata(file));
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
}
export function getPageMetadata(filepath: string): PageMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data } = matter(fileContent);

  return {
    ...data,
    slug,
  };
}
