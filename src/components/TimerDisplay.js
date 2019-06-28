
import React from 'react';

const TimerDisplay = (props) => {
    const reset = props.reset;
    const startStop = props.startStop;
    const length = props.length;
    const type = props.type;

    const formatSecondsToClock = () => {
        let m = Math.floor(length / 60);
        let s = length - 60 * m;
        return `${formatNumberToDigit(m)}:${formatNumberToDigit(s)}`;
    };

    const formatNumberToDigit = (num) => {
        return num < 10 ? `0${num}` : num;
    };
    
    return (
        <div>
			<div id="timer-label">{type}</div>
            <div id="time-left">{formatSecondsToClock()}</div>
            <div id="start_stop" onClick={startStop}>Start stop</div>
            <div id="reset" onClick={reset}>Reset</div>
		</div>
    );
};

export default TimerDisplay;