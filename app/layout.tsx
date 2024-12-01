import type { Metadata } from "next";

import Image from "next/image";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/site-footer";

import "./globals.css";

import { SiteHeader } from "@/components/layout/site-header";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/env";
import { siteConfig } from "@/lib/constants";
import { fontMono, fontSans, heading } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";

export const metadata: Metadata = {
  title: {
    template: `%s - ${siteConfig.name}`,
    default: siteConfig.name, // a default is required when creating a template
  },
  description: siteConfig.description,
  category: "Dance",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Tanssi",
    "Tanssikurssit",
    "Kulttuurihyvinvointi",
    "Tango",
    "Improtango",
    "Parisuhde",
    "Pariskunta",
  ],
  authors: [
    {
      name: "Martin Heslop",
      url: "https://improtango.com",
    },
    {
      name: "Minna Tuovinen",
      url: "https://improtango.fi",
    },
  ],
  creator: "Martin Heslop",
  publisher: "Hyvinyhdessä Ry",
  metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://parisuhdetango.fi/og/og-1.jpg",
        width: 1800,
        height: 1052,
        alt: "image",
      },
      {
        url: "https://parisuhdetango.fi/og/og-alt.jpg",
        width: 1800,
        height: 1052,
        alt: "Parisuhdetango alt Image",
      },
    ],
    locale: "fi_FI",
    type: "website",
  },
  icons: {
    icon: [{ url: "/icons/favicon-32x32.png" }, new URL("/icons/favicon-32x32.png", "https://info.improtango.fi")],
    shortcut: ["/shortcut-icon.png"],
    apple: [
      { url: "/icons/apple-touch-icon.png" },
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon-precomposed.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fi" suppressHydrationWarning>
      <body
        className={cn("min-h-screen  font-sans antialiased", fontSans.variable, fontMono.variable, heading.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteHeader />
          <main className="min-h-screen flex flex-col items-center justify-center">{children}</main>
          <SiteFooter />
        </ThemeProvider>

        <Image
          height={1}
          width={1}
          className="hidden"
          alt=""
          src="https://www.facebook.com/tr?id=3551742235106411&ev=PageView&noscript=1"
        />
        <Toaster />
      </body>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
      >
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '3551742235106411');
          fbq('track', 'PageView');
        `}
      </Script>
    </html>
  );
}
