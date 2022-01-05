import React, { useMemo } from "react";
import HotNews, { TextHoverable } from "../../components/HotNews";

const ListHotNews: React.FC = () => {
  const hotNewsList = useMemo(
    () =>
      Array.from(Array(6), (_, i) => ({
        id: i++,
        imageURL: "https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg",
        displayText: "Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm",
      })),
    []
  );

  return (
    <div className="grid gap-3 grid-cols-3">
      {hotNewsList.map((news) => (
        <div key={news.id}>
          <HotNews url={news.imageURL} rounded={true}>
            <TextHoverable text={news.displayText} />
          </HotNews>
        </div>
      ))}
    </div>
  );
};

export default React.memo(ListHotNews);
