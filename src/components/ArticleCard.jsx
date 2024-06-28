import React from "react";

const ArticleCard = ({ head, text, img, num }) => {
  return (
    <div className="flex gap-6">
      <img src={img} className="w-24" />
      <div className="flex flex-col justify-between">
        <p className="text-grayish-blue text-4xl font-bold">{num}</p>
        <h3 className="cursor-pointer text-xl font-extrabold transition-colors duration-300 hover:text-soft-red">
          {head}
        </h3>
        <p className="text-dark-grayish-blue"> {text}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
