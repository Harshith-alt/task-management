import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.error("Failed to load tasks:", err));
  }, []);

  const deleteTask = async (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this task?");
    if (!confirmDelete) return;

    try {
      await fetch(`http://localhost:3001/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (err) {
      console.error("Failed to delete task:", err);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Task Manager</h1>

        <div className="mb-4">
          <Link
            href="/add"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Add New Task
          </Link>
        </div>

        <div className="space-y-4">
          {tasks.length === 0 ? (
            <p className="text-gray-600">No tasks available.</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-semibold">{task.title}</h2>
                {task.description && (
                  <p className="text-gray-700">{task.description}</p>
                )}
                <p className="text-sm text-gray-500">Status: {task.status}</p>
                {task.dueDate && (
                  <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
                )}

                <div className="mt-2 flex gap-4">
                  <Link
                    href={`/edit/${task.id}`}
                    className="text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="text-red-600 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
