import { useState } from "react";

const Note = ({
  id,
  name,
  description,
  date,
  time,
  category,
  handleDelete,
}) => {
  const [modal, setModal] = useState(false);

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
      case "Work":
        return "text-blue-500";
      case "Study":
        return "text-indigo-500";
      case "Personal":
        return "text-green-500";
      case "Health":
        return "text-red-500";
      case "Hobby":
        return "text-purple-500";
      default:
        return "text-gray-500";
    }
  };

  const onDelete = () => {
    handleDelete(id);
    setModal((prev) => !prev);
  };

  return (
    <div
      className="relative rounded-[10px] border-1 border-solid border-amber-300 p-[clamp(15px,2vw,20px)]"
      date-id={id}
    >
      <button
        className="absolute right-5 cursor-pointer"
        title="delete"
        onClick={(e) => setModal((prev) => !prev)}
      >
        <svg
          className="w-6 text-red-500"
          viewBox="0 -5 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
          fill="none"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <title>delete</title> <desc>Created with Sketch Beta.</desc>
            <defs> </defs>
            <g
              id="Page-1"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
              sketch:type="MSPage"
            >
              <g
                id="Icon-Set"
                sketch:type="MSLayerGroup"
                transform="translate(-516.000000, -1144.000000)"
                fill="currentColor"
              >
                <path
                  d="M538.708,1151.28 C538.314,1150.89 537.676,1150.89 537.281,1151.28 L534.981,1153.58 L532.742,1151.34 C532.352,1150.95 531.718,1150.95 531.327,1151.34 C530.936,1151.73 530.936,1152.37 531.327,1152.76 L533.566,1154.99 L531.298,1157.26 C530.904,1157.65 530.904,1158.29 531.298,1158.69 C531.692,1159.08 532.331,1159.08 532.725,1158.69 L534.993,1156.42 L537.232,1158.66 C537.623,1159.05 538.257,1159.05 538.647,1158.66 C539.039,1158.27 539.039,1157.63 538.647,1157.24 L536.408,1155.01 L538.708,1152.71 C539.103,1152.31 539.103,1151.68 538.708,1151.28 L538.708,1151.28 Z M545.998,1162 C545.998,1163.1 545.102,1164 543.996,1164 L526.467,1164 L518.316,1154.98 L526.438,1146 L543.996,1146 C545.102,1146 545.998,1146.9 545.998,1148 L545.998,1162 L545.998,1162 Z M543.996,1144 L526.051,1144 C525.771,1143.98 525.485,1144.07 525.271,1144.28 L516.285,1154.22 C516.074,1154.43 515.983,1154.71 515.998,1154.98 C515.983,1155.26 516.074,1155.54 516.285,1155.75 L525.271,1165.69 C525.467,1165.88 525.723,1165.98 525.979,1165.98 L525.979,1166 L543.996,1166 C546.207,1166 548,1164.21 548,1162 L548,1148 C548,1145.79 546.207,1144 543.996,1144 L543.996,1144 Z"
                  id="delete"
                  sketch:type="MSShapeGroup"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
      <h2 className="max-w-[22ch] pb-3 text-xl font-medium break-words">
        {name}
      </h2>
      <p className="w-full max-w-prose pb-10 break-all whitespace-normal text-gray-600">
        {description === "" ? "No description" : description}
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
        {modal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
            <div className="flex h-40 w-70 flex-col items-center justify-center gap-10 rounded-xs border border-amber-300 bg-white">
              <p className="text-2xl">Delete this note?</p>
              <div className="flex justify-center gap-7">
                <button
                  className="rounded-xs bg-amber-400 px-[25px] py-[10px] font-bold text-white"
                  onClick={(e) => onDelete(id)}
                >
                  Yes
                </button>
                <button
                  className="rounded-xs bg-gray-400 px-[25px] py-[10px] font-bold text-white"
                  onClick={() => setModal((prev) => !prev)}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Note;
