import React from "react";
import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <React.Suspense>
        <Component {...pageProps} />;
      </React.Suspense>
    </RecoilRoot>
  );
}
