import { Icon } from "@material-ui/core";
import React from "react";
import NavBar from "../nav-bar";

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img
        className="w-[90px] h-24"
        src="https://www.tonggiaophanhanoi.org/wp-content/uploads/2020/12/logo_150-80x85.png"
      ></img>
      <div className="flex flex-col items-center">
        <div className="ml-5 text-red-400 font-bold text-xl">
          Giáo Xứ Hà Hồi
        </div>
        <div className="ml-5 text-amber-300">Hà Hồi Parish</div>
      </div>
    </div>
  );
};

const MenuBar: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row py-4 items-center">
        <div className="basis-3/12">
          <Logo />
        </div>
        <div className="basis-8/12">
          <NavBar />
        </div>
        <div className="1/12">
          <Icon>search</Icon>
        </div>
      </div>
      <div className="w-auto h-10 bg-indigo-700 border-b-2 border-b-amber-500"></div>
    </div>
  );
};

export default React.memo(MenuBar);
