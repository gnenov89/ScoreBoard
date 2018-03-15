import React, { Component } from 'react';
import '../App.css';
import Stopwatch from '../components/Stopwatch'

class Scoreboard extends Component {
  render() {
    return (
      <div className="Scoreboard">
        <Stopwatch />
        Some text here
      </div>
    );
  }
}

export default Scoreboard;
