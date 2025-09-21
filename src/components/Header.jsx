import { useState, useEffect } from "react";

const Header = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const month = months[date.getMonth()];
  const dMonth = date.getDate();
  const day = days[date.getDay()];

  const hours =
    date.getHours() % 12 < 10
      ? "0" + (date.getHours() % 12)
      : date.getHours() % 12;
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  const merId = date.getHours() < 12 ? "AM" : "PM";

  return (
    <div className="header flex bg-amber-400 p-2.5">
      <div className="container mx-auto max-w-7xl">
        <div className="flex justify-between">
          <div>
            <h1 className="text-[clamp(1.5rem,5vw,3rem)] font-bold text-white">
              Planner
            </h1>
          </div>
          <div className="flex items-center">
            <h1 className="text-[clamp(0.7rem,2vw,2rem)] font-bold">
              {hours}: {minutes} {merId} | {day}, {month} {dMonth}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
