import React, { Component } from 'react';
import '../App.css';
import Stopwatch from '../components/Stopwatch';
import Counter from '../components/Counter';
import Stats from '../components/Stats'
import PropTypes from 'prop-types';

class Scoreboard extends Component {
  render() {
    return (
      <div className="Scoreboard">
        <Stopwatch  />
       
       
        Some text here
      </div>
    );
  }
}

export default Scoreboard;
