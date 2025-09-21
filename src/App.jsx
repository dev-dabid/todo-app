import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
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

  const handleEffect = () => {
    setIsTrue((prev) => !prev);
  };

  return (
    <main>
      <Header />
      <div className="pt container mx-auto max-w-7xl pt-10">
        <Button />
        <Form task={task} handleTask={handleTask} handleSubmit={handleSubmit} />
        {taskList.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </div>
    </main>
  );
};

export default App;
