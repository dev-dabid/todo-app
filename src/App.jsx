import { useState, useEffect } from "react";
import Header from "./components/Header";
import Button from "./components/Button";
import Form from "./components/Form";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleTask = (e) => {
    const text = e.target.value;
    setTask(text);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    setTaskList((prev) => [...prev, task]);
    setTask("");
    handleModal();
  };

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main>
      <Header />
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="pt container mx-auto max-w-7xl pt-10">
          <Button handleModal={handleModal} />
          {isOpen && (
            <Form
              task={task}
              handleTask={handleTask}
              handleSubmit={handleSubmit}
              handleModal={handleModal}
            />
          )}

          {taskList.map((task, index) => {
            return <p key={index}>{task}</p>;
          })}
        </div>
      </section>
    </main>
  );
};

export default App;
