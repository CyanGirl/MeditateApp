import React, { useState } from "react";
import "./Quiz.css";

const QuestionBox = ({ id, question, options, selected }) => {
  const [ans, setAns] = useState(options);
  return (
    <React.Fragment>
      <div className=" text-center quesbox">
        <div className="questions">
          <br />
          <h5>{question}</h5>
          <br />
        </div>
        {ans.map((text, index) => {
          return (
            <div key={index}>
              <button
                className="ansbutton buttonStart"
                onClick={() => {
                  setAns([text]);
                  selected(text);
                }}
              >
                <b>{text}</b>
              </button>
              <br />
              <br />
            </div>
          );
        })}
      </div>
      <br />
    </React.Fragment>
  );
};

export default QuestionBox;
