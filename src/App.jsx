import { useState, useEffect } from "react";
import Header from "./components/Header";
import Time from "./components/Time";
import Button from "./components/Button";
import Form from "./components/Form";
import Note from "./components/Note";

const App = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    date: "",
    time: "",
    category: "",
  });
  const [taskList, setTaskList] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const handleTask = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") return;
    setTaskList((prev) => [...prev, task]);
    setTask({
      name: "",
      description: "",
      date: "",
      time: "",
    });
    handleModal();
    console.log(taskList);
  };

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <main>
      <Header />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Time />
        <div className="pt mx-auto max-w-7xl pt-10">
          <Button handleModal={handleModal} />
          {isOpen && (
            <Form
              task={task}
              handleTask={handleTask}
              handleSubmit={handleSubmit}
              handleModal={handleModal}
            />
          )}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {taskList.map((task, index) => {
              return (
                <Note
                  key={index}
                  name={task.name}
                  description={task.description}
                  date={task.date}
                  time={task.time}
                  category={task.category}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default App;
