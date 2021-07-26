import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isEmailValid: false,
      isPasswordValid: false,
      isFormSubmitted: false,
    };
  }

  onEmailChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        email: e.target.value,
        isEmailValid: emailPattern.test(e.target.value),
      };
    });
  };

  onPasswordChange = (e) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        password: e.target.value,
        isPasswordValid: e.target.value.length > 5 /* Return a boolean */,
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.isEmailValid) {
      this.setState((prevState) => {
        return {
          ...prevState,
          isFormSubmitted: true,
        };
      });
    }
  };
  render() {
    return !this.state.isFormSubmitted ? (
      <div>
        <div className="container">
          <h1 className="text center p-3">Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label for="InputEmail">Email address</label>
              <input
                type="email"
                className={
                  this.state.isEmailValid
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                id="InputEmail"
                onChange={this.onEmailChange}
              ></input>
            </div>
            <div className="form-group">
              <label InputPassword>Password</label>
              <input
                type="password"
                className={
                  this.state.isPasswordValid
                    ? "form-control is-valid"
                    : "form-control is-invalid"
                }
                id="InputPassword"
                onChange={this.onPasswordChange}
                placeholder="Password"
              ></input>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="Check"
              ></input>
              <label>Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    ) : (
      <div>FORM SUBMITTED</div>
    );
  }
}

export default App;
