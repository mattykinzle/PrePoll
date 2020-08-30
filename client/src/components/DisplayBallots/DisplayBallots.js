import React, { useState, useEffect } from 'react';
import { Col, Row, Card, ListGroup, Button, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import API from "../../utils/API";



function DisplayBallot(props) {


  //Display ballot will keep track if the modal is showing or not...
  // props.elections --> is the array

  //I need to know what to display with the modal, and 
  // create an array of all notes and functions to update temp



  const [displayModal, setDisplayModal] = useState(false);
  const [electionId, setElectionId] = useState(1);
  const [electionChoiceId, setElectionChoiceId] = useState(null);
  const [office, setOffice] = useState('');
  const [noteId, setNoteId] = useState(0);
  const [noteArr, setNoteArr] = useState([]);
  const [note, setNote] = useState('');
  const [choiceArr, setChoiceArr] = useState([]);
  const [choice, setChoice] = useState(null);
  const [candidateChoice, setCandidateChoice] = useState(null);

  // this is to keep track of how the page is rendered, and display purposes
  const [tempNotes, setTempNotes] = useState(props.initialNotes);
  const [tempChoices, setTempChoices] = useState(props.initialChoices);
  const [noteIndex, setNoteIndex] = useState(0);
  const [choiceIndex, setChoiceIndex] = useState(0);

  const testArray = [2, null, 39];

  //setTempNotes(...tempNotes, index: newValue )

  useEffect(() => {
    setTempNotes(props.initialNotes);
  }, [props.initialNotes])

  useEffect(() => {
    setTempChoices(props.initialChoices);
  }, [props.initialChoices])


  const openModal = () => {
    setDisplayModal(true);
  };
  const closeModal = () => {
    setDisplayModal(false);
  };
  const updateNote = () => {
    let noteObj = {
      noteText: note,
      candidateChoice: candidateChoice,
      id: noteId
    }
    API.noteUpdate(noteObj).then(response => {
      console.log('Note updated');
    }).catch(error => {
      console.log(error);
    })
  };

  const saveNote = () => {
    let noteObj = {
      noteText: note,
      candidateId: candidateChoice,
      ElectionId: electionId
    };
    API.noteSave(noteObj).then(response => {
      console.log('Note Saved');
    }).catch(error => {
      console.log(error);
    })
  }
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  }

  const handleChoiceChange = (val) => {
    console.log(val);
    // setChoice(val[1]);
    // setChoiceIndex(val[0]);
    setChoice(val);
    setChoiceIndex(2);
  }

  // const updateChoice = () => {
  //   let choiceObj = {
  //     CandidateId: choiceId
  //   };
  //   API.choiceUpdate(choiceObj).then(response => {
  //     console.log('Choice updated');
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // };

  // const saveChoice = () => {
  //   let choiceObj = {
  //     CandidateId: candidateId,
  //     ElectionId: electionChoiceId
  //   };
  //   API.choiceSave(choiceObj).then(response => {
  //     console.log('choice Saved');
  //   }).catch(error => {
  //     console.log(error);
  //   })
  // }

  return (
    <div>
      <Modal displayModal={displayModal} closeModal={closeModal}
        electionId={electionId} office={office} noteArr={noteArr}
        note={note} updateNote={updateNote} saveNote={saveNote}
        handleNoteChange={handleNoteChange} setNote={setNote}
        passedNotes={tempNotes} setTempNotes={setTempNotes}
        noteIndex={noteIndex} noteId={noteId}>
      </Modal>
      <Row>

        <Col md="10" style={{ display: 'contents' }}>
          {
            props.elections.map((element, a) => (

              <Card key={a} style={{ width: '50%', display: 'inline-block' }}>

                <Card.Body>
                  <Card.Title style={{ fontSize: '20px' }}>
                    Election for {element.Election.office}
                  </Card.Title>
                  <Card.Subtitle
                  >{(element.Election.county) ?
                    (element.Election.county + ' COUNTY') : ''}
                  </Card.Subtitle>
                  <Card.Text>
                    {/* <ListGroup>
                      {element.Election.Candidates.map((race) => (
                        <ListGroup.Item>{race.candidate} -
                          <span>{race.party} </span></ListGroup.Item>
                      ))}
                    </ListGroup> */}
                    <ToggleButtonGroup type="radio" name={"options" + a} defaultValue={testArray[a]} onChange={handleChoiceChange}>
                      {element.Election.Candidates.map((candidateEl) => (
                        <ToggleButton value={candidateEl.id}>{candidateEl.candidate} -
                          <span>{candidateEl.party} </span></ToggleButton>
                      ))}
                    </ToggleButtonGroup>
                    <Button color="success" onClick={() => {
                      setElectionId(element.ElectionId);
                      setOffice(element.Election.office);
                      setNoteId((element.Election.Notes.length !== 0) ? element.Election.Notes[0].id : 0);
                      setNoteArr(element.Election.Notes);  //this is an array...
                      setTempNotes(props.initialNotes);
                      setNoteIndex(a);
                      //setNote((element.Election.Notes.length !== 0) ? element.Election.Notes[0].noteText : '');
                      setNote(tempNotes[a])
                      openModal();
                    }}>
                      Candidate Notes
                   </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          }
        </Col>
      </Row>
    </div>
  );
}

export default DisplayBallot;