import type { Metadata } from "next/types";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDate,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { getAllPosts } from "@/lib/get-post-data";
import { cn, formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Blog",
  description: "Welcome to our blog, where we invite you to explore the captivating world of dance. At It Takes Two - Blog, we are passionate about sharing our thoughts and experiences on a diverse range of topics related to dance. From the joy of dancing together to the intricacies of dance art, from the elegance of tango to the innovation of contemporary dance, we aim to provide you with valuable insights and inspiration. One of our key focuses is on embodied communication - the unique language of the body that allows dancers to express themselves and connect with others on a deeper level. We delve into the power of movement and how it can foster meaningful connections and relationships.",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const url = "/blog/";
  return (
    <div className="max-w-2xl">
      <div className="grid lg:grid-cols-2 gap-2">
        {posts.map(post => (
          <Card key={post.date!} className="flex flex-col rounded-lg shadow-lg p-2">
            <Link href={url + post.slug}>
              <CardImage image={post.image || "/posts/fallback.jpg"} aspectRatio="landscape" role="Image" />
              <CardHeader>
                <CardDate>
                  {formatDate(post.date!)}
                </CardDate>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>{post.intro && <p className="text-base p-2">{post.intro}</p>}</CardContent>
            </Link>
            <CardFooter>
              <Link href={url + post.slug} className={cn("w-full", buttonVariants({ variant: "default" }))}>Lue lisää</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
