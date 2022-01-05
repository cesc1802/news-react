import React from "react";
import CalendarSchedule from "../../components/CalendarSchedule";
import ListHostNews from "../list-hotnews";
import ListRecentNews from "../list-recent-news";
import Border from "../../components/Border";

function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full h-auto">
        <ListRecentNews />
      </div>

      <div className="flex flex-wrap w-full">
        <div className="w-3/5">
          <ListHostNews />
        </div>
        <div className="w-2/5">
          <CalendarSchedule />
        </div>
      </div>
    </div>
  );
}

export default Home;
