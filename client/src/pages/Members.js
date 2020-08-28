import React, { useEffect, useState } from "react"
import { useStoreContext } from "../utils/GlobalStore";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import API from "../utils/API";
import axios from "axios";
import SavedArticles from "../components/SavedArticles";
import DisplayBallots from "../components/DisplayBallots/DisplayBallots";
import CountyCharts from "../components/Charts"
import StateCharts from "../components/stateCharts.js"


function Members() {
  const [state] = useStoreContext();
  const { email } = state;

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userAddress, setUserAddress] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userZipCode, setUserZipCode] = useState('');
  const [userCounty, setUserCounty] = useState('');
  const [userCongDistrict, setUserCongDistrict] = useState('');
  const [userHouseDistrict, setUserHouseDistrict] = useState('');
  const [userSBOE, setUserSBOE] = useState('');
  const [userSenateDistrict, setUserSenateDistrict] = useState('');
  const [userBallot, setUserBallot] = useState([]);
  const [key, setKey] = useState('ballot');


  useEffect(() => {
    API.getUserInfo(email).then(response => {

      console.log(response.data);

      setUserFirstName(response.data.firstName);
      setUserLastName(response.data.lastName);
      setUserAddress(response.data.address);
      setUserCity(response.data.city);
      setUserZipCode(response.data.zip);
      setUserCounty(response.data.county);
      setUserCongDistrict(response.data.congressDist);
      setUserHouseDistrict(response.data.houseDist);
      setUserSBOE(response.data.sboeDist);
      setUserSenateDistrict(response.data.senateDist);

      let userInfo = response.data;
      API.getBallotItems(userInfo).then(response => {
        setUserBallot([...response.data]);
      });

    })

  }, []);



  //would I pass the ballot array into a new component 

  return (
    <div>
      <Container className="fluid">
        <Row className="justify-content-center">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title style={{ fontSize: '40px' }}>Welcome {userFirstName} {userLastName}</Card.Title>
                <Card.Subtitle style={{ fontSize: '12px' }}>Here's your user information. </Card.Subtitle>
                <Card.Text className='card-text'>You live at {userAddress} in {userCity}, Texas, {userZipCode}, which is in {userCounty} county.</Card.Text>
                <Card.Text>Your district for the U.S. Congress is district <span style={{ fontWeight: "bolder" }}>{userCongDistrict}</span>. </Card.Text>
                <Card.Text>In the Texas Senate, your district is {userSenateDistrict}. In the Texas House of Representatives, your district {userHouseDistrict}. Your Schoolboard of Education district is {userSBOE}.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Tabs style={{ fontSize: '20px', textAlign: 'center' }} >
            <TabList>
              <Tab>Your ballot</Tab>
              <Tab>Your Saved Articles</Tab>
              <Tab>State Census Data</Tab>
              <Tab>County Census Data</Tab>
            </TabList>

            <TabPanel>
              <DisplayBallots elections={userBallot} />
            </TabPanel>
            <TabPanel>
              <SavedArticles />
            </TabPanel>
            <TabPanel>
              <StateCharts />
            </TabPanel>
            <TabPanel>
              <CountyCharts userCounty={userCounty} />
            </TabPanel>
          </Tabs>


        </Row>

      </Container>
    </div>
  )
}

export default Members;


{/* <div className="row mt-5">
<div className="col-md-6">
  <SavedArticles />
</div>
<div className="col-md-6">
  <Card style={{ width: '50rem' }}>
    <Card.Title>Welcome {userFirstName} {userLastName}</Card.Title>
    <Card.Subtitle>Here's your user information. </Card.Subtitle>
    <Card.Text>
      You live at {userAddress} in {userCity}, Texas, {userZipCode}, which is in {userCounty} county.
      At that address, your district for the U.S. Congress is district {userCongDistrict}. In the
      Texas Senate, your district is {userSenateDistrict} and in the Texas House of Representatives is district {userHouseDistrict}. Your Schoolboard of Education district is {userSBOE}.
    </Card.Text>
  </Card>
</div>
</div>
<div className="row">
<div className="col-md-6">

</div>
<div className="col-md-6">
  {/* <DisplayBallots elections={userBallot} /> *
</div>

</div> */}
