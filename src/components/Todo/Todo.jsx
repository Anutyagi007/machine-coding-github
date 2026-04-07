import React, { useEffect, useState } from 'react'
import './Todo.css'
import Item from './Item';

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
    const handleUpdate = (id, updatedValue) => {
        setTodos((todo) => todo.map((t) => t.id === id ? {...t, text: updatedValue} : t));
    }
    const handleComplete = (id) => {
        setTodos((todos) => todos.map((t) => t.id === id ? {...t, isCompleted : !t.isCompleted} : t))
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
                    return <Item key={todo.id} todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
                })
            }
        </div>
    </div>
  )
}

export default Todo