import React from "react";
import Image from "next/image";
import IconKominfo from "@/images/kominfo.png";

function Mitra() {
  return (
    <div className="bg-white rounded-lg p-5 border">
      <Image src={IconKominfo} alt="logo mitra" width={75} />
    </div>
  );
}

export default Mitra;
