// A simple local array acting as a temporary memory database
let mockTodos = [
  { _id: "1", title: "Learn Docker", completed: false },
  { _id: "2", title: "Deploy to Azure", completed: false }
];

// Base root message
const baseRoot = (req, res) => {
  res.send("✅ Backend server is running smoothly in Mock Mode!");
};

// Get all todos
const getTodos = async (req, res) => {
  try {
    res.status(200).json(mockTodos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const newTodo = {
      _id: Date.now().toString(), // Generate a unique temporary ID
      title: req.body.title,
      completed: false
    };
    mockTodos.push(newTodo);
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    mockTodos = mockTodos.filter(todo => todo._id !== id);
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  baseRoot,
  getTodos,
  createTodo,
  deleteTodo
};