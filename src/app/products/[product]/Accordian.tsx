"use client";

import { Product } from "@/types/product";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ThemeProvider,
} from "@material-tailwind/react";
import React from "react";

type Props = {
  product: Product;
};

function Icon({ id, open }: { id: number; open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

const Accordian = (props: Props) => {
  // const [open, setOpen] = React.useState(1);

  // const handleOpen = (value: number) => setOpen(open === value ? 0 : value);
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc2, setOpenAcc2] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc2 = () => setOpenAcc2((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  return (
    <ThemeProvider>
      {/* Description */}
      <Accordion
        open={openAcc1}
        placeholder={undefined}
        icon={<Icon id={1} open={openAcc1} />}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={handleOpenAcc1}
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="bg-secondary px-4 "
        >
          Description{" "}
        </AccordionHeader>
        <AccordionBody className="px-4 text-xl">
          {props.product.description}
        </AccordionBody>
      </Accordion>

      {/* Therapy Area */}
      <Accordion
        open={openAcc2}
        placeholder={undefined}
        icon={<Icon id={2} open={openAcc2} />}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <AccordionHeader
          onClick={handleOpenAcc2}
          placeholder={""}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
          className="bg-secondary px-4 "
        >
          Therapy Area
        </AccordionHeader>
        <AccordionBody className="px-4 text-xl">
          {props.product.therapyArea}
        </AccordionBody>
      </Accordion>
    </ThemeProvider>
  );
};

export default Accordian;
