import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WishlistProvider>
      <Header>
      <DefaultSeo {...defaultSEO} />
      </Header>
        <Component {...pageProps} />
      <Footer />
    </WishlistProvider>
  );
}

export default MyApp;
