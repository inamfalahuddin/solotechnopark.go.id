import React from "react";

function Slider({ src, title, office }) {
  return (
    <div className="bg-white shadow-lg border-t mb-20 mx-2 lg:mx-5 rounded-lg p-5 lg:grid grid-cols-4 gap-10 cursor-grab">
      <div className="text-center">
        <div className="bg-gray-300 w-24 h-24 rounded-full overflow-hidden flex items-center justify-center mx-auto">
          image
        </div>
        <h4 className="font-bold text-sm mt-5 mb-2">Muhammad Adi Faringga</h4>
        <p className="text-sm text-gray-600">
          Welding Manufaktur, Angkatan 2019 Bekerja di PT Astra Honda Motor
        </p>
      </div>
      <div className="col-span-3 flex items-center paragraph">
        <p>
          “Selama mengikuti Diklat di Solo Technopark saya mendapat banyak
          ketrampilan, skill, dan keahlian yang bermanfaat untuk masa depan
          sebagai tenaga kerja Skill yang saya pelajari selama Diklat welding
          manufaktur di Solo Technopark sangat berguna dan Bukan hanya itu, saya
          juga dilatih untuk disiplin, teamwork dan menjaga attitude yang dimana
          semua itu sangat diperlukan di dunia kerja.”
        </p>
      </div>
    </div>
  );
}

export default Slider;
