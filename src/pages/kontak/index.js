import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";
import HeroImage from "@/images/Foto-Web.webp";
import Image from "next/image";
import Card from "@/components/cards/Card";
import Button from "@/components/Button";

function Kontak() {
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
        <header className="bg-memphis bg-center bg-cover bg-slate-50">
          <Navbar />
          <div className="container grid lg:grid-cols-2 lg:h-[85vh]">
            <div className="flex flex-col justify-center items-start order-2 md:order-1 my-10">
              <h3 className="head-4 mb-2">
                Beranda <span className="text-primary-100">/</span> Kontak
              </h3>
              <h1 className="head-1">Kontak</h1>
            </div>
            <div className="flex items-center justify-end order-1 md:order-2">
              <Image className="w-full" src={HeroImage} alt="kontak image" />
            </div>
          </div>
        </header>

        <section>
          <div className="container py-20">
            <div className="grid grid-cols-1 grid-cols-2 gap-10">
              <div>
                <Card className={"shadow-lg p-10"}>
                  <div className="header border-b ">
                    <h4 className="uppercase text-lg font-medium text-gray-600">
                      Hubungi kami
                    </h4>
                    <h2 className="capitalize head-2 my-5">
                      Tidak bisa menemukan{" "}
                      <strong className="text-primary-100">informasi </strong>
                      yang Anda cari?
                    </h2>
                  </div>
                  <form>
                    <div className="my-5">
                      <label className="mb-2 block head-4 ">Nama</label>
                      <input
                        className="bg-slate-100 w-full outline-primary-100 block text-md py-3 px-4 rounded-full"
                        type={"text"}
                        placeholder="Masukan nama lengkap disini"
                      />
                    </div>
                    <div className="my-5">
                      <label className="mb-2 block head-4 ">Email</label>
                      <input
                        className="bg-slate-100 w-full outline-primary-100 block text-md py-3 px-4 rounded-full"
                        type={"email"}
                        placeholder="Masukan email disini"
                      />
                    </div>
                    <div className="my-5">
                      <label className="mb-2 block head-4 ">Judul</label>
                      <input
                        className="bg-slate-100 w-full outline-primary-100 block text-md py-3 px-4 rounded-full"
                        type={"text"}
                        placeholder="Tentang apa yang ingin anda tanyakan"
                      />
                    </div>
                    <div className="my-5">
                      <label className="mb-2 block head-4 ">Pesan</label>
                      <textarea
                        className="bg-slate-100 w-full outline-primary-100 block text-md py-3 px-4 rounded-lg"
                        type={"text"}
                        placeholder="Masukan pesan yang ingin anda sampaikan disini"
                      />
                    </div>
                    <Button
                      className={"gradient-to-right w-full hover:opacity-50"}
                    >
                      Kirim
                    </Button>
                  </form>
                </Card>
              </div>
              <div>
                <div className="header border-b ">
                  <h4 className="uppercase text-lg font-medium text-gray-600">
                    Hubungi kami
                  </h4>
                  <h2 className="capitalize head-2 my-5">
                    Tidak bisa menemukan{" "}
                    <strong className="text-primary-100">informasi </strong>
                    yang Anda cari?
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Kontak;
