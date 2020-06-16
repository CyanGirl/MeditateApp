import React from "react";
import "./first.css";
import Practice from "../Practice/Practice";
import { useHistory } from "react-router-dom";
const First = () => {
  let history = useHistory();
  const replacing = (e) => {
    e.preventDefault();
    history.push("/Practice");
  };
  return (
    <div className="first">
      <div id="overlay">
        <div className="content">
          <h2>Take a deep breath. Find the peace within....</h2>
        </div>
        <div className="explore text-center">
          <h3>Let's get started?</h3>
          <button
            type="submit"
            id="exButton"
            className="buttonStart"
            onClick={replacing}
          >
            Start Breathing
          </button>
          <br />
          <br />
          <p>Or scroll to explore!</p>
        </div>
      </div>
      <div id="back">
        <div className="img">
          <img src={require("../Images/pic5.jpg")}></img>
        </div>
      </div>
    </div>
  );
};

export default First;
