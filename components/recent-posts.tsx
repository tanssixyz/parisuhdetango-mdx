import Link from "next/link";

import { getAllPosts } from "@/lib/get-post-data";
import { formatDate } from "@/lib/utils";

import { Card, CardContent, CardDate, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "./ui/card";

export default async function RecentPosts() {
  const posts = await getAllPosts(2);
  const url = "/blog/";
  return (
    <div className="max-w-3xl py-5 border-b-2">
      <h1 className="text-2xl font font-heading text-center pb-5">Recent Blog Posts</h1>
      <div className="grid lg:grid-cols-2 gap-3">
        {posts.map(post => (
          <Card key={post.order} className="flex flex-col rounded-lg shadow-lg p-2">
            <Link href={url + post.slug}>
              <CardImage image={post.image!} aspectRatio="landscape" role="Image" className="transition-all hover:scale-105" />
              <CardHeader>
                <CardDate>
                  {formatDate(post.date || "")}
                </CardDate>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>{post.intro && <p className="text-base p-2">{post.intro}</p>}</CardContent>
              <CardFooter className="underline">
                Lue lisää
              </CardFooter>
            </Link>
          </Card>

        ))}
      </div>
      <Link href={url}>
        <p className="underline pt-5">Katso kaikki blogitekstit</p>
      </Link>
    </div>
  );
}
