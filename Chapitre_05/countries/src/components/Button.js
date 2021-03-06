import React from "react";

class Button extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.children);
  };

  render() {
    return <button onClick={this.handleClick}>{this.props.children}</button>;
  }
}

export default Button;
