import React from "react";
import './App.css';
import Json from "./users.json";
import UserInfo from "./components/UserInfo";
import Counter from "./components/Counter";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 10
    }
  }

  incrementCounter = () => {
    if(this.state.count < Json.length){
      let stateUpdate = {
        ...this.state,
        count: this.state.count+1
      }
      this.setState(stateUpdate)
    }   
  }

  decrementCounter = () => {
    if(this.state.count > 1){
      let stateUpdate = {
        ...this.state,
        count: this.state.count-1
      }
      this.setState(stateUpdate)
    }
  }

  render() {
    return(
      <div>
        <h1>Counter</h1>

        <Counter count={this.state.count} addFunction={this.incrementCounter} subtractFunction={this.decrementCounter} />
        <UserInfo userInfo={Json.slice(0, this.state.count).map((item)=> {
          return (
            <p>{item.name} - {item.email} - {item.website}</p>
          )
        })}/>
      </div>
    )
  }
}

export default App;
