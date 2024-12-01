import { ContactForm } from "./email/contact-email-form";
import { NewsletterForm } from "./email/newsletter-form";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default async function Contact() {
  return (
    <div className="py-5">
      <h1 className="text-2xl font-heading text-center pb-5">Contact</h1>
      <div className="grid lg:grid-cols-2 gap-3">
        <Card className="flex flex-col rounded-lg shadow-lg p-2">
          <CardHeader>
            <CardTitle>Tilaa uutiskirjeemme</CardTitle>
          </CardHeader>
          <CardContent><NewsletterForm /></CardContent>
          <CardContent className="">
            <p className="font-bold py-5">Yhteystiedot</p>
            <p>Sähköposti:</p>
            <p>info@parisuhdetango.fi</p>
            <p>Puhelin:</p>
            <p>+358 45 321 9411</p>
          </CardContent>
        </Card>
        <Card className="flex flex-col rounded-lg shadow-lg p-2">
          <CardHeader>
            <CardTitle>Contact</CardTitle>
          </CardHeader>
          <CardContent><ContactForm /></CardContent>
        </Card>
      </div>
    </div>
  );
}
