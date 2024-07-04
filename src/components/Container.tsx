import React, { ReactElement } from "react";

type Props = {
  children?: ReactElement | ReactElement[] | string;
  className?: string;
};

const Container = (props: Props) => {
  return (
    <div
      className={`container mx-auto lg:w-4/5 w-100 px-2 md:px-6 ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Container;
