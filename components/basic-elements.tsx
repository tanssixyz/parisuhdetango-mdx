import Link from "next/link";

import { getAllElements } from "@/lib/get-element-data";
import { cn } from "@/lib/utils";

import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "./ui/card";

export default async function BasicElements() {
  const elements = await getAllElements(2);
  const url = "/elements/";
  return (
    <div className="max-w-3xl py-5 border-b-2">
      <h1 className="text-2xl font font-heading text-center pb-5">Basic Elements</h1>
      <div className="grid lg:grid-cols-2 gap-3">
        {elements.map(post => (
          <Card key={post.order} className="flex flex-col rounded-lg shadow-lg p-2">
            <Link href={url + post.slug}>
              <CardImage image={post.image!} aspectRatio="landscape" className="transition-all hover:scale-105" />
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <CardDescription>{post.quote}</CardDescription>
                <CardDescription>{post.person}</CardDescription>

              </CardHeader>
              <CardContent>{post.text && <p className="text-base p-2">{post.text}</p>}</CardContent>
            </Link>
            <CardFooter>
              <Link href={url + post.slug} className={cn("w-full", buttonVariants({ variant: "default" }))}>Lue lisää</Link>
            </CardFooter>

          </Card>

        ))}
      </div>
      <Link href={url}>
        <p className="underline py-5">Katso kaikki elementit</p>
      </Link>
    </div>
  );
}
