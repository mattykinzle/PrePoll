import React, { useState, useEffect } from 'react';
import { Col, Row, Card, ListGroup, Button, ToggleButtonGroup, ToggleButton, Container } from 'react-bootstrap';
import Modal from '../Modal/Modal';
import API from "../../utils/API";
import "./style.css";



function DisplayBallot(props) {

  //Display ballot will keep track if the modal is showing or not...
  // props.elections --> is the array

  //I need to know what to display with the modal, and 
  // create an array of all notes and functions to update temp



  const [displayModal, setDisplayModal] = useState(false);
  const [electionId, setElectionId] = useState(1);
  const [office, setOffice] = useState('');
  const [noteId, setNoteId] = useState(0);
  const [noteArr, setNoteArr] = useState(['']);
  const [note, setNote] = useState('');
  const [choiceArr, setChoiceArr] = useState([]);
  const [choice, setChoice] = useState(null);
  const [electionChoice, setElectionChoice] = useState(null);
  const [candidateChoice, setCandidateChoice] = useState(null);
  const [candidateArr, setCandidateArr] = useState([]);

  // this is to keep track of how the page is rendered, and display purposes
  const [tempNotes, setTempNotes] = useState(props.initialNotes);
  const [tempChoices, setTempChoices] = useState(props.initialChoices);
  const [noteIndex, setNoteIndex] = useState(0);
  const [choiceIndex, setChoiceIndex] = useState(0);

  //setTempNotes(...tempNotes, index: newValue )

  useEffect(() => {
    setTempChoices(props.initialChoices);
  }, [props.initialChoices])

  useEffect(() => {
    setTempNotes(props.initialNotes);
  }, [props.initialNotes])

  // Modal/Notes

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
      ElectionId: electionId
    };
    API.noteUpdate(noteObj).then(response => {
      console.log(response);
      console.log('Note updated');
    }).catch(error => {
      console.log(error);
    })
  };

  const deleteNote = () => {
   
    API.noteDelete(electionId).then(response => {
      console.log('Note deleted');
    }).catch(error => {
      console.log(error);
    });
  };

  const saveNote = () => {
    let noteObj = {
      noteText: note,
      candidateId: candidateChoice,
      ElectionId: electionId
    };
    API.noteSave(noteObj).then(response => {
      console.log(response.data.id);
      setNoteId(response.data.id);
      console.log('Note Saved');
    }).catch(error => {
      console.log(error);
    })
  }
  const handleNoteChange = (event) => {
    setNote(event.target.value);
  }

  // Choices

  const handleChoiceClick = (e) => {
    console.log(e);
  }

  // Triggers when the value within a button toggle group changes
  const handleChoiceChange = (val) => {
    setChoice(val);
    console.log(val, choice, electionChoice, choiceIndex);
    let choiceObj = {
      CandidateId: val,
      ElectionId: electionChoice
    };
    (tempChoices[choiceIndex] !== null) ? updateChoice(choiceObj) : saveChoice(choiceObj);
    tempChoices[choiceIndex] = val;
  }

  const updateChoice = (choiceObj) => {
    API.choiceUpdate(choiceObj).then(response => {
      console.log('Choice updated - E: ' + choiceObj.ElectionId + ' C: ' + choiceObj.CandidateId);
    }).catch(error => {
      console.log(error);
    })
  };

  const saveChoice = (choiceObj) => {
    API.choiceSave(choiceObj).then(response => {
      console.log('Choice Saved - E: ' + choiceObj.ElectionId + ' C: ' + choiceObj.CandidateId);
    }).catch(error => {
      console.log(error);
    })
  }

  return (
    <div>
      <Modal displayModal={displayModal} closeModal={closeModal}
        electionId={electionId} office={office} noteArr={noteArr}
        note={note} updateNote={updateNote} saveNote={saveNote}
        handleNoteChange={handleNoteChange} setNote={setNote}
        passedNotes={tempNotes} setTempNotes={setTempNotes}
        noteIndex={noteIndex} noteId={noteId}
        candidates={candidateArr} deleteNote={deleteNote}
        setNoteArr={setNoteArr}>
      </Modal>

      <Container fluid>

        <Col md="12">

          <Row>
            {
              props.elections.map((element, a) => (

                <Col md="6" key={a}>

                  <Card className="ballotCard" >

                    <Card.Body>
                      <Card.Title style={{ fontSize: '20px' }}>
                        Election for {element.Election.office}
                      </Card.Title>
                      <Card.Subtitle
                      >{(element.Election.county) ?
                        (element.Election.county + ' COUNTY') : ''}
                      </Card.Subtitle>
                      <Card.Text>
                        <ToggleButtonGroup vertical type="radio" name={`${a}`} value={tempChoices[a]} onChange={handleChoiceChange}>
                          {element.Election.Candidates.map((candidateEl) => (
                            <ToggleButton className="candidateBtn" id={"option" + candidateEl.id} variant="info" value={candidateEl.id} onClick={(e) => {
                              // handleChoiceClick(e);
                              // console.log(element.Election.id, a);
                              setElectionChoice(element.Election.id);
                              setChoiceIndex(a);
                            }}>{candidateEl.candidate} -
                              <span>{candidateEl.party} </span></ToggleButton>
                          ))}
                        </ToggleButtonGroup>
                        <Button className="notesBtn" color="success" onClick={() => {
                          setCandidateArr(element.Election.Candidates)
                          setElectionId(element.ElectionId);
                          setOffice(element.Election.office);
                          setNoteId((element.Election.Notes.length !== 0) ? element.Election.Notes[0].id : 0);
                          setNoteIndex(a);
                          setNote(tempNotes[a]);
                          setNoteArr([tempNotes[a]]);
                          openModal();
                        }}>
                          Candidate Notes
                          </Button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            }
          </Row>
        </Col>

      </Container>
    </div>
  );
}

export default DisplayBallot;