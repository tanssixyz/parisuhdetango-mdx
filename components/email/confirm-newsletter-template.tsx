/* eslint-disable no-empty-pattern */
/* eslint-disable react-refresh/only-export-components */

import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { render } from "@react-email/render";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface ConfirmNewsletterTemplateProps {
  email: string;
  subject: string;

}

export function ConfirmNewsletterTemplate({
}: ConfirmNewsletterTemplateProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Tanssimaan jo ensiaskeleista: Matka yhteiseen tanssiin ilman suorituspaineita</Preview>
        <Body className="my-auto mx-auto font-sans px-2 bg-slate-100">
          <Container className="border border-solid border-slate-300 rounded my-[40px] mx-auto p-[20px] max-w-[500px]">
            <Section className="">
              <Img
                className="w-cover"
                alt="Improtango"
                width={500}
                src="https://parisuhdetango.fi/uutiskirje/hero-2.jpeg"
              />

            </Section>

            <Section className="mx-auto px-5">
              <Heading as="h1" className="font-bold text-xl leading-relaxed text-slate-900 text-center">
                Tanssimaan jo ensiaskeleista
              </Heading>
              <Text className="font-semibold text-sm text-slate-600 text-center">
                Matka yhteiseen tanssiin ilman suorituspaineita
                {" "}
              </Text>
              <Hr className="border border-solid border-slate-200 my-[26px] mx-0 w-full" />
              <section className="pl-5 pr-10">
                <Text className="text-base leading-5 text-slate-800">
                  Parisuhdetangossa ei opita tiettyjä askeleita tai suoriteta ennalta määrättyjä askelkuvioita. Sen sijaan, Parisuhdetango tarjoaa ainutlaatuisen mahdollisuuden syventyä yhteiseen tanssiin ja vuorovaikutukseen ilman suorituspaineita. Jokainen askel tämän tanssin polulla on itsessään tanssia, matka, joka kutsuu parit tutustumaan toisiinsa ja omaan kehoonsa aivan uudella tavalla.
                </Text>
                <Text className="text-base leading-5 text-slate-800">
                  Parisuhdetango ei perustu monimutkaisiin askelkuvioihin tai teknisiin suorituksiin. Sen sijaan, se koostuu yksinkertaisista harjoituksista, jotka tarjoavat mahdollisuuden syventää tietoisuutta kommunikaatiosta. Näissä harjoituksissa parit voivat keskittyä läsnäoloon ja toistensa kuunteluun, ilman että heidän tarvitsee miettiä seuraavaa askelta, sillä askel syntyy luonnollisesti parin hienovaraisesta vuoropuhelusta.
                </Text>
                <Text className="text-base leading-5 text-slate-800">
                  Tanssin flow ja yhteyden tunne syntyvät vähitellen, kun parit harjoittelevat yhdessä. Harjoitusten kautta parit oppivat tuntemaan toistensa kehon kieltä ja reagoimaan toistensa liikkeisiin luonnollisesti ja aidosti.
                </Text>
                <Text className="text-base leading-5 text-slate-800">
                  Parisuhdetangon kauneus piilee siinä, että jokainen pari voi edetä omassa tahdissaan ja nauttia tanssista heti ensimmäisestä harjoituksesta lähtien. Ei ole kiirettä oppia tiettyjä askelkuvioita tai saavuttaa tiettyä tasoa. Sen sijaan, parit voivat keskittyä nauttimaan yhteisestä tanssista ja syventämään keskinäistä yhteyttään.
                </Text>
                <Text className="text-base leading-5 text-slate-800">
                  Parisuhdetango edustaa modernia tapaa lähestyä tanssia. Se ei ole vain kokemus, vaan myös syvällinen tapa tutkia ihmissuhteita ja vuorovaikutusta. Parisuhdetangon harjoitukset tarjoavat tilan, jossa parit voivat oppia luottamaan toisiinsa, kuuntelemaan toisiaan ja löytämään yhteisen flown. Parisuhdetangossa korostuvat prosessi ja aito yhteys, ei lopputulos tai suoritus.
                </Text>
                <Text className="text-base leading-5 text-slate-800">
                  Parisuhdetangokurssille voi tulla ilman ennakko-odotuksia tai paineita. Se on mahdollisuus nauttia yhteisestä tanssista, löytää uusia tapoja kommunikoida ja olla läsnä kumppanin kanssa. Tule mukaan ja koe, miten Parisuhdetango voi rikastuttaa sekä tanssiasi että parisuhdettasi.
                </Text>
                <Text className="text-base leading-5 text-slate-800">
                  Tanssi on enemmän kuin vain liikettä - se on tie syvempään ymmärrykseen ja yhteyteen, sekä itsemme että muiden kanssa.
                </Text>
              </section>
              <Hr className="border border-solid border-slate-200 my-[26px] mx-0 w-full" />
              <section className="flex flex-col justify-center items-center mx-auto">
                <Heading as="h2" className="font-bold text-xl leading-relaxed text-slate-900 text-center mx-auto">
                  Marraskuun Parisuhdetangokurssi Helsingissä
                </Heading>
                <ul className="list-none">
                  <li>
                    <Text className="text-base leading-5 text-slate-800">
                      <strong>Aika:</strong>
                      {" "}
                      La 30.11 ja su 1.12.2024 klo 13-15
                    </Text>
                  </li>
                  <li>
                    <Text className="text-base leading-5 text-slate-800">
                      <strong>Hinta:</strong>
                      {" "}
                      120€/tanssipari
                    </Text>
                  </li>
                  <li>
                    <Text className="text-base leading-5 text-slate-800">Jazz Factory, Helsinki</Text>
                  </li>
                </ul>
              </section>
              <Section className="mt-6 flex justify-center items-center mb-5">
                <Link className="bg-indigo-800 text-white text-lg leading-4 py-1 px-2 rounded-lg max-w-[120px]" href="https://parisuhdetango.fi/ilmoittautuminen-11">
                  Ilmoittautuminen
                </Link>
              </Section>
            </Section>

            <Section className="mx-auto px-5 mt-10 text-center">
              <Text className="text-slate-400 text-xs leading-4 pl-5 pr-10">
                Saat tämän sähköpostin, koska olet tilannut Improtangon/Parisuhdetangon uutiskirjeen.
              </Text>

              <Link href="mailto:info@hyvinyhdessa.fi?subject=Haluan%20perua%20Improtango%20uutiskirjeen%20tilauksen&body=Haluan%20perua%20Improtango%20uutiskirjeen%20tilauksen." className="text-slate-400 text-xs leading-4 mr-3 mb-0 mt-2">
                poistu postituslistalta
                {" "}
              </Link>
              <Link href="https://parisuhdetango.fi/contact" className="text-slate-400 text-xs leading-4 mr-3 mb-0 mt-2">
                Ota meihin yhteyttä
              </Link>

              <Hr className="border border-solid border-slate-300 my-[26px] mx-0 w-full" />
              <section className="flex flex-col justify-center items-center mx-auto ">
                <Img width={111} src="https://parisuhdetango.fi/icons/icon-email.png" />
                <Text className="my-1 mx-0 text-sm leading-5 text-slate-400 font-bold font-mono">
                  ©️ HyvinYhdessä Ry | 2024
                </Text>
                <Text className="border-[#d6d9dc] text-xs leading-3 pl-1 pr-2 pt-1 pb-2 font-mono ml-8"></Text>
              </section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export function renderConfirmNewsletterTemplate({
  email,
  subject,
}: ConfirmNewsletterTemplateProps) {
  return render(<ConfirmNewsletterTemplate email={email} subject={subject} />);
}
