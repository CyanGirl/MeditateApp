import React, { useState, useEffect, useContext } from "react";
import "./Practice.css";
import { Link } from "react-router-dom";
import { modeContext } from "../Context";

const Practice = () => {
  const [anim, setAnim] = useState("circle");
  const [inhale, setInhale] = useState("faded");
  const [exhale, setExhale] = useState("faded");
  const [hold, setHold] = useState("faded");
  const [mode, setMode] = useContext(modeContext);
  const [line, setLine] = useState("head text-center");

  return (
    <div id="Practice" className={mode}>
      <Link to={"/"}>
        <h6 className="Prev">
          <i className="fa fa-home fa-2x" aria-hidden="true"></i>
        </h6>
      </Link>
      <br />
      <h3 className="prachead centre" className={line}>
        Start Relaxing?
      </h3>
      <div id="abs" className="text-center">
        <span className={inhale}>Breathe In &nbsp; </span>
        <span className={hold}> &nbsp; &nbsp; Hold On &nbsp; </span>
        <span className={exhale}> &nbsp; &nbsp; Breathe Out &nbsp;</span>
      </div>
      <div className="circle" className={anim}></div>
      <br />
      <div className="btnsec">
        <button
          className="btnPrac buttonStart"
          onClick={() => {
            setAnim("playing");
            setInhale("inhale");
            setExhale("exhale");
            setHold("hold");
            setLine("head started text-center");
          }}
        >
          <b>Start Focussing</b>
        </button>
        <br />
        <br />
        <button
          className="btnPrac buttonStart"
          onClick={() => {
            setAnim("relaxing");
            setInhale("inhaleRelax");
            setExhale("exhaleRelax");
            setHold("faded");
            setLine("head started text-center");
          }}
        >
          <b>Start Relaxing</b>
        </button>
        <br />
        <br />
        <button
          className="btnPrac buttonStart"
          onClick={() => {
            setAnim("circle");
            setInhale("faded");
            setExhale("faded");
            setHold("faded");
            setLine("head text-center");
          }}
        >
          <b>Done</b>
        </button>
      </div>
    </div>
  );
};

export default Practice;
