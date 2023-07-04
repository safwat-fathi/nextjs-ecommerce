/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  titleTemplate: "dontbuy | %s",
  defaultTitle: "Don't Buy",
  description: "An E-commerce template",
  themeColor: "#f53d57",
  additionalMetaTags: [
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
  openGraph: {
    type: "website",
    locale: "ar",
    url: "https://www.url.ar/",
    siteName: "dontbuy",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

export default SEO;
