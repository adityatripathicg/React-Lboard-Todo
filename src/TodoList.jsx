import { useState } from "react"

export default function TodoList(){
    let [todos, setTodos] = useState(["Sample Task"]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTAsk = ()=>{
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
    let updateTodoValue= (event) => {
        setNewTodo(event.target.value);
    }
    return(
        <div>
            <input type="text" placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}/>
            <br />
            <button onClick={addNewTAsk}>Add Task</button>
            <br /><br /><br /><br /><br /><hr />
            <h4>Todo List</h4>
            <ul>
                {
                    todos.map((todo)=>(
                        <li>{todo}</li>
                    ))
                }
            </ul>
        </div>
    )
}