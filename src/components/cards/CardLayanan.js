import Image from "next/image";
import React from "react";
import Card from "./Card";

function CardLayanan({ src, title, desc }) {
  return (
    <Card className="p-5 w-60">
      <div className="w-full h-52 mb-5 bg-purple-200 rounded-md overflow-hidden object-cover flex justify-center items-center">
        <img src={src} />
      </div>
      <h3 className="head-4 text-center capitalize w-52 mx-auto">{title}</h3>
      {/* <div className="mt-5">
        <p className="text-gray-500">{desc}</p>
      </div> */}
    </Card>
  );
}

export default CardLayanan;
