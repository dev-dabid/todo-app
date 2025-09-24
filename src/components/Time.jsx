import { useState, useEffect } from "react";

const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setDate(new Date());
    const now = new Date();
    const msUntilNextMinute =
      (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    const timeout = setTimeout(() => {
      updateTime();
      interval = setInterval(updateTime, 60000);
    }, msUntilNextMinute);

    let interval;

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
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
    date.getHours() % 12 === 0
      ? 12
      : date.getHours() % 12 < 10
        ? "0" + (date.getHours() % 12)
        : date.getHours() % 12;
  const minutes =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();

  const merId = date.getHours() < 12 ? "AM" : "PM";
  return (
    <div>
      <h1 className="pt-5 text-center text-[clamp(1rem,2vw,2rem)] font-light text-gray-600">
        {hours}:{minutes} {merId} | {day}, {month} {dMonth}
      </h1>
    </div>
  );
};

export default Time;
