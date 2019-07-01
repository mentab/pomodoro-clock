
import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, ButtonGroup } from 'reactstrap';

const TimerControl = (props) => {
    const type = props.type;
    const length = props.length;
    const modifyLength = props.modifyLength;

    const formatSecondsToMinutes = () => {
        return length / 60;
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardTitle id={type + "-label"} className="h3">{type} length</CardTitle>
                <CardSubtitle id={type + "-length"} className="h4">{formatSecondsToMinutes()}</CardSubtitle>
                <ButtonGroup>
                    <Button id={type + "-decrement"} onClick={() => modifyLength(type, '-')} color="danger">decrement</Button>
			        <Button id={type + "-increment"} onClick={() => modifyLength(type, '+')} color="success">increment</Button>
                </ButtonGroup>
            </CardBody>
		</Card>
    );
};

export default TimerControl;