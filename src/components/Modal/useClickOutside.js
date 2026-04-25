import React, {useEffect} from 'react'

const useClickOutside = (modalRef, setShow) => {
    useEffect(() => {
        const clickOutside = (e) => {
            if(!modalRef.current?.contains(e.target)) {
                setShow(false);
            }
        }
        document.addEventListener("click", clickOutside);

        return () => {
            document.removeEventListener("click", clickOutside);
        }
    }, [setShow, modalRef])
}

export default useClickOutside