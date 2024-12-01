import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

import { Test } from "@/components/test-component";
import { getAllElements, getElementBySlug } from "@/lib/get-element-data";

const components = { Test };

export async function generateStaticParams() {
  const elements = await getAllElements();
  const slugs = elements.map(posts => ({ slug: posts.slug }));
  return slugs;
}

export default async function Elements({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const element = await getElementBySlug(slug);

  if (!element) {
    notFound();
  }

  const { metadata, content } = element;
  const { title, image } = metadata;

  return (
    <article className="py-6 prose dark:prose-invert px-5 dark:bg-card max-w-xl">
      {image && <Image src={image} width={800} height={500} alt={title || ""} priority />}
      {title && <p className="font-heading text-2xl w-full">{title}</p>}
      <hr />
      <MDXRemote source={content} components={components} />
    </article>
  );
}
