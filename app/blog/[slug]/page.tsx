import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Test } from "@/components/test-component";
import { getAllPosts, getPostBySlug } from "@/lib/get-post-data";

const components = { Test };

export async function generateStaticParams() {
  const posts = await getAllPosts();
  const slugs = posts.map(posts => ({ slug: posts.slug }));
  return slugs;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { metadata, content } = post;
  const { title, subtitle, image } = metadata;

  return (
    <article className="py-6 prose dark:prose-invert px-5 dark:bg-card max-w-xl">
      {image && <Image src={image} width={1200} height={630} alt={title || ""} priority />}
      {title && <p className="font-heading text-2xl w-full">{title}</p>}
      {subtitle && <p className="text-lg">{subtitle}</p>}
      <hr />
      <MDXRemote source={content} components={components} />
    </article>
  );
}
