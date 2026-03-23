import React, { useState } from 'react'
import Toast from './Toast';
import './Toast.css';

const ToastIndex = () => {
  const [toasts, setToasts] = useState([]);
  const handleClick = (type, message) => {
    const id = Date.now();
    const newToast = {
      id,
      type,
      message
    }
    setToasts ([...toasts, newToast]);
    setTimeout(()=> {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 3000) 
  }

  const handleDelete = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  }
  return (
    <div>
      <h2>Toast Component</h2>
      <button onClick={()=> handleClick('success', 'Success Alert Clicked')}>Success</button>
      <button onClick={()=> handleClick('error', 'Error Alert Clicked')}>Error</button>
      <button onClick={()=> handleClick('warning', 'Warning Alert Clicked')}>Warning</button>
      <button onClick={()=> handleClick('info', 'Info Alert Clicked')}>Info</button>
      {
        toasts.map((toast) => (
          <div className={`toast-container ${toast.type}`} key={toast.id}>
            <Toast type={toast.type} message={toast.message} />
            <span onClick={()=>handleDelete(toast.id)}>x</span>
          </div>
        ))
      }
    </div>
  )
}

export default ToastIndex;