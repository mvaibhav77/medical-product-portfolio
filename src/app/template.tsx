import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const template = (props: Props) => {
  return (
    <div
      className={`${props.className ? props.className : ""}`}
      style={{ minHeight: "calc(100vh - 335px)" }}
    >
      {props.children}
    </div>
  );
};

export default template;
