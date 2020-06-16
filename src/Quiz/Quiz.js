import React, { useState, useEffect, useContext } from "react";
import QuestionBox from "./QuestionBox";
import Result from "./Result";
import { Link } from "react-router-dom";
import { modeContext } from "../Context";

const Quiz = () => {
  const data = require("./Ques.json");
  const [score, setScore] = useState(0);
  const [response, setResponse] = useState(0);
  const [mode, setMode] = useContext(modeContext);

  const compute = (answer, correct, partial) => {
    if (answer == correct) {
      setScore(score + 2);
    } else if (answer == partial) {
      setScore(score + 1);
    }

    setResponse(response < 3 ? response + 1 : 3);
  };

  return (
    <div className={mode}>
      <br />
      <div id="quiz" className="boxmain">
        <Link to={"/"}>
          <h6 className="Prev">
            <span class="glyphicon glyphicon-circle-arrow-left" />
            &nbsp;Go to Home
          </h6>
        </Link>
        <h3 className="text-center">How are you doin'?</h3>
        <br />
        {response < 3 &&
          data.map(({ id, question, options, correct, partial }) => {
            return (
              <QuestionBox
                question={question}
                options={options}
                key={id}
                selected={(answer) => compute(answer, correct, partial)}
              ></QuestionBox>
            );
          })}
        {response === 3 ? <Result score={score} /> : ""}
      </div>
      <br />
    </div>
  );
};

export default Quiz;
