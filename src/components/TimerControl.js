
import React from 'react';
import { Button } from 'reactstrap';

const TimerControl = (props) => {
    const type = props.type;
    const length = props.length;
    return (
        <div>
            <div id={type + "-label"}>{type} length</div>
            <Button id={type + "-decrement"}>decrement</Button>
			<Button id={type + "-increment"}>increment</Button>
            <div id={type + "-length"}>{length}</div>
		</div>
    );
};

export default TimerControl;