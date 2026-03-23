import './Toast.css';

const Toast = ({id, type, message}) => {
  return (
    <div>
        <p>{message}</p>
    </div>
  )
}

export default Toast