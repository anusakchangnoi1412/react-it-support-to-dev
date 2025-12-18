export default function TaskList({ tasks, onDone, onProcess, onDelete }) {
    return (
        <div className="task-tab">
            {tasks.map(task => (
                <div className="table-row" key={task.id}>
                    <h3 className={task.done ? "task-done" : ""}>
                        {task.data}
                    </h3>

                    <div className="actions">
                        <button onClick={() => onDone(task.id)}>
                            {task.done ? "Undo" : "Done"}
                        </button>
                        <button
                            disabled={task.done}
                            onClick={() => onDelete(task.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}