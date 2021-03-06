import React, { Component } from 'react';
import TimerControl from './TimerControl';
import TimerDisplay from './TimerDisplay';
import { Container, Row, Col, Jumbotron } from 'reactstrap';

const TYPES = ['session', 'break']

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
    this.intervalID = null;
  }

  handleInitTimerLength = (type = TYPES[0]) => {
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
          this.setState({timerLength: 0});
          break;
      }
    }
  }

  handleStartStop = () => {
    if (!this.intervalID)
    {
      this.handleInitTimerLength();
      this.intervalID = setInterval(this.handleTimerCountDown, 1000);
    }

    this.setState(prevState => ({
      running: !prevState.running
    }));
  }

  handleTimerCountDown = () => {
    if (this.state.running) {
      if (this.state.timerLength > 0) {
        this.setState({
          timerLength: this.state.timerLength - 1
        });
      } else {
        document.getElementById('beep').play();
        this.setState(prevState => ({
          timerLength: prevState.type === TYPES[0] ? prevState.breakLength : prevState.sessionLength,
          type: TYPES.find(type => prevState.type !== type)
        }));
      }
    }
  }

  handleReset = () => {
    clearInterval(this.intervalID);
    this.intervalID = null;
    
    this.setState({
      sessionLength: 1500,
      breakLength: 300,
      timerLength: 0,
      type: TYPES[0],
      running: false
    });

    document.getElementById('beep').pause();
    document.getElementById('beep').currentTime = 0;
  }
  
  handleModifyLength = (type, operator) => {
    if (!this.state.running) {
      switch(type) {
        case TYPES[0]:
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
        case TYPES[1]:
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
    }
  }
  
  render() {
    const reset = this.handleReset;
    const modifyLength = this.handleModifyLength;
    const startStop = this.handleStartStop;
    const { sessionLength, breakLength, timerLength, type } = this.state;
    return (
      <Container>
        <Jumbotron>
          <h1 className="display-4">Pomodoro clock</h1>
          <p className="lead">This is the best pomodoro clock you could find !</p>
          <Row className="my-5">
            <Col>
              <TimerControl key={TYPES[0]} type={TYPES[0]} length={sessionLength} modifyLength={modifyLength}/>
            </Col>
            <Col>
              <TimerControl key={TYPES[1]} type={TYPES[1]} length={breakLength} modifyLength={modifyLength}/>
            </Col>
          </Row>
          <Row className="my-5">
            <Col>
              <TimerDisplay reset={reset} startStop={startStop} length={timerLength} type={type}/>
            </Col>
          </Row>
        </Jumbotron>
        <audio id="beep" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>
      </Container>
    );
  }
}

export default PomodoroClock;