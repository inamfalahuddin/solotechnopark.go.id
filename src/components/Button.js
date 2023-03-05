import React from "react";

function Button({ children, onclick, className }) {
  return (
    <button
      className={`${className} py-2 md:py-3 px-5 md:px-7 rounded-full transition-all`}
      onClick={onclick}
    >
      {children}
    </button>
  );
}

export default Button;
