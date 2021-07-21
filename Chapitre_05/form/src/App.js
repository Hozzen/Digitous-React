import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const patternEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const patternPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      classEmail: "form-control is-invalid",
      classPassword: "form-control is-invalid"
    }
  }

  onInputEmail = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      email: e.target.value,
      classEmail: patternEmail.test(e.target.value) ? "form-control is-valid" : "form-control is-invalid"
    }))
  }
  render() {
    return(
      <div>
        <div className="container">
          <h1 className="text center p-3">Login</h1>
          <form>
            <div className="form-group">
              <label for="InputEmail" >Email address</label>
              <input type="email" className={this.state.classEmail} id="InputEmail"></input>
            </div>
            <div className="form-group">
              <label InputPassword>Password</label>
              <input type="password" className={this.state.classPassword} id="InputPassword" placeholder="Password"></input>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="Check"></input>
              <label>Remember me</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

export default App;
