import React from "react";
import { BorderProps } from "./types";

const Border: React.FC<BorderProps> = (props: BorderProps) => {
  const { children } = props;
  return <div className="rounded-full">{children}</div>;
};

export default React.memo(Border);
