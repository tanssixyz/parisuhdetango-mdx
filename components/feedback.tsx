import Link from "next/link";

import { StripOne } from "@/lib/strips";

import TheStrip from "./layout/the-strip";
import { Card, CardContent } from "./ui/card";

interface StripProps {
  id: number;
  url: string;
  bgcolour: string;
}

export default async function Feedback() {
  const elements = [
    { id: 1, text: "Hienosti ja selkeästi opetettu, ihanaa sanatonta kommunikaatiota, onnistuessaan iloa ja flow, muistutus ihan arjen kommunikaation osatekijöistä. Monimutkaisista sotkuista on aina mahdollista palata perus asioihin, muistaa myös pysähtyä ja kuunnella. Iso kiitos!" },
    { id: 2, text: "Löysin uutta puolisostani. Toi meille uutta tapaa viestiä/kommunikoida toiselle ( vaikutti myös makuuhuoneen puolella). Erittäin tärkeää, ettei tunnilla kiirehditty opetuksessa. Paljon elämässä/arjessa asioita, jotka saattavat viedä puolisosta kauemmas - tämä tuo toista lähelle. Kiitos!" },
    { id: 3, text: "Todella antoisia ja inspiroivia harjoituksia, joiden avulla pääsimme tutkimaan kommunikaatiota kehollisesti tanssin avulla. Hauskaa ja virkistävää yhdessäoloa, joka auttoi uudistamaan ja vahvistamaan keskinäistä yhteyttä. Kiitos!" },
    { id: 4, text: "Many thanks to teachers for a fantastic course. We were able to commit and learn a new skill in a safe environment. Thoroughly enjoyed the course and will be continuing our learning of tango and each other." },
  ];
  const url = "/kokemuksia";
  return (
    <div className="max-w-3xl py-5 border-b-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 pb-4">
        {
          StripOne.map((image: StripProps) => (
            <TheStrip key={image.id} {...image} />
          ))
        }
      </div>
      <h1 className="text-2xl font font-heading text-center pb-5">Kokemuksia</h1>
      <h2 className="text-xl font font-heading text-center pb-5">Mitä on sanottu Parisuhdetangosta</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {elements.map(post => (
          <Card key={post.id} className="flex flex-col rounded-lg shadow-lg p-2">
            <CardContent>
              {post.text && (
                <p className="text-base p-2">
                  {"\""}
                  {" "}
                  {post.text}
                  {"\""}
                  {" "}
                </p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      <Link href={url}>
        <p className="underline py-5">Katso kaikki kokemukset</p>
      </Link>
    </div>
  );
}
