const Form = ({ task, handleTask, handleSubmit, handleModal }) => {
  const { name, description, date, time } = task;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form
        className="relative w-[90%] max-w-md rounded-2xl bg-white p-6 shadow-2xl"
        onSubmit={handleSubmit}
      >
        <input
          className="mb-4 w-full border-2 p-2"
          placeholder="Enter a task"
          type="text"
          name="name"
          value={name}
          onChange={handleTask}
          required
        />
        <textarea
          className="mb-4 h-20 w-full border-2 p-2"
          placeholder="Enter description (Optional)"
          name="description"
          value={description}
          onChange={handleTask}
        />
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <input
              className="w-full border-2 p-2"
              type="date"
              name="date"
              value={date}
              onChange={handleTask}
            />
          </div>
          <div className="flex-1">
            <input
              className="w-full border-2 p-2"
              type="time"
              name="time"
              value={time}
              onChange={handleTask}
            />
          </div>
        </div>
        <div className="flex justify-end gap-5">
          <button
            type="button"
            className="w-[5rem] rounded bg-gray-200 px-4 py-2 font-medium text-gray-700 hover:bg-gray-300"
            onClick={handleModal}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-[5rem] rounded bg-amber-400 px-4 py-2 font-medium text-gray-700 hover:bg-amber-500"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
