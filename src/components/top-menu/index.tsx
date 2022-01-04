import React from "react";
import { TopMenuData } from "./types";
const TopMenu: React.FC = () => {
  return (
    <div className="flex w-auto p-4 justify-center bg-amber-200">
      {TopMenuData.map((menu) => (
        <div className="text-indigo-500 mr-10 font-bold">{menu.name}</div>
      ))}
    </div>
  );
};

export default React.memo(TopMenu);
