import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div>
        <img
          style={{ width: "15rem" }}
          src={this.props.countryInfo.flag}
          alt=""
        />
        <h3>Country:</h3>
        <p>{this.props.countryInfo.country}</p>
        <h3>Capital:</h3>
        <p>{this.props.countryInfo.capital}</p>
        <h3>Region:</h3>
        <p>{this.props.countryInfo.region}</p>
        <h3>Population:</h3>
        <p>{this.props.countryInfo.population}</p>
      </div>
    );
  }
}

export default Card;
