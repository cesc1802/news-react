import React from "react";
import { BorderProps, BorderType } from "./types";

const Border: React.FC<BorderProps> = (props: BorderProps) => {
  const { type, children } = props;

  const classNames = BorderType[type] + " overflow-hidden w-72 h-72";

  return <div className={classNames}>{children}</div>;
};

export default React.memo(Border);
