import PropTypes from 'prop-types';
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';

const TimerDisplay = (props) => {
    const { reset, startStop, length, type } = props;

    const formatSecondsToClock = () => {
        let m = Math.floor(length / 60);
        let s = length - 60 * m;
        return `${formatNumberToDigit(m)}:${formatNumberToDigit(s)}`;
    };

    const formatNumberToDigit = (num) => {
        return num < 10 ? `0${num}` : num;
    };
    
    return (
        <Card>
            <CardBody className="text-center">
			    <CardTitle id="timer-label" className="h2">{type}</CardTitle>
                <CardSubtitle id="time-left" className="display-1">{formatSecondsToClock()}</CardSubtitle>
                <ButtonGroup>
                    <Button id="start_stop" onClick={startStop} color="primary">Start stop</Button>
                    <Button id="reset" onClick={reset} color="info">Reset</Button>
                </ButtonGroup>
            </CardBody>
		</Card>
    );
};

TimerDisplay.propTypes = {
	reset: PropTypes.func,
    startStop: PropTypes.func,
    length: PropTypes.number,
    type: PropTypes.string
}

export default TimerDisplay;