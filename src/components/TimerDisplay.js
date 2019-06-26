
import React from 'react';

const TimerDisplay = (props) => {
    const reset = props.reset;
    const startStop = props.startStop;
    const length = props.length;
    return (
        <div>
			<div id="timer-label">Timer label</div>
            <div id="time-left">{length}</div>
            <div id="start_stop" onClick={startStop}>Start stop</div>
            <div id="reset" onClick={reset}>Reset</div>
		</div>
    );
};

export default TimerDisplay;