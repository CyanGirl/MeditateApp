import React, { useState, useContext } from "react";
import "./Nav.css";
import First from "../First/First";
import Brief from "../Brief";
import Quiz from "../Quiz/Quiz";
import Practice from "../Practice/Practice";
import { Route, Link } from "react-router-dom";
import { modeContext } from "../Context";

const Nav = () => {
  const [mode, setMode] = useContext(modeContext);
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
          <h3 className="header">
            <strong>Calm & Relax</strong>
          </h3>
        </div>
        <div className="collapse navbar-collapse" id="myNav">
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#">&nbsp;Home&nbsp;</a>
            </li>
            <li className="active">
              <button
                className="mode"
                onClick={() => setMode(mode === "dark" ? "" : "dark")}
              >
                &nbsp;{mode === "" ? " Dark Mode" : " Light Mode"} &nbsp;
              </button>
            </li>
            <li>
              <a href="#B">&nbsp;About&nbsp;</a>
            </li>
            <li>
              <a href="#Q">&nbsp;Look Through&nbsp;</a>
            </li>
            <li>
              <a href="#P">&nbsp;Breathe&nbsp; &nbsp;</a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="F">
        <br />
        <First />
      </div>
      <div id="B">
        <br />
        <Brief />
      </div>
      <hr />
      <br />
      <br />
      <div id="Q">
        <br />
        <h3 className="text-center"> ....Look through your inner self....</h3>
        <br />
        <br />
        <Link to={{ pathname: "/Quiz", state: { mode } }}>
          <h6 className="btnbreathe text-center" style={{ color: "black" }}>
            Get started!
          </h6>
        </Link>
      </div>
      <br />
      <br />
      <br />
      <div id="P">
        <h3 className="text-center"> ....Take a deep breathe....</h3>
        <br />
        <br />
        <Link to={{ pathname: "/Practice", state: { mode } }}>
          <h6 className="btnbreathe text-center" style={{ color: "black" }}>
            Breathe
          </h6>
        </Link>
      </div>
      <p className="text-center foot">
        Reach me <a href="https://cyancodes.blogspot.com">here</a>
      </p>
    </div>
  );
};

export default Nav;
