import Event from "@/components/Event";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Pagination from "@/components/Pagination";
import navigateState from "@/recoil/atoms/navigateAtom";
import Head from "next/head";
import React, { useEffect } from "react";
import { useSetRecoilState } from "recoil";

function Berita() {
  const setNavigation = useSetRecoilState(navigateState);

  useEffect(() => {
    setNavigation("berita");
  }, []);

  return (
    <>
      <Head>
        <title>solotechnopark.go.id</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://solotechnopark.id/wp-content/uploads/2021/09/Solo-Tecno.png"
        />
      </Head>
      <main>
        <Navbar />
        <section>
          <div className="container pt-10 pb-20">
            <div className="flex flex-wrap justify-center md:gap-10">
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
              <Event />
            </div>
            <div className="flex justify-center">
              <Pagination />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Berita;
