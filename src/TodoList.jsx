import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
export default function TodoList(){
    let styles = {
        textDecoration: "line-through",
    };
    let [todos, setTodos] = useState([{task : "Sample Task", id :uuidv4(), isDone : false }]);
    let [newTodo, setNewTodo] = useState("");
    let addNewTAsk = ()=>{
        setTodos((prevTodos)=>{
            return [...prevTodos, {task : newTodo, id: uuidv4(),isDone : false }]
        });
        setNewTodo("");
    }
    let updateTodoValue= (event) => {
        setNewTodo(event.target.value);
    }
    let deleteTodo= (id)=>{
        setTodos((prevTodos)=>todos.filter((prevTodos)=> prevTodos.id != id));
    }
    let markAllAsDone = ()=>{
        setTodos((prevTodos)=>
            prevTodos.map((todo) => {
            return {
                    ...todo,
                    isDone:true,
                };
            
            })
            
        );
    };
    let upperCaseOne = (id)=>{
        setTodos((prevTasks)=>
        prevTasks.map((todo)=>{
            if(todo.id === id) {
                return {
                    ...todo,
                    task : todo.task.toUpperCase(),
                };
            } else{
                return todo;
            }
        })
        );
    };
    let markAsDone = (id)=>{
        setTodos((prevTasks)=>
        prevTasks.map((todo)=>{
            if(todo.id === id) {
                return {
                    ...todo,
                    isDone : true,
                };
            } else{
                return todo;
            }
        })
        );
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
                        <li key={todo.id}><span style={todo.isDone?{textDecorationLine: "line-through"}:{}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;
                        <button onClick={()=>{deleteTodo(todo.id)}}>Delete</button>
                        <button onClick={()=>{upperCaseOne(todo.id)}}>UpperCase</button>
                        <button onClick={()=>{markAsDone(todo.id)}}>Done</button></li>
                        
                        
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={markAllAsDone}>Mark All as Done</button>
        </div>
    )
}