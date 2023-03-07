import "@/styles/globals.css";
import { RecoilRoot } from "recoil";
import "tailwindcss/tailwind.css";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />;
    </RecoilRoot>
  );
}
