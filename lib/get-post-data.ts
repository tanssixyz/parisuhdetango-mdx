/* eslint-disable unused-imports/no-unused-vars */
import matter from "gray-matter";
import fs from "node:fs";
import path from "node:path";

const rootDirectory = path.join(process.cwd(), "content", "posts");

export interface Post {
  metadata: PostMetadata;
  content: string;
}

export interface PostMetadata {
  title?: string;
  subtitle?: string;
  intro?: string;
  image?: string;
  description?: string;
  date?: string;
  order?: number;
  slug: string;
}
export async function getPostBySlug(slug: string): Promise<Post | null> {
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
export async function getAllPosts(limit?: number): Promise<PostMetadata[]> {
  const files = fs.readdirSync(rootDirectory);
  const posts = files
    .map(file => getPostsMetadata(file))
    .sort((a, b) => {
      if (new Date(a.date!) < new Date(b.date!)) {
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
export function getPostsMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
  const { data } = matter(fileContent);
  return {
    ...data,
    slug,
  };
}
