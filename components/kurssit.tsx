import Link from "next/link";

import { StripTwo } from "@/lib/strips";
import { cn } from "@/lib/utils";

import TheStrip from "./layout/the-strip";
import { buttonVariants } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

interface StripProps {
  id: number;
  url: string;
  bgcolour: string;
}

export default async function Kurssit() {
  const url = "/ilmoittautuminen";
  return (
    <div className="max-w-3xl py-5 border-b-2">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6 pb-4">
        {
          StripTwo.map((image: StripProps) => (
            <TheStrip key={image.id} {...image} />
          ))
        }
      </div>
      <h1 className="text-2xl font font-heading text-center pb-5">Kurssit</h1>
      <h2 className="text-xl font font-heading text-center pb-5">Seurava Parisuhdetangokurssi</h2>
      <div className="grid grid-cols-1">

        <Card className="rounded-lg shadow-lg p-2">
          <CardContent>
            <p className="text-base p-2">Tule mukaan Parisuhdetango-kurssille ja anna itsellesi mahdollisuus löytää tasapaino, flow ja syvempi yhteys kumppanisi kanssa. Tanssin kautta voimme avata oven uudenlaiseen ymmärrykseen ja läheisyyteen, joka rikastuttaa elämäämme ja parisuhdettamme.</p>
            <p className="text-base p-2 font-semibold">Jazz Factory, Helsinki</p>
            <p className="text-base p-2">
              <strong>Hinta:</strong>
              {" "}
              120€/tanssipari
            </p>
            <p className="text-base p-2">
              <strong>Aika:</strong>
              {" "}
              La 30.11. ja su 1.12.2024 klo 13-15
            </p>
          </CardContent>
          <CardFooter>
            <Link href={url} className={cn("w-full", buttonVariants({ variant: "default" }))}>Ilmoittaudu kurssille</Link>
          </CardFooter>
        </Card>

      </div>
    </div>
  );
}
