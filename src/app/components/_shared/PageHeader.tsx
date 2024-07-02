import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: any;
};

const PageHeader = (props: Props) => {
  return (
    <div className="relative w-full">
      <Image
        // src={"/assets/about-us.jpg"}
        src={props.image}
        // placeholder h and w
        height={"206"}
        width={"1000"}
        alt="About us"
        className="w-full max-h-[210px] object-cover"
      ></Image>

      {/* overlay */}
      <div className="overlay absolute top-0 left-0 h-full w-full bg-black opacity-45"></div>

      <div className="header-title lg:left-[10%] absolute top-1/2 left-0 px-6 -translate-y-1/2 mx-auto lg:w-5/6 w-full">
        {/* Page */}
        <h2 className="md:text-4xl text-2xl font-bolf text-white">
          {props.title}
        </h2>

        {/* breadcrumbs */}
        <div className="breadcrumbs md:block hidden mt-4">
          <Link href="/" className="text-gray-400">
            Home
          </Link>{" "}
          / <span className="text-white">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
