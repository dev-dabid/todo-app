import { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleTask = (e) => {
    const text = e.target.value;
    setTask(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList((prev) => [...prev, task]);
    setTask("");
  };

  return (
    <div>
      <Form task={task} handleTask={handleTask} handleSubmit={handleSubmit} />
      {taskList.map((task, index) => {
        return <p key={index}>{task}</p>;
      })}
    </div>
  );
};

export default App;
