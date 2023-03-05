import Image from "next/image";
import React from "react";

function CardSektor({ src, title, desc }) {
  return (
    <div className="py-5">
      <Image className="mx-auto" src={src} alt={src} width={65} />
      <h3 className="text-xl font-bold my-5">{title}</h3>
      <p>
        Mekanik dan Desain Manufaktur Pengelasan (General & Under Water) Otomasi
        Oil and Gas Training
      </p>
    </div>
  );
}

export default CardSektor;
