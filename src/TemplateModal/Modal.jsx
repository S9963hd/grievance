import React from 'react'
import './Modal.css';
const Modal = (props) => {
  return (
    <dialog ref={props.ref} className="modalMain">
        <h1>Please Login First</h1>
        <button className="buttonCommon button1" onClick={()=>props.ref.current.close()}>Okay.</button>
    </dialog>
  )
}

export default Modal
