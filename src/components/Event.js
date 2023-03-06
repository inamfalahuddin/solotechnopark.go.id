import React from "react";
import Card from "./cards/Card";

function Event() {
  return (
    <Card className="p-0 shadow-lg border-t max-w-xs overflow-hidden hover:shadow-sm transition-all cursor-pointer">
      <div className="bg-primary-100 w-full h-52">hai</div>
      <div className="p-5">
        <h4 className="capitalize head-4">
          Pembukaan Pendaftaran Diklat APBD di Solo Technopark
        </h4>
        <span className="text-sm text-gray-600 mt-2 mb-4 inline-block">
          29 November 2022
        </span>
        <p className="text-gray-700 text-sm">
          Attention Techno Fellas! Siapa di sini yang sudah menantikan Diklat
          APBD di Solo Technopark? Good news nih buat kalian, karena Diklat APBD
          di Solo Technopark sudah dibuka! Saat
        </p>
      </div>
    </Card>
  );
}

export default Event;
