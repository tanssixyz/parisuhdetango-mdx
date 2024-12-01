export type SiteConfig = typeof siteConfig;

interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

const links = {
  facebook: "https://facebook.com/parisuhdetango",
  instagram: "https://instagram.com/parisuhdetango",
  github: "https://github.com/tanssixyz",
};

export const siteConfig = {
  name: "Parisuhdetango",
  description:
    "Parisuhdetangossa kehitetään ja syvennetään vuoropuhelua ja kommunikaatiota yhdessä oman kumppanin kanssa. Se on rento tapa viettää aikaa yhdessä, vahvistaa yhteyden tunnetta ja läheisyyttä ja luo tilaa  yhdessä jakamisen kokemuksille.",
  url: "https://parisuhdetango.fi",
  ogImage: "https://parisuhdetango.fi/og/hero-5.webp",
  links,
  footerNav: [
    {
      title: "Improtango",
      items: [

        {
          title: "Improtango-opetus",
          href: "https://info.improtango.fi",
          external: true,
        },
        {
          title: "Improtango Company",
          href: "https://improtango.fi",
          external: true,
        },
      ],
    },
    {
      title: "Hyvinyhdessä Ry",
      items: [
        {
          title: "Hyvinyhdessä",
          href: "https://hyvinyhdessa.fi",
          external: true,
        },
      ],
    },
    {
      title: "Help",
      items: [
        {
          title: "About",
          href: "/about",
          external: false,
        },
        {
          title: "Yhteystiedot",
          href: "/#contact",
          external: false,
        },
      ],
    },
    {
      title: "Social",
      items: [
        {
          title: "Facebook",
          href: links.facebook,
          external: true,
        },
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },

      ],
    },
  ] satisfies FooterItem[],

};
