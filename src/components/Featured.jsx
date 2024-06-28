import React from "react";
import Button from "./Button";

const Featured = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="hidden md:block">
        <img src="/images/image-web-3-desktop.jpg" alt="images" />
      </div>
      <div className="md:hidden">
        <img src="/images/image-web-3-mobile.jpg" alt="images" />
      </div>
      <div className="grid h-full gap-4 lg:grid-cols-2">
        <h1 className="text-5xl leading-[1.2] font-extrabold md:text-6xl">
          The Bright Future of Web 3.0?
        </h1>

        <div className="flex flex-col">
          <p className="text-dark-grayish-blue mb-6 xl:mb-12">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="mb-20">
            <Button text="Read More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
