import React, { useEffect } from "react"
import { useStoreContext } from '../utils/GlobalStore';
import API from "../utils/API";
import SavedArticles from "../components/SavedArticles";

function Members() {
  const [state] = useStoreContext();
  const { email } = state;

  let ballot = [];

  useEffect(() => {
    API.getUserInfo(email).then(response => {
      console.log(response.data);
      let userInfo = response.data;
      API.getBallotItems(userInfo).then(response => {
        console.log(response.data)
      });
      // API.president().then(response => {
      //   let race = {
      //     office: response.data[0].office,
      //     officeType: response.data[0].officeType,
      //     candidates: response.data[0].Candidates
      //   };
      //   ballot.push(race);
      //   console.log(ballot);
      // });
    })
  }, []);

  return (
    <div className="container-fluid">
      <div className="row welcome">
        <div className="col-md-6">
          <h3>Welcome {email}</h3>
        </div>
      </div>
      <SavedArticles />
    </div>
  )
}

export default Members;