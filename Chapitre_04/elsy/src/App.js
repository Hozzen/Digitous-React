import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Box from './components/Box.js';
import './styles/global.css'
const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const StepsMax = 50000;

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
          <Box icon="local_drink" color="#3A85FF" value={1.5} unit="L" />
        </div>
      </div>
    )
  }
}

export default App;
