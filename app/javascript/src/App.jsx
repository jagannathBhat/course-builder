import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { setAuthHeaders } from "apis/axios";
import { initializeLogger } from "common/logger";
import Home from "components/Home";
import NavBar from "components/NavBar";

const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*eslint no-undef: "off"*/
    setAuthHeaders();
    initializeLogger();
  });

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" render={Home} />
      </Switch>
    </Router>
  );
};

export default App;
