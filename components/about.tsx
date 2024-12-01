import Link from "next/link";

import { StripMM } from "@/lib/strips";

import TheStrip from "./layout/the-strip";
import { Card, CardContent } from "./ui/card";

interface StripProps {
  id: number;
  url: string;
  bgcolour: string;
}

export default async function About() {
  const url = "/minnamartin";
  return (
    <div className="max-w-3xl py-5 border-b-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 pb-4">
        {
          StripMM.map((image: StripProps) => (
            <TheStrip key={image.id} {...image} />
          ))
        }
      </div>
      <h1 className="text-2xl font font-heading text-center pb-5">Opettajat</h1>
      <h2 className="text-xl font font-heading text-center pb-5">Minna Tuovinen & Martin Heslop</h2>
      <div className="grid grid-cols-1">

        <Card className="rounded-lg shadow-lg p-2">
          <CardContent>
            <h1 className="text-xl font-heading py-2 text-center">Yhdessä tanssimisen maaginen voima</h1>
            <p className="text-base p-2">Parisuhdetangon luojat ja kehittäjät Minna Tuovinen ja Martin Heslop ovat pitkänlinjan tanssitaiteiljoita. He ovat yhdessä luoneet yli 60 tanssiteosta, joista useat ovat olleet tilausteoksia kotimaisille ja ulkomaisille festivaaleille. Matka tangon pariin alkoi vuonna 2003, kun he vierailivat ensimmäistä kertaa Buenos Airesissa, ja siitä lähtien he ovat lähes 15 vuoden ajan palanneet kaupunkiin kerta toisensa jälkeen. Buenos Airesin milongot ja lukemattomat opettajat ovat olleet heille opastajina tangokulttuurin äärelle. Opettajina he ovat vaikuttaneet mm. Teatterikorkeakoulun tanssi-ja näytteijäntyönlaitoksilla. He ovat pitäneet tuhansia työpajoja Suomessa ja ympäri maailmaa. He ovat opettajina lämminhenkisiä, huumorintajuisia ja kannustavia. Heidän uskovat, että yhdessä tanssimisessa on maagista voimaa, joka rikastuttaa parisuhdetta ja elämää.</p>
          </CardContent>
        </Card>

      </div>
      <Link href={url}>
        <p className="underline py-5">Lue lisää Minnasta ja Martinista</p>
      </Link>
    </div>
  );
}
