import React from "react";

function Card({ children, className }) {
  return (
    <div className={`${className} bg-white rounded-md my-5`}>{children}</div>
  );
}

export default Card;
