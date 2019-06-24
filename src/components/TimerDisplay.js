
import React from 'react';

const TimerDisplay = (props) => {
    const reset = props.reset;
    return (
        <div>
			<div id="timer-label">Timer label</div>
            <div id="time-left">Time left</div>
            <div id="start_stop">Start stop</div>
            <div id="reset" onClick={reset}>Reset</div>
		</div>
    );
};

export default TimerDisplay;