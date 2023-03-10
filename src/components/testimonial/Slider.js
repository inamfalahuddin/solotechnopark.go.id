import Image from "next/image";
import React from "react";

function Slider({ src, title, office, desc }) {
  return (
    <div className="bg-white shadow-lg border-t mb-20 mx-2 lg:mx-5 rounded-lg p-5 lg:grid grid-cols-4 gap-10 cursor-grab">
      <div className="text-center">
        <div className="bg-gray-300 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mx-auto">
          <img src={src} />
        </div>
        <h4 className="font-bold text-sm mt-5 mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{office}</p>
      </div>
      <div className="col-span-3 flex items-center paragraph">
        <p>
          {" "}
          <strong className="text-4xl"> &quot; </strong> {desc}{" "}
          <strong className="text-xl"> &quot; </strong>
        </p>
      </div>
    </div>
  );
}

export default Slider;
