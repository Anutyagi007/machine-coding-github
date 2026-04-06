import React, { useEffect, useState } from 'react'
import './Todo.css'

const Todo = () => {
    const [input, setInput] = useState('');
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);

    const handleClick = () => {
        if(input.trim() !== '') {
            const id = Date.now();
            const newTodo = {
                id,
                text: input,
                isCompleted: false,
            }
            setTodos([...todos, newTodo]);
            setInput('');
        }
    }

    const handleDelete = (id) => {
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
    };
    console.log(todos);
    useEffect(()=> {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
  return (
    <div>
        <h2>Todo Component</h2>
        <div className='input-div'>
            <input className='todo-input' type="text" placeholder='Add a Todo' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button className='add-task' onClick={handleClick}>Add Task</button>
        </div>
        <div className='todos-div'>
            {
                todos.map((todo) => {
                    return <ul key={todo.id}>
                        <li className={`${todo.isCompleted ? 'completed' : ''}`} onClick={()=>setTodos((todos) => todos.map((t) => t.id === todo.id ? {...t, isCompleted : true} : t))}>{todo.text}<button className='btn'>completed</button> <button className='btn' onClick={()=>handleDelete(todo.id)}>delete</button></li>  
                    </ul>
                })
            }
        </div>
    </div>
  )
}

export default Todo