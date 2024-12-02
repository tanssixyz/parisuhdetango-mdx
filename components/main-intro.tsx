import Link from "next/link";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardImage, CardTitle } from "./ui/card";
import Image from "next/image";

export default async function MainIntro() {
  const url = "/about";
  return (
    <div className="border-b-2 max-w-3xl pb-5 ">
      <Card className="flex flex-col rounded-lg shadow-lg p-2">
        <Link href={url}>
          <Image src={"/heros/hero-1a.jpg"} width={1000} height={600} alt={"Image"} role="Image"/>      
          <CardHeader>
            <CardTitle><div className="text:2xl lg:text-3xl font-heading">Parisuhdetango</div></CardTitle>
            <CardDescription>Syvennetään vuoropuhelua yhdessä oman kumppanin kanssa</CardDescription>
          </CardHeader>
          <CardContent><p className="text-base p-2">Parisuhdetango on uniikki tapa oppia tanssimaan yhdessä oman kumppanin kanssa ja kehittämään parisuhteen vuoropuhelua ja läheisyyttä. Parisuhdetango kannustaa sinua ja kumppaniasi aitoon, intuitiiviseen ja selkeään kommunikaatioon. Tämä perustuu yksinkertaisiin, selkeisiin ja asteittain haastavampiin harjoituksiin, joiden pyrkimyksenä on vahvistaa parisuhdettasi ja rakentaa luottamusta. Harjoitukset auttavat teitä lähentymään toisianne, avaamaan ovia uudenlaisille kokemuksille, valinnoille ja ratkaisuille sekä lisäämään herkkyyttä toistenne tarpeita kohtaan. Uudet kokemukset luovat uutta dialogia, ja tämä uusi dialogi synnyttää uudenlaista vuorovaikutusta. Parisuhdetango on tarkoitettu kaikenlaisille pariskunnille. Aikaisempi kokemus tanssista ei ole välttämätöntä</p></CardContent>
          <CardFooter className="underline">
            Lue lisää
          </CardFooter>
        </Link>
      </Card>
    </div>
  );
}
