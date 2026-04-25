import React, {useState, useRef, useEffect} from 'react'
import useClickOutside from './useClickOutside';

const Modal = () => {
    const [show, setShow] = useState(true);
    const modalRef = useRef(null);
    useClickOutside(modalRef, setShow);
    
  return (
    <div>
        <button onClick = {(e) => {setShow(!show); e.stopPropagation();}}>Click here to open Modal</button>
        {
            show && <div className="modal" style ={{border: '1px solid #ccc', padding: '16px', margin: '16px'}} ref = {modalRef}>
            <p>This is the modal content. this is used for displaying purpose only.</p>
            <button onClick = {()=> setShow(false)}>close</button>
        </div>
        }
    </div>
  )
}

export default Modal