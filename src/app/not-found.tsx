import React from "react";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <main className="relative md:h-[65vh] h-[70vw] w-full">
      <h2 className="absolute text-primary top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        404: This page is not found.
      </h2>
    </main>
  );
};

export default NotFound;
