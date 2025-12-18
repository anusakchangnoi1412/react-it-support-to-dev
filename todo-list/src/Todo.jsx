import { useState } from "react"
import { v4 as uuid } from "uuid"
function Todo() {
    const [input, setInput] = useState("")
    const [lists, setLists] = useState([])

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const addList = () => {
        setLists((prevData) => [
            ...prevData,
            { id: uuid(), list: input }
        ])
    }

    const delList = (id) => {
        setLists(prevData => {
            return prevData.filter(e => e.id !== id)
        }
        )
    }

    return (
        <div>
            <h1>TODO LIST</h1>
            {lists.map((e) => (
                <li onClick={() => delList(e.id)} key={e.id} > {e.list} </li>
            ))}

            <label htmlFor="listname" > Add a new List </label>
            <input type="text"
                name="list"
                id="list"
                value={input}
                onChange={handleChange}
            />
            <button onClick={addList}> Add List </button>
        </div>
    )
}

export default Todo