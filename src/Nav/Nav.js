import React, { useState, useContext } from "react";
import "./Nav.css";
import { Route, Link, useHistory } from "react-router-dom";
import { modeContext } from "../Context";
import "./first.css";

const Nav = () => {
  const [mode, setMode] = useContext(modeContext);
  let history = useHistory();
  const replacing = (e) => {
    e.preventDefault();
    history.push("/Practice");
  };
  return (
    <div className={mode} id="main">
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div id="nav" className="container-fluid">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNav"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <h2 className="header">
            <strong>Calm & Relax</strong>
          </h2>
        </div>
        <div className="collapse navbar-collapse " id="myNav">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#">&nbsp;Home&nbsp;</a>
            </li>
            <li className="active">
              <button
                className="mode"
                onClick={() => setMode(mode === "dark" ? "" : "dark")}
              >
                &nbsp;{mode === "" ? "  Dark Mode " : " Light Mode  "} &nbsp;
              </button>
            </li>
            <li>
              <Link to="/Brief">&nbsp;About&nbsp;</Link>
            </li>
            <li>
              <Link to={{ pathname: "/Quiz", state: { mode } }}>
                &nbsp;Look Through&nbsp;
              </Link>
            </li>
            <li>
              <Link to={{ pathname: "/Practice", state: { mode } }}>
                &nbsp;Breathe&nbsp; &nbsp;
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div id="F">
        <br />
        <div className="first">
          <div id="overlay">
            <h3 className="firstline">RESTLESS? TRY THIS</h3>
            <br />
            <div className="secondline">
              <button className="buttons button1" onClick={replacing}>
                <b>Breathe</b>
              </button>

              <button
                className="buttons button2"
                data-toggle="collapse"
                data-target="#myNav"
              >
                <b>Explore</b>
              </button>
            </div>
          </div>
          <div id="back">
            <div className="img">
              <img src={require("../Images/pics.jpeg")}></img>
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <p className="text-center">
          Reach Me<a href="https://cyancodes.blogspot.com"> here</a>
        </p>
      </div>
    </div>
  );
};

export default Nav;
