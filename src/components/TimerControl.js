
import React from 'react';
import { Button } from 'reactstrap';

const TimerControl = (props) => {
    const type = props.type;
    const length = props.length;
    const modifyLength = props.modifyLength;
    return (
        <div>
            <div id={type + "-label"}>{type} length</div>
            <Button id={type + "-decrement"} onClick={() => modifyLength(type, '-')}>decrement</Button>
			<Button id={type + "-increment"} onClick={() => modifyLength(type, '+')}>increment</Button>
            <div id={type + "-length"}>{length}</div>
		</div>
    );
};

export default TimerControl;