import type { Metadata } from "next/types";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/card";
import { getAllElements } from "@/lib/get-element-data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Peruselementit",
};

export default async function ElementsPage() {
  const elements = await getAllElements();
  const url = "/elements/";
  return (
    <div className="max-w-2xl">
      <div className="grid lg:grid-cols-2 gap-3">
        {elements.map(post => (
          <Card key={post.order} className="flex flex-col rounded-lg shadow-lg p-2">
            <Link href={url + post.slug}>
              <CardImage image={post.image || "/concepts/fallback.webp"} aspectRatio="landscape" />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.quote}</CardDescription>
                <CardDescription>{post.person}</CardDescription>
              </CardHeader>
              <CardContent>{post.text && <p className="text-base">{post.text}</p>}</CardContent>
            </Link>
            <CardFooter>
              <Link href={post.slug} className={cn("w-full", buttonVariants({ variant: "default" }))}>Lue lisää</Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
