function TaskList() {
  // 1. Imagine this data came from a database
  const tasks = [
    { id: 1, text: "Learn JSX (Day 1)", done: true },
    { id: 2, text: "Master Components (Day 2)", done: true },
    { id: 3, text: "Understand Props (Day 3)", done: true },
    { id: 4, text: "Use State (Day 4)", done: true },
    { id: 5, text: "Map Lists & Keys (Day 5)", done: false },
    { id: 6, text: "Fetch APIs (Day 6)", done: false },
  ];

  return (
    <div className="task-list" style={{ textAlign: 'left', maxWidth: '400px', margin: '20px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>Bootcamp Progress</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        {/* 2. The Map Function! */}
        {tasks.map((task) => (
          // 3. The crucial "key" prop goes on the outermost element of the loop
          <li key={task.id} style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>
            {/* A quick "ternary operator" to show a checkmark or hourglass based on the boolean */}
            <span style={{ marginRight: '10px' }}>
              {task.done ? "✅" : "⏳"}
            </span>
            <span style={{ textDecoration: task.done ? 'line-through' : 'none', color: task.done ? 'gray' : 'black' }}>
              {task.text}
            </span>
          </li>
        ))}
        
      </ul>
    </div>
  );
}

export default TaskList;