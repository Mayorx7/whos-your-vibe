import { useState } from "react";

// Define the shape of a todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const Todo = () => {
  // State to hold the list of todos
  const [todos, setTodos] = useState<Todo[]>([]);

  // State to hold the current input value
  const [input, setInput] = useState("");

  // Function to add a new todo
  const addTodo = () => {
    // Don't add empty todos
    if (input.trim() === "") return;

    // Create a new todo object and add it to the list
    const newTodo: Todo = {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);

    // Clear the input field
    setInput("");
  };

  // Function to toggle a todo's completed status
  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Handle Enter key press to add todo
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") addTodo();
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Main card container */}
      <div className="w-full max-w-md bg-card rounded-xl shadow-lg border border-border p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold text-foreground text-center mb-6">
          ✅ Todo List
        </h1>

        {/* Input and Add button */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Add a new todo..."
            className="flex-1 h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            onClick={addTodo}
            className="h-10 px-4 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Add
          </button>
        </div>

        {/* Todo list */}
        <ul className="space-y-2">
          {todos.length === 0 && (
            <p className="text-center text-muted-foreground text-sm">
              No todos yet. Add one above!
            </p>
          )}

          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between gap-2 p-3 rounded-lg bg-muted/50 border border-border"
            >
              {/* Todo text — click to toggle complete */}
              <span
                onClick={() => toggleTodo(todo.id)}
                className={`flex-1 cursor-pointer text-sm select-none ${
                  todo.completed
                    ? "line-through text-muted-foreground"
                    : "text-foreground"
                }`}
              >
                {todo.text}
              </span>

              {/* Delete button */}
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-xs px-2 py-1 rounded bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-colors"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
