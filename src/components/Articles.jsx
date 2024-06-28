import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const article = [
    {
      head: "Reviving Retro PCs",
      text: "What happens when old PCs are given modern upgrades?",
      img: "/images/image-retro-pcs.jpg",
      num: "01",
    },
    {
      head: "Top 10 Laptops of 2022",
      text: "Our best picks for various needs and budgets.",
      img: "/images/image-top-laptops.jpg",
      num: "02",
    },
    {
      head: "The Growth of Gaming",
      text: "How the pandemic has sparked fresh opportunities.",
      img: "/images/image-gaming-growth.jpg",
      num: "03",
    },
  ];

  return (
    <div className="my-20 grid gap-8 md:my-0 md:grid-cols-3 lg:gap-2">
      {article.map((art) => (
        <ArticleCard
          img={art.img}
          text={art.text}
          head={art.head}
          num={art.num}
        />
      ))}
    </div>
  );
};

export default Articles;
