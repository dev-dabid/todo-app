const Form = ({ task, handleTask, handleSubmit, handleModal }) => {
  const { name, description, date, time, category } = task;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form
        className="relative w-[90%] max-w-md rounded-2xl bg-white p-4 shadow-2xl sm:p-6 md:p-8"
        onSubmit={handleSubmit}
      >
        {/* Task input */}
        <input
          className="mb-4 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
          placeholder="Enter a task"
          type="text"
          name="name"
          value={name}
          onChange={handleTask}
          required
        />

        {/* Description */}
        <textarea
          className="mb-4 h-20 w-full rounded-lg border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none sm:h-24 sm:px-4 sm:py-3 sm:text-base"
          placeholder="Enter description (Optional)"
          name="description"
          value={description}
          onChange={handleTask}
        />

        {/* Date + Time */}
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <div className="flex-1">
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              type="date"
              name="date"
              value={date}
              onChange={handleTask}
            />
          </div>
          <div className="flex-1">
            <input
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
              type="time"
              name="time"
              value={time}
              onChange={handleTask}
            />
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <select
            name="category"
            value={category}
            onChange={handleTask}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-700 focus:border-amber-400 focus:ring-2 focus:ring-amber-200 focus:outline-none sm:px-4 sm:py-3 sm:text-base"
          >
            <option value="">Select category</option>
            <option value="work">Work</option>
            <option value="study">Study</option>
            <option value="hobby">Hobby</option>
            <option value="personal">Personal</option>
            <option value="health">Health</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-4">
          <button
            type="button"
            className="w-[5rem] rounded bg-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300 sm:px-4 sm:py-2 sm:text-base"
            onClick={handleModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[5rem] rounded bg-amber-400 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-amber-500 sm:px-4 sm:py-2 sm:text-base"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
