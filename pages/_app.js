import "tailwindcss/tailwind.css";
import "../styles/index.css";
import Script from "next/script";
import { useEffect } from "react";
import { analytics } from "../utils/firebaseAnalytics";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    analytics;
  }, []);

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=G-R4T80V40DN`}
      />
      
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-R4T80V40DN')
        `}
      </Script>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
