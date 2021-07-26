import React from "react";
import "./App.css";
// Components
import Button from "./components/Button";
import Card from "./components/Card";

// On préfère stocker les URLs des APIs dans des constantes, au cas où elles changent
const URL = "https://restcountries.eu/rest/v2/name";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      flag: "",
      country: "",
      capital: "",
      region: "",
      population: "",
    };
  }

  componentDidMount() {
    this.handleFetchCountry("brazil");
  }

  handleFetchCountry = (countryName) => {
    fetch(`${URL}/${countryName}`)
      .then((res) => res.json())
      .then((data) => {
        const countryData = data[0];

        // setState est ASYNCHRONE
        // utiliser componentDidUpdate pour détecter un changement de state
        this.setState({
          flag: countryData.flag,
          country: countryData.name,
          capital: countryData.capital,
          region: countryData.region,
          population: countryData.population,
        });
      });
  };

  render() {
    return (
      <div>
        <div>
          <Button onClick={this.handleFetchCountry}>France</Button>
          <Button onClick={this.handleFetchCountry}>Brazil</Button>
          <Button onClick={this.handleFetchCountry}>Croatia</Button>
        </div>
        {/* On faitr une copie du state pour le component Card, on ne lui donne pas l'original */}
        <Card countryInfo={{ ...this.state }} />
      </div>
    );
  }
}

export default App;
