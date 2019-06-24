import React, { Component } from 'react';
import TimerControl from './TimerControl';
import TimerDisplay from './TimerDisplay';

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timers: [
        {
          type: "session",
          length: 25
        },
        {
          type: "break",
          length: 5
        }
      ]
    }
    this.handleReset = this.handleReset.bind(this);
  }
  
  handleReset() {
    this.setState({
      timers: [
        {
          type: "session",
          length: 25
        },
        {
          type: "break",
          length: 5
        }
      ]
    });
  }

  
  
  render() {
    const timers = this.state.timers.map(timer => <TimerControl key={timer.type} type={timer.type} length={timer.length}/>);
    const reset = this.handleReset;
    return (
      <div>
        {timers}
        <TimerDisplay reset={reset}/>
      </div>
    );
  }
}

export default PomodoroClock;
