import React, { useEffect } from "react"
import { useStoreContext } from '../utils/GlobalStore';
import API from "../utils/API";

function Members() {
  const [state] = useStoreContext();
  const { email } = state;

  useEffect(() => {
    console.log("test test");
    API.president().then(response => {
      console.log(response);
      let ballot = response;
    })
  }, []);
  return <div className="container">
    <div className="row">
      <div className="col-md-6 col-md-offset-3">
        <h2>Welcome {email}</h2>
      </div>
    </div>
  </div>
}

export default Members;