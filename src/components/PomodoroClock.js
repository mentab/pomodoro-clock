import React, { Component } from 'react';
import TimerControl from './TimerControl';
import TimerDisplay from './TimerDisplay';

const TYPES = ['SESSION', 'BREAK']

class PomodoroClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sessionLength: 1500,
      breakLength: 300,
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
    if (!this.state.running) {
      switch(type)
      {
        case TYPES[0]:
          this.setState(prevState => ({
            timerLength: prevState.sessionLength
          }));
          break;
        case TYPES[1]:
          this.setState(prevState => ({
            timerLength: prevState.breakLength
          }));
          break;
        default:
          this.setState(prevState => ({
            timerLength: prevState.sessionLength
          }));
          break;
      }
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
      sessionLength: 1500,
      breakLength: 300,
      timerLength: 0,
      type: 'session',
      running: false
    });
    this.handleInitTimerLength();
  }
  
  handleModifyLength(type, operator) {
    if (!this.state.running) {
      switch(type) {
        case 'session':
          switch(operator) {
            case '+':
              if (this.state.sessionLength < 3600)
              {
                this.setState(prevState => ({
                  sessionLength: prevState.sessionLength + 60
                }));
              }
              break;
            case '-':
              if (this.state.sessionLength > 60)
              {
                this.setState(prevState => ({
                  sessionLength: prevState.sessionLength - 60
                }));
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
              if (this.state.breakLength < 3600)
              {
                this.setState(prevState => ({
                  breakLength: prevState.breakLength + 60
                }));
              }
              break;
            case '-':
              if (this.state.breakLength > 60)
              {
                this.setState(prevState => ({
                  breakLength: prevState.breakLength - 60
                }));
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
      this.handleInitTimerLength();
    }
  }
  
  render() {
    const reset = this.handleReset;
    const modifyLength = this.handleModifyLength;
    const startStop = this.handleStartStop;
    const sessionLength = this.state.sessionLength;
    const breakLength = this.state.breakLength;
    const timerLength = this.state.timerLength;
    const type = this.state.type;
    return (
      <div>
        <TimerControl key='session' type='session' length={sessionLength} modifyLength={modifyLength}/>
        <TimerControl key='break' type='break' length={breakLength} modifyLength={modifyLength}/>
        <TimerDisplay reset={reset} startStop={startStop} length={timerLength} type={type}/>
      </div>
    );
  }
}

export default PomodoroClock;
