import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function AddTaskPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "todo",
    dueDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      alert("Title is required");
      return;
    }

    await fetch("http://localhost:3001/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    router.push("/");
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-xl font-bold mb-4">Add New Task</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Title *</label>
            <input
              name="title"
              type="text"
              required
              value={formData.title}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Enter task title"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              rows="3"
              placeholder="Optional description"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Due Date</label>
            <input
              name="dueDate"
              type="date"
              value={formData.dueDate}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div className="flex gap-4 mt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Save Task
            </button>
            <Link
              href="/"
              className="text-gray-600 hover:underline self-center"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
