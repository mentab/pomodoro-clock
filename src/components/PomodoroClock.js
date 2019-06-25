import React, { Component } from 'react';
import TimerControl from './TimerControl';
import TimerDisplay from './TimerDisplay';

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleModifyLength = this.handleModifyLength.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
  }
  
  handleStartStop() {
    this.timer = setInterval(this.handleTimer, 1000);
  }

  handleTimer() {
    console.log('OK');
  }

  handleReset() {
    this.setState({
      sessionLength: 25,
      breakLength: 5
    });
  }
  
  handleModifyLength(type, operator) {
    switch(type) {
      case 'session':
        switch(operator) {
          case '+':
            if (this.state.sessionLength < 60)
            {
              this.setState({
                sessionLength: this.state.sessionLength + 1,
                breakLength: this.state.breakLength
              });
            }
            break;
          case '-':
            if (this.state.sessionLength > 1)
            {
              this.setState({
                sessionLength: this.state.sessionLength - 1,
                breakLength: this.state.breakLength
              });
            }
            break;
          default:
            console.log('invalid operator');
            break;
        }
        break;
      case 'break':
        switch(operator) {
          case '+':
            if (this.state.breakLength < 60)
            {
              this.setState({
                sessionLength: this.state.sessionLength,
                breakLength: this.state.breakLength + 1
              });
            }
            break;
          case '-':
            if (this.state.breakLength > 1)
            {
              this.setState({
                sessionLength: this.state.sessionLength,
                breakLength: this.state.breakLength - 1
              });
            }
            break;
          default:
            console.log('invalid operator');
            break;
        }
        break;
        default:
          console.log('invalid type');
          break;
    }
  }
  
  render() {
    const reset = this.handleReset;
    const modifyLength = this.handleModifyLength;
    const startStop = this.handleStartStop;
    const sessionLength = this.state.sessionLength;
    const breakLength = this.state.breakLength;
    return (
      <div>
        <TimerControl key='session' type='session' length={sessionLength} modifyLength={modifyLength}/>
        <TimerControl key='break' type='break' length={breakLength} modifyLength={modifyLength}/>
        <TimerDisplay reset={reset} startStop={startStop}/>
      </div>
    );
  }
}

export default PomodoroClock;
