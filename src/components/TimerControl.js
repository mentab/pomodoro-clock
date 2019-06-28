
import React from 'react';
import { Button } from 'reactstrap';

const TimerControl = (props) => {
    const type = props.type;
    const length = props.length;
    const modifyLength = props.modifyLength;

    const formatSecondsToMinutes = () => {
        return length / 60;
    };

    return (
        <div>
            <div id={type + "-label"}>{type} length</div>
            <Button id={type + "-decrement"} onClick={() => modifyLength(type, '-')}>decrement</Button>
			<Button id={type + "-increment"} onClick={() => modifyLength(type, '+')}>increment</Button>
            <div id={type + "-length"}>{formatSecondsToMinutes()}</div>
		</div>
    );
};

export default TimerControl;