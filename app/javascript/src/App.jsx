import React, { useEffect } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
  });

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={Home} />
      </Switch>
    </Router>
  );
};

export default App;
