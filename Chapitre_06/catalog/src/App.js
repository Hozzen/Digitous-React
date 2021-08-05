import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom"; // on importe les outils du router
import "./App.css";
import catalog from "./catalog.json";
// Components
// Views
import Home from "./views/Home.js";
import Film from "./views/Film.js";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Home {...props} movies={catalog} />}
          />
          <Route
            path="/:id"
            render={(props) => <Film {...props} movies={catalog} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
