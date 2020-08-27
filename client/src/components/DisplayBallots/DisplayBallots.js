import React from 'react';
import { Col, Row, Button, Card, ListGroup } from 'react-bootstrap';

function DisplayBallot(props) {

  return (
    <div>
      <Row>
        <Col md="10" style={{display:'contents'}}>
          {
            props.elections.map((election, a) => (
              <Card style={{width:'50%', display:'inline-block'}}>
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