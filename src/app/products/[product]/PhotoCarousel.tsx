"use client";

import { ThemeProvider, Carousel } from "@material-tailwind/react";
import Image from "next/image";
import React, { useState } from "react";
import { Product } from "@/types/product";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import { FaMinus, FaPlus } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";

type Props = {
  product: Product;
};

const Controls = () => {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="tools absolute bottom-0 right-0 z-10">
      <button
        onClick={() => zoomIn()}
        className="btn md:px-6 md:py-4 p-2 bg-primary text-white border-[1px] border-white text-sm"
      >
        <FaPlus />
      </button>
      <button
        onClick={() => zoomOut()}
        className="btn md:px-6 md:py-4 p-2 bg-primary text-white border-[1px] border-white text-sm"
      >
        <FaMinus />
      </button>
      <button
        onClick={() => resetTransform()}
        className="btn md:px-6 md:py-4 p-2 bg-primary text-white border-[1px] border-white text-sm"
      >
        <FaUndo />
      </button>
    </div>
  );
};

const PhotoCarousel = (props: Props) => {
  return (
    <ThemeProvider>
      <Carousel
        className="rounded-xl"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {props.product.images.map((image, index) => (
          <div className="relative" key={index}>
            <TransformWrapper
              initialScale={1}
              initialPositionX={0}
              initialPositionY={0}
            >
              {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <>
                  <Controls />
                  <TransformComponent>
                    <Image
                      src={image}
                      alt={`Product Image ${index + 1}`}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover"
                    />
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </div>
        ))}
      </Carousel>
    </ThemeProvider>
  );
};

export default PhotoCarousel;
