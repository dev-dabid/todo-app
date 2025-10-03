import { useState } from "react";

const Note = ({ name, description, date, time, category }) => {
  const formatDate = (rawDate, locale = "en-US") => {
    if (!rawDate) return "";
    const date = new Date(rawDate);
    return new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(date);
  };

  const formatTime = (time) => {
    if (!time) return "";
    const [hour, minute] = time.split(":");
    const date = new Date();
    date.setHours(hour, minute);
    return new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const color = () => {
    switch (category) {
      case "work":
        return "text-blue-500";
      case "study":
        return "text-indigo-500";
      case "personal":
        return "text-green-500";
      case "health":
        return "text-red-500";
      case "hobby":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="relative rounded-[10px] border-1 border-solid border-amber-300 p-[clamp(15px,2vw,20px)]">
      <h2 className="max-w-[22ch] pb-3 text-xl font-medium break-words">
        {name}
      </h2>
      <p className="w-full max-w-prose pb-10 break-all whitespace-normal">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className={`${color()} font-semibold underline`}>{category}</div>
        <div className="flex gap-2">
          {time && (
            <div className="rounded-2xl bg-amber-500 px-2">
              <p className="h-full text-center text-xs text-white">
                {formatTime(time)}
              </p>
            </div>
          )}

          {date && (
            <div>
              <p className="rounded-2xl bg-amber-500 px-2 text-xs text-white">
                {formatDate(date)}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Note;
