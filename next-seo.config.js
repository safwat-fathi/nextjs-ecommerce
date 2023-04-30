/** @type {import('next-seo').DefaultSeoProps} */
const SEO = {
  titleTemplate: "Website Title | %s",
  defaultTitle: "Website default title",
  description: "Website default description",
  themeColor: "#000",
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
    siteName: "SiteName",
  },
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "summary_large_image",
  },
};

module.exports = SEO;
