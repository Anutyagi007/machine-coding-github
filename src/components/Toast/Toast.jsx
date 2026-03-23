import './Toast.css';

const Toast = ({id, type, message}) => {
  return (
    <div className={`toast ${type}`}>
        <p>{message}</p>
    </div>
  )
}

export default Toast