import React from 'react';
import './Modal.css';
import { Button, Form } from 'react-bootstrap';
import TextArea from '../TextArea/TextArea';

const Modal = props => {
  const divStyle = { display: props.displayModal ? 'block' : 'none' };
 
  const closeModal = (e) => {
    e.stopPropagation();
    props.closeModal();
  }

  const updateNote = () => {
    console.log('Update');
    props.updateNote();
    //update temp array
    props.setTempNotes(props.passedNotes.splice(props.noteIndex, 1, props.note));
    props.closeModal();

  }

  const saveNote = () => {
    let tempArr = props.passedNotes;
    tempArr[props.noteIndex] = props.note;
    props.setTempNotes(tempArr);
    console.log(props.passedNotes)
    console.log('Save');
    props.saveNote();
    //also setTempNotes
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal} style={divStyle} >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <Form>
          <Form.Group>
            <Form.Label>Notes on the {props.office} election.</Form.Label>
            <Form.Control as="textarea" rows="5" 
            onChange={props.handleNoteChange} value={props.note}>
        
            </Form.Control>
          </Form.Group>
          <Button onClick={(props.noteArr.length !== 0) ? updateNote : saveNote}>
            {(props.noteArr.length !== 0) ? 'Update Note' : 'Save Note'}
          </Button>
        </Form>
        <span className="close" onClick={closeModal}>&times;</span>
      </div>
    </div>
  )
}

export default Modal;