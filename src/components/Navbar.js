import Image from "next/image";
import React, { useState } from "react";
import LogoSTP from "@/images/Logo-Technopark-Remake-Solo-1.webp";
import ArrowDown from "@/images/down-arrow-svgrepo-com.svg";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const onClickHamburger = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`z-40 py-10 ${isOpen ? "fixed" : ""}`}
      style={{ zIndex: 999 }}
    >
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <Image src={LogoSTP} alt="Logo STP" width={180} />
        </Link>
        {/* Navigate */}
        <div
          className="p-3 rounded-full bg-slate-50 lg:hover:bg-slate-50 cursor-pointer transition-all md:hidden right-5 fixed z-50"
          onClick={onClickHamburger}
        >
          <div className="w-6 h-6 flex flex-col items-center justify-between">
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${
                isOpen ? "rotate-45 translate-y-3" : null
              }`}
            ></span>
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${
                isOpen ? "opacity-0" : null
              }`}
            ></span>
            <span
              className={`bg-gray-900 h-1 w-full rounded-sm transition-all ${
                isOpen ? " -rotate-45 -translate-y-2" : null
              }`}
            ></span>
          </div>
        </div>
        <div
          className={`text-md bg-gray-50 md:bg-transparent fixed md:relative left-0 right-0 top-0 bottom-0 flex flex-col md:flex-row justify-center md:justify-between items-center gap-5 p-5 transition-all ${
            isOpen ? "translate-x-[0%]" : "translate-x-[100%] md:translate-x-0"
          }
          }`}
        >
          <Link
            className="px-3  transition-all hover:text-primary-100 font-bold text-primary-100"
            href={"/"}
          >
            Beranda
          </Link>
          <Link
            className="px-3  transition-all hover:text-primary-100"
            href={"/profil"}
          >
            Profil
          </Link>
          <span className=" px-3 transition-all cursor-pointer">
            <button
              className="flex items-center justify-between hover:text-primary-100 gap-3 mx-auto"
              onMouseMove={() => {
                setDropdown(true);
              }}
            >
              <span>Layanan</span>
              <Image
                className="hidden md:inline-block"
                width={14}
                src={ArrowDown}
                alt="layanan"
              />
            </button>
            <div
              className={`text-center lg:text-start lg:absolute lg:bg-white flex flex-col gap-5 lg:p-3 lg:rounded-md lg:shadow-md mt-4 ${
                dropdown ? "flex" : "hidden"
              }`}
              onMouseLeave={() => setDropdown(false)}
            >
              <Link
                className="px-3  transition-all hover:text-primary-100"
                href={"/"}
              >
                Layanan Teknis
              </Link>
              <Link
                className="px-3  transition-all hover:text-primary-100"
                href={"/"}
              >
                Layanan Pengembangan Teknologi
              </Link>
              <Link
                className="px-3  transition-all hover:text-primary-100"
                href={"/"}
              >
                Layanan Inkubasi Bisnis
              </Link>
              <Link
                className="px-3  transition-all hover:text-primary-100"
                href={"/"}
              >
                Layanan Pendukung
              </Link>
            </div>
          </span>
          <Link
            className="px-3  transition-all hover:text-primary-100"
            href={"/event"}
          >
            Event
          </Link>
          <Link
            className="px-3  transition-all hover:text-primary-100"
            href={"/kontak"}
          >
            Kontak
          </Link>
          <Link
            className="px-3 lg:pr-0 transition-all hover:text-primary-100"
            href={"/berita"}
          >
            Berita
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
