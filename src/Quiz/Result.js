import React from "react";
import "./Quiz.css";

const Result = ({ score }) => {
  const sc = score;
  if (sc >= 4) {
    return (
      <div className="box">
        <p className="result text-center">
          You are doing fantastic!! Keep it Up!
        </p>
      </div>
    );
  } else if (sc < 4 && sc >= 2) {
    return (
      <div className="box">
        <p className="result text-center">
          You are doing quite well! Gotta see ya ahead..
        </p>
      </div>
    );
  } else {
    return (
      <div className="box">
        <p className="result text-center">
          Things can be down sometimes but not always!
        </p>
      </div>
    );
  }
};

export default Result;
