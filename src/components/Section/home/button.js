import React from "react";

function Button({name, ...rest}) {
  return (
    <button
      type="button"
      className="bg-gradient-to-r from-brand-600 via-brand-500 to-accent-violet hover:from-brand-500 hover:to-indigo-600 font-medium rounded-3xl text-sm px-6 md:px-8 py-3.5 text-center mr-2 mb-2 text-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
      {...rest}
    >
      {name}
    </button>
  );
}

export default Button;
