const Form = ({ task, handleTask, handleSubmit }) => {
  return (
    <div className="flex justify-center align-middle">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter a task"
          className="border-2"
          type="text"
          value={task}
          onChange={handleTask}
        />
        <button className="p-2.5 bg-amber-100 shadow-2xs" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
