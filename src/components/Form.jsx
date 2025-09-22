const Form = ({ task, handleTask, handleSubmit, handleModal }) => {
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
          value={task}
          onChange={handleTask}
          required
        />
        <div className="flex gap-5">
          <button
            class="w-[5rem] rounded bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300"
            type="submit"
            onClick={handleModal}
          >
            cancel
          </button>
          <button
            class="w-[5rem] rounded bg-amber-400 px-4 py-2 text-gray-700 hover:bg-amber-500"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
