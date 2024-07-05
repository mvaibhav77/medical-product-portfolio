"use client";

import { ThemeProvider, Carousel } from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  images: StaticImageData[] | string[];
};

const MainCarousel = (props: Props) => {
  return (
    <ThemeProvider>
      <Carousel
        className="w-full h-full max-h-[500px] bg-secondary overflow-hidden"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        autoplay={true}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-primary" : "w-6 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {props.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Product Image ${index + 1}`}
            width={2000}
            height={2000}
            className="h-full w-full opacity-90 object-contain lg:top-1/2 lg:-translate-y-1/2"
          />
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

export default MainCarousel;
