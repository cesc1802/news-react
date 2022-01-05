import React from "react";
import RecentNews from "../../components/RecentNews";
import { RecentNewsData } from "./types";

const HotRecentNews: React.FC = () => {
  return (
    <React.Fragment>
      <img
        className="w-[900px] h-[600px] object-cover"
        src="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
      />
      <div className="font-bold text-lg">
        Diễn văn công bố Triệu tập Công nghị TGP Hà Nội
      </div>
      <p className="text-sm">
        Diễn văn công bố Triệu tập Công nghị TGP Hà Nội, Diễn văn công bố Triệu
        tập Công nghị TGP Hà Nội, Diễn văn công bố Triệu tập Công nghị TGP Hà
        Nội. Diễn văn công bố Triệu tập Công nghị TGP Hà Nội, Diễn văn công bố
        Triệu tập Công nghị TGP Hà Nội, Diễn văn công bố Triệu tập Công nghị TGP
        Hà Nội.
        <p className="truncate">...</p>
      </p>
    </React.Fragment>
  );
};

const DividerHorizontal: React.FC = () => {
  return <div className="border border-l-gray-200 m-2"></div>;
};
const ListRecentNews: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="w-3/5 py-2 hover:text-gray-500 cursor-pointer">
          <HotRecentNews />
        </div>
        <DividerHorizontal />

        <div className="w-2/5">
          {RecentNewsData.map((recentNews, index) => {
            const { imgUrl, title, shortDesc, border } = recentNews;

            return (
              <RecentNews
                key={index}
                imgUrl={imgUrl}
                title={title}
                shortDesc={shortDesc}
                border={border}
              >
                <img className="w-32 h-24 object-cover mr-2" src={imgUrl}></img>
              </RecentNews>
            );
          })}
        </div>
      </div>
      {/* <div className="border-b border-b-gray-200"></div> */}
    </React.Fragment>
  );
};

export default React.memo(ListRecentNews);
