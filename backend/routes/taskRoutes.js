const express = require("express");
const { AppDataSource } = require("../data-source");
const taskRepo = AppDataSource.getRepository("Task");

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await taskRepo.find();
  res.json(tasks);
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const task = await taskRepository.findOneBy({ id: req.params.id });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "Error fetching task", error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { title, description, status, dueDate } = req.body;
  if (!title || !status) {
    return res.status(400).json({ message: "Title and status required" });
  }
  const task = taskRepo.create({ title, description, status, dueDate });
  const result = await taskRepo.save(task);
  res.status(201).json(result);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const task = await taskRepo.findOneBy({ id });
  if (!task) return res.status(404).json({ message: "Task not found" });
  Object.assign(task, req.body);
  const updated = await taskRepo.save(task);
  res.json(updated);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const result = await taskRepo.delete({ id });
  if (result.affected === 0) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.status(204).send();
});

module.exports = router;
