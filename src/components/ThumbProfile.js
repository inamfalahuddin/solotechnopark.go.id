import Image from "next/image";
import React from "react";
import thumb from "@/images/thumbnail.jpg";

function ThumbProfile() {
  return (
    <div className="bg-red-50 rounded-md overflow-hidden">
      <Image src={thumb} alt="thumbnail" />
    </div>
  );
}

export default ThumbProfile;
