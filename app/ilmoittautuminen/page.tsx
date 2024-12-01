import type { Metadata } from "next";

import TheStrip from "@/components/layout/the-strip";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { StripMM } from "@/lib/strips";

export const metadata: Metadata = {
  title: "Ilmoittautuminen",
};
function Signup() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
        {
          StripMM.map((image: { id: number; url: string; bgcolour: string }) => (
            <TheStrip key={image.id} {...image} />
          ))
        }
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Parisuhdetangokurssi</CardTitle>
          <CardDescription></CardDescription>
        </CardHeader>
        <CardContent>
          <p>Seuraava Parisuhdetangokurssi on ensi vuoden alussa. Tilaa uutiskirjeemme, niin pidämme sinut ajan tasalla</p>
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
      {/* <SignUpForm /> */}
    </main>
  );
}
export default Signup;
