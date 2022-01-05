import React from "react";
import { TextHoverableProps, ImageHoverableProps } from "./types";

export const TextHoverable: React.FC<TextHoverableProps> = (props: TextHoverableProps) => {
  const { text } = props;

  return (
    <div className="opacity-0 hover:opacity-100 duration-300 rounded-[15px] absolute inset-0 z-10 flex justify-center items-center text-white bg-indigo-500 text-lg text-center">
      {text}
    </div>
  );
};

const HotNews: React.FC<ImageHoverableProps> = (props: ImageHoverableProps) => {
  const { url, rounded, children } = props;

  return (
    <div className="relative">
      <img
        src={url}
        alt=""
        className={rounded ? "w-full h-full object-cover rounded-[15px]" : "w-full h-full"}
      />
      {children}
    </div>
  );
};

export default React.memo(HotNews);
