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

interface ConfirmTemplateProps {
  email: string;
  firstname: string;
  subject: string;

}

export function ConfirmTemplate({
  firstname,
  subject,
}: ConfirmTemplateProps) {
  const previewText = `${subject}`;
  return (
    <Html>
      <Head>
        <title>{subject}</title>
      </Head>
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-zinc-50 font-sans px-2">

          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <section className="mt-[32px]">
              <Img
                src="https://parisuhdetango.fi/icons/parisuhdetango-logo.png"
                alt="Parisuhdetango"
                width="400"
                className="my-0 mx-auto"
              />
            </section>
            <Heading className="text-black text-[12px] font-normal text-center p-0 my-[30px] mx-0">
              <strong>Syvennetään vuoropuhelua yhdessä oman kumppanin kanssa</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{subject}</strong>
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Hei
              {" "}
              {firstname}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">Kiitos kiinnostuksestasi Parisuhdetangoa kohtaan! Tässä vain tiedoksi, että olemme ottaneet vastaan ilmoittautumisesi. Lähetämme maksutiedot tähän sähköpostiin lähipäivinä. Jos et saa meiltä viestiä, tarkista roskapostisi.</Text>
            <Text className="text-black text-[14px] leading-[24px]">Ystävällisin terveisin</Text>
            <Text className="text-black text-[14px] leading-[24px]">Martin Heslop</Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />

            <Section className="mt-4 text-center text-zinc-400">
              <Text className="text-black text-[14px] leading-[24px]">
                Voit lukea lisää
                {" "}
                <Link href="https://parisuhdetango.fi" className="text-blue-600 underline">
                  Parisuhdetangosta
                </Link>
                {" "}
                verkkosivuiltamme.
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="mb-0 mt-4">
                @ Parisuhdetango
                {" "}
                {new Date().getFullYear()}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

export function renderConfirmTemplate({
  firstname,
  email,
  subject,
}: ConfirmTemplateProps) {
  return render(<ConfirmTemplate email={email} subject={subject} firstname={firstname} />);
}
