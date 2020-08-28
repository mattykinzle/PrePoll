import React from 'react';
import './Modal.css';

const Modal = props => {
  const divStyle = {display: props.displayModal ? 'block' : 'none'};

  const closeModal = (e) => {
    e.stopPropagation();
    props.closeModal();
  }

  return (
    <div className="modal" onClick={ closeModal } style={divStyle} >
      <div className="modal-content" onClick={e => e.stopPropagation() }>


        {props.electionId}

        
        <span className="close" onClick= { closeModal }>&times;</span>
      </div>
    </div>
  )
}

export default Modal;