import React, { useMemo, useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks_manager", []);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  function addTask(e) {
    e.preventDefault();
    if (!text.trim()) return;
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      done: false,
    };
    setTasks((prev) => [newTask, ...prev]);
    setText("");
  }

  function toggleTask(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  const filteredTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((t) => !t.done);
    if (filter === "completed") return tasks.filter((t) => t.done);
    return tasks;
  }, [tasks, filter]);

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-3">Task Manager (Local)</h2>

      {/* Add Task Form */}
      <form className="flex gap-2 mb-4" onSubmit={addTask}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-2 rounded border dark:bg-gray-700"
        />
        <Button type="submit">Add</Button>
      </form>

      {/* Filter Buttons */}
      <div className="flex gap-2 mb-4">
        {["all", "active", "completed"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1 rounded ${
              filter === f
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between p-2 rounded border dark:border-gray-700"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className={task.done ? "line-through opacity-70" : ""}>
                {task.text}
              </span>
            </div>
            <Button variant="secondary" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="mt-4 text-sm opacity-70">No tasks — add one above.</p>
      )}
    </Card>
  );
}
