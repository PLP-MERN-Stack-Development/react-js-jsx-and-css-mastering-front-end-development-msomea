import React, { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

const PAGE_SIZE = 10;

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [q, setQ] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      const stored = localStorage.getItem("tasks_manager");
      const data = stored ? JSON.parse(stored) : [];
      setTasks(data);
    } catch (err) {
      console.error("Failed to load tasks from localStorage:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  // simple search across text field
  const filtered = tasks.filter((t) =>
    t.text.toLowerCase().includes(q.toLowerCase())
  );

  const total = Math.ceil(filtered.length / PAGE_SIZE);
  const pageItems = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <Card>
      <h2 className="text-xl font-semibold mb-3">Your Tasks (Local)</h2>

      <div className="flex gap-2 mb-4">
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
          placeholder="Search task text..."
          className="flex-1 p-2 rounded border dark:bg-gray-700"
        />
        <Button
          onClick={() => {
            setQ("");
            setPage(1);
          }}
        >
          Clear
        </Button>
      </div>

      {loading && <p>Loading...</p>}

      <ul className="space-y-3">
        {pageItems.map((task) => (
          <li key={task.id} className="p-3 border rounded flex justify-between">
            <div>
              <h3 className="font-semibold">
                {task.text}
              </h3>
              <p className="text-sm opacity-70">
                Status: {task.done ? "✅ Completed" : "🕓 Active"}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && !loading && (
        <p className="mt-4 text-sm opacity-70">No tasks saved locally yet.</p>
      )}

      <div className="flex items-center gap-2 mt-4">
        <Button
          variant="secondary"
          onClick={() => setPage((s) => Math.max(1, s - 1))}
          disabled={page === 1}
        >
          Prev
        </Button>
        <div className="text-sm">
          Page {page} / {total || 1}
        </div>
        <Button
          variant="secondary"
          onClick={() => setPage((s) => Math.min(total || 1, s + 1))}
          disabled={page === total || total === 0}
        >
          Next
        </Button>
      </div>
    </Card>
  );
}
