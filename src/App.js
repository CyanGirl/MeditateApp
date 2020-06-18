import React from "react";
import Nav from "./Nav/Nav";
import Practice from "./Practice/Practice";
import Quiz from "./Quiz/Quiz";
import { Contxt } from "./Context";
import Brief from "./Brief";

import { BrowserRouter, Route } from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Contxt>
        <BrowserRouter basename="/">
          <Route exact path="/" component={Nav} />
          <Route path="/Practice" component={Practice} />
          <Route path="/Quiz" component={Quiz} />
          <Route path="/Brief" component={Brief} />
        </BrowserRouter>
      </Contxt>
    </div>
  );
}

export default App;
