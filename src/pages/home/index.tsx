import React from "react";
import CalendarSchedule from "../../components/CalendarSchedule";
import ListHostNews from "../list-hotnews";
import ListRecentNews from "../list-recent-news";

function Home() {
  return (
    <>
      <ListRecentNews />
      <div className="flex flex-wrap">
        <div className="w-3/5">
          <ListHostNews />
        </div>
        <div className="w-2/5">
          <CalendarSchedule />
        </div>
      </div>
    </>
  );
}

export default Home;
