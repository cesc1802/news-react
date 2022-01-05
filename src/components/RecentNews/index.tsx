import React from "react";
import { RecentNewsProps } from "./types";

const RecentNews: React.FC<RecentNewsProps> = (props: RecentNewsProps) => {
  const { imgUrl, title, shortDesc, border, children } = props;
  return (
    <React.Fragment>
      <div className="flex p-2 hover:text-gray-500 cursor-pointer">
        {children}
        <div>
          <p className="font-bold text-lg mb-3 ">{title}</p>
          <p className="text-sm">{shortDesc}</p>
        </div>
      </div>
      {border ? <div className="border-b border-b-gray-200"></div> : null}
    </React.Fragment>
  );
};

export default React.memo(RecentNews);
