import React from "react";
const source =
  "https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      image: "./images/item.png",
    };
  }

  componentDidMount() {
    this.handleFetch("croissant");
  }

  handleFetch(productName) {
    fetch(`${source}${productName}.png`)
      .then((res) => res.blob())
      .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob);
        this.setState((prevState) => {
          return {
            ...prevState,
            image: objectURL,
          };
        });
      });
  }

  handleClick = () => {
    this.props.addItem(this.props.productName, this.props.price);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <img style={{ width: "100px" }} src={this.state.image} alt="item" />
        </button>
      </div>
    );
  }
}

export default Card;
