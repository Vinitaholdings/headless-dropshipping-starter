const description =
  "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "MerchbyGoods";
const url = "https://MerchbyGoods.com";

const seo = {
  title,
  titleTemplate: "%s | Discover Unique Artistry",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@MerchbyGoods",
    site: "@MerchbyGoods",
  },
};

export { seo as defaultSEO, url as defaultUrl };
