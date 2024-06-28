import React from "react";

const Button = ({ text }) => {
  return (
    <button className="hover:bg-very-dark-blue bg-soft-red px-8 py-4 text-[14px] font-bold uppercase tracking-[6px] text-Off-white transition-colors duration-300">
      {text}
    </button>
  );
};

export default Button;
