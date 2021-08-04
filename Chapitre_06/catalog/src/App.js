import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"; // on importe les outils du router
import "./App.css";
import catalog from "./catalog.json";
// Components
import FilmsPage from "./components/FilmsPage.jsx";

console.log(catalog);

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {catalog.map((films) => {
            return (
              <ul>
                <li>
                  <Link to="/filmsPage/:films.id">{films.title}</Link>
                </li>
              </ul>
            );
          })}
          <Switch>
            <Route path="/filmsPage/:films.id" component={FilmsPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
