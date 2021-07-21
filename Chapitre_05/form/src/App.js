import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {
  render() {
    return(
      <div>
        <div className="container">
          <h1 className="text center p-3">Login</h1>
          <form>
            <div className="form-group">
              <label for="InputEmail" >Email address</label>
              <input type="email" className={this.state.class.Email} id="InputEmail"></input>
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
