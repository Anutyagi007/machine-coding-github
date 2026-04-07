import React, { useState } from 'react'

const Item = ({ todo, handleComplete, handleUpdate, handleDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedValue, setUpdatedValue] = useState(todo.text);
  return (
    <div>
        {
            isEditing ? <input style={{width: '300px'}} type='text' value={updatedValue} onChange={(e)=>setUpdatedValue(e.target.value)} onKeyDown={(e) => {
                if(e.key == "Enter") {
                    handleUpdate(todo.id, updatedValue)
                    setIsEditing(false);
                }
            } } /> : <span className={`${todo.isCompleted ? 'completed' : ''}`} >{todo.text}</span>  
        }
        <button className='btn' onClick={()=>handleComplete(todo.id)}>completed</button>
        {
            !todo.isCompleted && !isEditing && <button className='btn' onClick={()=> setIsEditing(true)}>edit</button>
        }
        <button className='btn' onClick={()=>handleDelete(todo.id)}>delete</button>
    </div>
  )
}

export default Item