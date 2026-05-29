const express = require("express");
const router = express.Router();

// 1. CHANGED 'title' TO 'task' so your initial items display on your screen!
let mockTodos = [
  { _id: "1", id: "1", task: "Learn Docker Setup", completed: false },
  { _id: "2", id: "2", task: "Verify Full-Stack Connection", completed: false },
  { _id: "3", id: "3", task: "Database Bypassed Successfully", completed: false }
];

// 2. FETCH ALL Tasks
router.get("/get", (req, res) => {
  res.status(200).json(mockTodos);
});

// 3. ADD NEW TASK (Saves under the exact layout the UI reads)
router.post("/new", (req, res) => {
  try {
    console.log("Frontend payload received:", req.body);

    const newTodo = {
      _id: Date.now().toString(),
      id: Date.now().toString(),
      // Explicitly captures 'task' first, then looks for alternatives
      task: req.body.task || req.body.title || req.body.text || "Untitled Task",
      completed: false
    };

    mockTodos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 4. DELETE TASK
router.delete("/delete/:id", (req, res) => {
  try {
    const { id } = req.params;
    mockTodos = mockTodos.filter(todo => todo._id !== id && todo.id !== id);
    res.status(200).json({ message: "Todo deleted successfully", id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 5. UPDATE/TOGGLE TASK
const handleUpdate = (req, res) => {
  try {
    const { id } = req.params;
    mockTodos = mockTodos.map(todo => 
      (todo._id === id || todo.id === id) ? { ...todo, ...req.body } : todo
    );
    const updatedTodo = mockTodos.find(todo => todo._id === id || todo.id === id);
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
router.put("/update/:id", handleUpdate);
router.patch("/update/:id", handleUpdate);

module.exports = router;