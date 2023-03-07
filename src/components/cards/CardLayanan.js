import React from "react";
import Card from "./Card";

function CardLayanan({ src, title }) {
  return (
    <Card className="p-5 w-60">
      <div className="w-full h-52 mb-5 bg-purple-200 rounded-md overflow-hidden object-cover flex justify-center items-center">
        hai
      </div>
      <h3 className="head-4 text-center capitalize w-52 mx-auto">{title}</h3>
    </Card>
  );
}

export default CardLayanan;
