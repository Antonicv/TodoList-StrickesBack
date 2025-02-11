import { useState } from "react";

export default function ToDo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };


  return (
    <>
      <h2>To-Do List</h2>
      <section>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New Task"
        />
        <button onClick={addTask}>Add Task</button>
      </section>
      <ul>
        {tasks.map((task, index) => (
          <ul key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            {task.text}
            <button onClick={() => deleteTask(index)}>❌</button>
          </ul>
        ))}
      </ul>
    </>
  );
}
