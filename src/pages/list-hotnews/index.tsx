import React from "react";
import HotNews, { TextHoverable } from "../../components/HotNews";

const ListHotNews: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="">
        <HotNews
          url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
          rounded={true}
        >
          <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
        </HotNews>
      </div>

      <div className="">
        <HotNews
          url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
          rounded={true}
        >
          <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
        </HotNews>
      </div>

      <div className="">
        <HotNews
          url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
          rounded={true}
        >
          <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
        </HotNews>
      </div>

      <div className="">
        <HotNews
          url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
          rounded={true}
        >
          <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
        </HotNews>
      </div>

      <div className="">
        <HotNews
          url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
          rounded={true}
        >
          <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
        </HotNews>
      </div>

      <div className="">
        <HotNews
          url="https://www.tonggiaophanhanoi.org/wp-content/uploads/2022/01/101303-ta-on-3.jpg"
          rounded={true}
        >
          <TextHoverable text="Tạ ơn công bố thành lập tân giáo xứ Thanh Lãm" />
        </HotNews>
      </div>
    </div>
  );
};

export default React.memo(ListHotNews);
