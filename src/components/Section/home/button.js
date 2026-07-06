import React from "react";

function Button({name, ...rest}) {
  return (
    <button
      type="button"
      className=" bg-gradient-to-r from-red-600 via-rose-600 to-red-700 hover:from-red-500 hover:to-rose-600 font-medium rounded-3xl text-sm px-5 md:px-9 py-3.5 text-center mr-2 mb-2 text-white transition-all"
      {...rest}
    >
      {name}
    </button>
  );
}

export default Button;
