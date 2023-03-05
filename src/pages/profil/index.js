// import styles from "@/styles/Home.module.css";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import Card from "@/components/Card";
import CardSektor from "@/components/CardSektor";
import ImageProfile from "@/images/Mas-Yudith.webp";
import Dinto from "@/images/Dinto.webp";
import KawasanSTP from "@/images/Kawsan-STP-6.png";
import BaganWeb from "@/images/Bagan-Web-3-b.png.webp";
import IconCheck from "@/images/check.svg";
import ProfileUPTD from "@/images/profil-uptd.webp";
import SejarahBerdiri from "@/images/Sejarah-2-1536x798.png.webp";
import Image from "next/image";
import Mitra from "@/components/Mitra";
import CardLayanan from "@/components/CardLayanan";
import Testimonial from "@/components/Testimonial";
import Event from "@/components/Event";
import Footer from "@/components/Footer";

export default function Profile() {
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
        <header className="bg-mega-mendung bg-right-top bg-cover">
          <Navbar />
          <div className="container lg:h-[88vh] pb-20 grid lg:grid-cols-2">
            <div className="mx-auto flex flex-col justify-center items-start">
              <h4 className="uppercase text-lg font-medium text-gray-600">
                Profil{" "}
              </h4>
              <h2 className="capitalize head-2 my-5">
                Kelembagaan
                <strong className="text-primary-100"> Solo Technopark</strong>
              </h2>
              <p className="paragraph">
                Sebagai Unit Pelaksana Teknis Badan (UPTB) pada BAPPEDA Kota
                Surakarta, berdasarkan Peraturan Walikota No. 13 Tahun 2009
                Tanggal 19 Agustus 2009
              </p>
              <p className="paragraph">
                Menerapkan Pola Pengelolaan Keuangan Badan Layanan Umum Daerah
                (PPK-BLUD) berdasarkan Surat Keputusan Walikota Surakarta No.
                900/65/1/2009 Tanggal 31 Desember 2009
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Image className="w-full" src={ProfileUPTD} alt="flow" />
            </div>
          </div>
        </header>

        <section className="bg-body-5 bg-no-repeat bg-cover">
          <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="mx-auto flex flex-col justify-center items-start">
                <h2 className="capitalize head-2 mt-5">Visi</h2>
                <p className="paragraph">
                  Menjadi kawasan terpadu dunia industri, perguruan tinggi,
                  riset dan teknologi serta kewirausahaan berbasis teknologi dan
                  inovasi bagi industri kecil menengah dalam rangka peningkatan
                  daya saing dan pertumbuhan ekonomi daerah. Peran media
                  mensupport semua aktivitas di Solo Technopark tersebut.
                </p>
                <h2 className="capitalize head-2 mt-5">Misi</h2>
                <ul className="my-5">
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alrt="check" />
                    <span>
                      Melaksanakan upaya peningkatan kesejahteraan masyarakat
                      melalui peningkatan kompetensi sumber daya manusia dan
                      penguasaan iptek.
                    </span>
                  </li>
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alrt="check" />
                    <span>
                      Menumbuhkembangkan perusahaan pemula berbasis teknologi
                      khususnya yang mendukung potensi lokal.
                    </span>
                  </li>
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alrt="check" />
                    <span>
                      Membangun budaya inovatif, transfer teknologi, semangat
                      kewirausahaan dan standar mutu untuk meningkatkan daya
                      saing.
                    </span>
                  </li>
                  <li className="flex items-start gap-5 my-5">
                    <Image src={IconCheck} alrt="check" />
                    <span>
                      Mengembangkan potensi ekonomi dan meningkatkan daya tarik
                      investasi.
                    </span>
                  </li>
                </ul>
              </div>
              <Image className="w-full" src={BaganWeb} alt="flow" />
            </div>
          </div>
        </section>

        <section className="bg-secondary-100">
          <div className="container text-center py-20 lg:py-20">
            <h2 className="head-3 uppercase text-center mx-auto">
              Sejarah Berdirinya Solo Technopark
            </h2>
            <Image src={SejarahBerdiri} alt="sejarah berdiri stp" />
          </div>
        </section>

        <section>
          <div className="container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="col-span-2 mx-auto flex flex-col justify-center items-start">
                <h4 className="uppercase text-lg font-medium text-gray-600">
                  Leadership{" "}
                </h4>
                <h2 className="capitalize head-2 mt-5">
                  Direksi Solo Technopark
                </h2>
                <p className="paragraph">
                  Pertama dan yang utama, kita patut bersyukur atas karunia
                  Tuhan yang telah memberikan kita kesehatan dan kemudahan dalam
                  menjalankan aktifitas kita dengan sebaik-baiknya.
                </p>
                <p className="paragraph">
                  Dalam perkembangan teknologi dan inovasi yang terus melesat,
                  Solo Technopark memberikan fasilitas sebuah kawasan yang bisa
                  dimanfaatkan untuk diisi dengan kegiatan produktif.
                </p>
                <p className="paragraph">
                  Terlebih lokasi kami yang berada berdekatan dengan beberapa
                  perguruan tinggi, kami sangat berharap para mahasiswa bisa
                  berinovasi dengan maksimal.
                </p>
                <p className="paragraph">
                  Kami juga mengajak perusahaan-perusahaan swasta, usaha mikro,
                  menegah dan kecil (UMKM) turut serta berkembang dan maju
                  bersama di Solo Technopark.
                </p>
                <p className="paragraph">
                  Semoga apa yang menjadi harapan kami dapat terwujud dengan
                  beberapa program yang kami adakan di dalam Solo Technopark.
                </p>
              </div>
              <div className="ml-auto mr-0 flex flex-col justify-center items-center">
                <div className="bg-primary-100 w-60 rounded-lg overflow-hidden flex justify-center items-center">
                  <Image src={ImageProfile} alt="image profile" />
                </div>
                <div className="text-center my-5">
                  <h4 className="head-4">Yudit Cahyantoro N.S</h4>
                  <span>Pemimpin UPT Solo Technopark</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-secondary-100">
          <div className="container pt-20 pb-10">
            <div className="flex flex-wrap  justify-evenly items-center">
              <div className="my-5">
                <div className="w-72 rounded-md overflow-hidden flex border-b-4 border-primary-100 justify-center items-center ">
                  <Image src={Dinto} alrt="check" />
                </div>
                <div className="text-center my-5">
                  <h4 className="head-4">Christian Ardinto</h4>
                  <span>Pejabat Teknis Pelayanan & Pengembangan</span>
                </div>
              </div>
              <div className="my-5">
                <div className="w-72 rounded-md overflow-hidden flex border-b-4 border-primary-100 justify-center items-center ">
                  <Image src={Dinto} alrt="check" />
                </div>
                <div className="text-center my-5">
                  <h4 className="head-4">Christian Ardinto</h4>
                  <span>Pejabat Teknis Pelayanan & Pengembangan</span>
                </div>
              </div>
              <div className="my-5">
                <div className="w-72 rounded-md overflow-hidden flex border-b-4 border-primary-100 justify-center items-center ">
                  <Image src={Dinto} alrt="check" />
                </div>
                <div className="text-center my-5">
                  <h4 className="head-4">Christian Ardinto</h4>
                  <span>Pejabat Teknis Pelayanan & Pengembangan</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className=" bg-no-repeat bg-cover bg-center bg-body-1">
          <div className="container py-20 flex flex-col justify-end items-center">
            <Image className="pt-10" src={KawasanSTP} alt="kawasan STP" />

            <span className="lg:absolute right-96 z-0">
              <h2 className="head-3 font-normal text-primary-100 italic text-center lg:max-w-sm">
                Where <strong>Competence Innovation, Technology,</strong> and{" "}
                <strong>Bussines Grow</strong>
              </h2>
            </span>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
