import React from 'react';
import './Modal.css';
import { Button, Form, ListGroup } from 'react-bootstrap';

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
    let updatedNotes = [...props.passedNotes];
    updatedNotes.splice(props.noteIndex, 1, props.note);
    props.setTempNotes(updatedNotes);
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

  const deleteNote = () => {
    console.log('Delete');
    props.closeModal();
  }

  return (
    <div className="modal" onClick={closeModal} style={divStyle} >
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <span className="close" onClick={closeModal}>&times;</span>
        <Form>
          <Form.Group>
            <Form.Label>Notes on the candidates for: {props.office}.</Form.Label>
            <ListGroup>
              {props.candidates.map((race) => (
                <ListGroup.Item>{race.candidate} - 
                  <span className='party'> {race.party}</span></ListGroup.Item>
              ))}
            </ListGroup>
            <Form.Control as="textarea" rows="10"
              onChange={props.handleNoteChange} value={props.note}>

            </Form.Control>
          </Form.Group>
          {(props.noteArr.length !== 0) ?
          <div>
            <Button style={{marginRight:'15px'}} onClick={updateNote} 
            variant='info'>Update Note </Button>
            <Button onClick={deleteNote} variant='danger'>Delete Note </Button>
          </div>
          :
          <div>
            <Button onClick={saveNote} variant='success'>Save Note </Button>
          </div>
          }

        </Form>

      </div>
    </div>
  )
}

export default Modal;