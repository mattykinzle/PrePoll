import React, { useState } from 'react';
import { Col, Row, Card, ListGroup, Button } from 'react-bootstrap';
import Modal from '../Modal/Modal';



function DisplayBallot(props) {


  //Display ballot will keep track if the modal is showing or not...
  const [displayModal, setDisplayModal] = useState(false);
  const [electionId, setElectionId] = useState(0);
  const [office, setOffice] = useState('');

  const openModal = () => {
    setDisplayModal(true);
  }

  const closeModal = () => {
    setDisplayModal(false);
  }

  return (
    <div>
      <Modal displayModal={displayModal} closeModal={closeModal} 
        electionId={electionId} office={office}>
      </Modal>
      <Row>
        <Col md="10" style={{ display: 'contents' }}>
          {
            props.elections.map((election, a) => (
              <Card key={a} style={{ width: '50%', display: 'inline-block' }}>
                <Card.Body>
                  <Card.Title style={{ fontSize: '20px' }}>
                    Election for {election.office}
                  </Card.Title>
                  <Card.Subtitle
                  >{(election.county) ?
                    (election.county + ' COUNTY') : ''}
                  </Card.Subtitle>
                  <Card.Text>
                    <ListGroup>
                      {election.Candidates.map((race) => (
                        <ListGroup.Item>{race.candidate}</ListGroup.Item>
                      ))}
                    </ListGroup>

                    <Button color="success" onClick={() => {
                      setElectionId(election.id);
                      setOffice(election.office);
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