import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"
import TaskList from "./TaskList"
import './TaskM.css'

export default function TaskM() {
    const [task, setTask] = useState(() => {
        const savedTasks = localStorage.getItem("task")
        return savedTasks ? JSON.parse(savedTasks) : []
    })
    const [input, setInput] = useState('')

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(task))
    }, [task])

    //เพิ่ม
    const addT = () => {
        if (!input.trim()) {
            return
        }
        setTask((inputData) => [
            ...inputData,
            { id: uuid(), data: input, done: false }
        ])

        setInput('')
    }

    

    const markAsdone = (id) => {
        setTask((prevData) => prevData.map(
            task => task.id === id ? { ...task, done: !task.done } : task,
        ))
    }

    const inProcess = (id) => {
        
    }

    //ลบ
    const delData = (id) => {
        setTask(prevData => {
            return prevData.filter(i => i.id !== id)
        })
    }


    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return (
        <div>
            <div className="container">
                <div className="table" >
                    <h2 style={{ padding: "1px", margin: "5px" }} >All Task</h2>
                    <TaskList
                        tasks={task}
                        onDone={markAsdone}
                        onProcess={inProcess}
                        onDelete={delData}
                    />
                </div>

            </div>
            <input
                type="text"
                name="addtask"
                id="addTask"
                value={input}
                onChange={handleChange}
                placeholder="Type your task here"
                onKeyDown={(e) => e.key === "Enter" && addT()}
            />
            <button onClick={() => addT()} > Add Task </button>

        </div>
    )
}