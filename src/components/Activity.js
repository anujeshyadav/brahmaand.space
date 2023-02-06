import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import "moment-timezone";
import axios from "axios";

function Activity() {
  const [userdata, setUserData] = useState({});
  const id = localStorage.getItem("userId");

  useEffect(() => {
    axios
      .get(`http://15.207.117.200:9000/user/getoneUser/${id}`)
      .then((response) => {
        // console.log("getdata", response.data.data);
        setUserData(response.data.data);
        // console.log(response.data.data);
      })
      .catch((error) => {
        // console.log(error.response.data.data);
      });
  }, []);
  return (
    <div>
      Your last Seen :{`     `}
      <Moment format="lll">{userdata.updatedAt}</Moment>
    </div>
  );
}

export default Activity;
