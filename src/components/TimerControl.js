
import React from 'react';
import { Button } from 'reactstrap';

const TimerControl = (props) => {
    const type = props.type;
    return (
        <div>
            <div id={type + "-label"}>{type} length</div>
            <Button id={type + "-decrement"}>decrement</Button>
			<Button id={type + "-increment"}>increment</Button>
            <div id={type + "-length"}></div>
		</div>
    );
};

export default TimerControl;