import React from "react";
import HotNews, { TextHoverable } from "../../components/hot-news";

const ListHotNews: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="py-1 pr-1">
          <HotNews
            url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
            rounded={true}
          >
            <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
          </HotNews>
        </div>

        <div className="py-1 pr-1">
          <HotNews
            url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
            rounded={true}
          >
            <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
          </HotNews>
        </div>

        <div className="py-1 pr-1">
          <HotNews
            url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
            rounded={true}
          >
            <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
          </HotNews>
        </div>
      </div>

      <div className="flex">
        <div className="py-1 pr-1">
          <HotNews
            url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
            rounded={true}
          >
            <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
          </HotNews>
        </div>

        <div className="py-1 pr-1">
          <HotNews
            url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
            rounded={true}
          >
            <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
          </HotNews>
        </div>

        <div className="py-1 pr-1">
          <HotNews
            url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
            rounded={true}
          >
            <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
          </HotNews>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ListHotNews);
