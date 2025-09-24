const Note = ({ name, description, date, time, category }) => {
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

  return (
    <div className="relative rounded-lg border-2 border-solid border-amber-300 p-[clamp(2px,2vw,20px)]">
      <div className="absolute top-[-2px] right-[-2px] rounded-tr-lg bg-amber-100 px-[clamp(2px,5vw,10px)] py-[clamp(1px,2vw,2px)] text-[clamp(1rem,2vw,1.5rem)] text-white">
        {category === "" ? "None" : category}
      </div>
      <h2 className="max-w-[22ch] pb-3 text-xl font-medium break-words underline">
        {name}
      </h2>
      <p className="pb-5">{description}</p>
      <div className="flex w-full justify-between">
        <p>{date}</p>
        <p>{formatTime(time)}</p>
      </div>
    </div>
  );
};

export default Note;
