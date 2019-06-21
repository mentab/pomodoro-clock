
import React from 'react';

const TimerDisplay = (props) => {
    return (
        <div>
			<div id="timer-label">Timer label</div>
            <div id="time-left">Time left</div>
            <div id="start-stop">Start stop</div>
            <div id="reset">Reset</div>
		</div>
    );
};

export default TimerDisplay;