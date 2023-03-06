import React from "react";
import Button from "../Button";
import Card from "./Card";

function CardEvent() {
  return (
    <Card
      className={
        "border grid grid-cols-1 md:grid-cols-7 gap-5 shadow-lg my-2 hover:shadow-sm transition-all overflow-hidden"
      }
    >
      <div className="col-span-7 md:col-span-3 bg-primary-100 overflow-hidden">
        hai
      </div>
      <div className="col-span-4 p-5">
        <h4 className="font-bold capitalize text-primary-100">
          Diklat, pelatihan
        </h4>
        <h2 className="head-4">
          Pembukaan Pendaftaran Diklat APBD di Solo Technopark
        </h2>
        <p className="text-gray-600 my-4 ">18 November 2022</p>
        <Button className={"border hover:bg-primary-100 hover:text-white"}>
          Info Detail
        </Button>
      </div>
    </Card>
  );
}

export default CardEvent;
