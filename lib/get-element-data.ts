/* eslint-disable unused-imports/no-unused-vars */
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const rootDirectory = path.join(process.cwd(), "content", "elements");

export interface Element {
  metadata: ElementMetadata;
  content: string;
}

export interface ElementMetadata {
  title?: string;
  text?: string;
  quote?: string;
  image?: string;
  person?: string;
  order?: number;
  slug: string;
}
export async function getElementBySlug(slug: string): Promise<Element | null> {
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
export async function getAllElements(limit?: number): Promise<ElementMetadata[]> {
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .map(file => getElementsMetadata(file))
    .sort((a, b) => {
      if (a.order! > b.order!) {
        return 1;
      }
      else {
        return -1;
      }
    });
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
}
export function getElementsMetadata(filepath: string): ElementMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data } = matter(fileContent);
  return {
    ...data,
    slug,
  };
}
