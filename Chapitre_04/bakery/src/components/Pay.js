import React from "react";
import Card from "./Card";

class Pay extends React.Component {
  constructor() {
    super();

    this.state = {
      basket: [],
      total: 0,
      totalTVA: 0,
      totalEcoTax: 0,
      totalTTC: 0,
    };
  }

  handleSelect = (name, price) => {
    console.log(name);
    console.log(price);
  };

  render() {
    return (
      <div>
        <p>
          Total:{" "}
          {this.props.items.reduce(
            (accumulator, currentItem) => (accumulator += currentItem.price),
            0
          )}
          €
        </p>
        <h2>Pay</h2>
        <p>SubTotal :{this.state.total}</p>
        <p>VAT :{this.state.totalTVA}</p>
        <p>Eco Tax :{this.state.totalEcoTax}</p>
        <p>TTC :{this.state.totalTTC}</p>
        <p>
          {this.props.items.map((item) => {
            return (
              <Card
                productName={this.props.productName}
                price={this.props.price}
              />
            );
          })}
        </p>
      </div>
    );
  }
}

export default Pay;
