import React from "react";
import CalendarSchedule from "../../components/calendar-schedule";
import ListHostNews from "../list-hotnews";
import ListRecentNews from "../list-recent-news";
function Home() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-auto">
        <ListRecentNews />
      </div>

      <div className="flex">
        <ListHostNews />
        <CalendarSchedule />
      </div>
    </div>
  );
}

export default Home;
