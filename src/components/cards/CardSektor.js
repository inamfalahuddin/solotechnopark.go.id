import Image from "next/image";
import React from "react";

function CardSektor({ src, title, desc }) {
  return (
    <div className="py-5">
      <img className="mx-auto" src={src} alt={src} width={65} />
      <h3 className="text-xl font-bold my-5">{title}</h3>
      <ul>
        {console.log(desc)}
        {desc.map((data, i) => {
          return <li key={i}>{data}</li>;
        })}
      </ul>
    </div>
  );
}

export default CardSektor;
