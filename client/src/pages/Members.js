import React, { useEffect } from "react"
import { useStoreContext } from '../utils/GlobalStore';
import API from "../utils/API";

function Members() {
  const [state] = useStoreContext();
  const { email } = state;

  let ballot = [];

  useEffect(() => {
    API.getUserInfo(email).then( response => {
      console.log(response.data);

      

      API.president().then(response => {
        let race = {
          office: response.data[0].office,
          officeType: response.data[0].officeType,
          candidates: response.data[0].Candidates
        };
        ballot.push(race);
        console.log(ballot);
      })
    })

    
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h2>Welcome {email}</h2>
        </div>
      </div>
    </div>
  )
}

export default Members;