import React, { Component } from 'react';
import TimerControl from './TimerControl';
import TimerDisplay from './TimerDisplay';

const TYPES = ['SESSION', 'BREAK']

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 25,
      breakLength: 5,
      timerLength: 0,
      type: TYPES[0],
      running: false
    };
    this.handleReset = this.handleReset.bind(this);
    this.handleModifyLength = this.handleModifyLength.bind(this);
    this.handleStartStop = this.handleStartStop.bind(this);
    this.handleTimerCountDown = this.handleTimerCountDown.bind(this);
    this.handleInitTimerLength = this.handleInitTimerLength.bind(this);
    this.timer = setInterval(this.handleTimerCountDown, 1000);
  }
  
  componentWillMount() {
    this.handleInitTimerLength();
  }

  handleInitTimerLength(type = TYPES[0]) {
    switch(type)
    {
      case TYPES[0]:
        this.setState({
          timerLength: this.state.sessionLength
        });
        break;
      case TYPES[1]:
        this.setState({
          timerLength: this.state.breakLength
        });
        break;
      default:
        this.setState({
          timerLength: this.state.sessionLength
        });
        break;
    }
  }

  handleStartStop() {
    this.setState({
      running: !this.state.running
    });
  }

  handleTimerCountDown() {
    if (this.state.running) {
      if (this.state.timerLength > 0) {
        this.setState({
          timerLength: this.state.timerLength - 1
        });
      } 
      else {
        this.setState(prevState => ({
          timerLength: prevState.type === TYPES[0] ? prevState.breakLength : prevState.sessionLength,
          type: TYPES.find(type => prevState.type !== type)
        }));
      }
    }
  }

  handleReset() {
    this.setState({
      sessionLength: 25,
      breakLength: 5,
      timerLength: 0,
      type: 'session',
      running: false
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
                sessionLength: this.state.sessionLength + 1
              });
            }
            break;
          case '-':
            if (this.state.sessionLength > 1)
            {
              this.setState({
                sessionLength: this.state.sessionLength - 1
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
                breakLength: this.state.breakLength + 1
              });
            }
            break;
          case '-':
            if (this.state.breakLength > 1)
            {
              this.setState({
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
    const timerLength = this.state.timerLength;
    return (
      <div>
        <TimerControl key='session' type='session' length={sessionLength} modifyLength={modifyLength}/>
        <TimerControl key='break' type='break' length={breakLength} modifyLength={modifyLength}/>
        <TimerDisplay reset={reset} startStop={startStop} length={timerLength}/>
      </div>
    );
  }
}

export default PomodoroClock;
