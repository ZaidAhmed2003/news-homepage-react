import React from "react";

const New = () => {
  const data = [
    {
      head: "Hydrogen VS Electric Cars",
      text: "Will hydrogen-fueled cars ever catch up to EVs?",
      hasline: true,
    },
    {
      head: "The Downsides of AI Artistry",
      text: "What are the possible adverse effects of on-demand AI image generation?",
      hasline: true,
    },
    {
      head: "Is VC Funding Drying Up?",
      text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
      hasline: false,
    },
  ];

  return (
    <div className="bg-very-dark-blue flex min-w-96 flex-col gap-6 p-8">
      <h1 className="text-5xl font-semibold text-soft-orange">New</h1>
      <div>
        {data.map((news) => (
          <div key={news.head}>
            <h1 className="mb-2 cursor-pointer text-[22px] font-bold text-Off-white transition-colors duration-300 hover:text-soft-orange">
              {news.head}
            </h1>
            <p className="text-grayish-blue">{news.text}</p>

            {news.hasline && (
              <hr className="bg-dark-grayish-blue my-8 h-px border-0" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
