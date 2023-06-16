import React from 'react';
import { Table,Col,Row} from 'react-bootstrap';

function ShowTable({ State }) {
    const { guessNum, trueNum, truePosition } = State.data;
    // console.log({ guessNum, trueNum, truePosition })
    // const _trueNum = trueNum?trueNum:trueNum==="0"?"0":"."
    // console.log(State.data);
    return (
            <Table>
                <thead>
                        <Row>
                            <Col xs='8'> YOUR GUESS</Col>
                            <Col xs='2'> Correct <br/>Num </Col>
                            <Col xs='2'> Correct position</Col>
                        </Row>
                </thead>
                <tbody>
                    {guessNum.map((v, i) => (
                        <Row key={i}>
                            <Col xs='8'>{guessNum[i]?.join(' ') ?? '.'}</Col>
                            <Col xs='2'>{trueNum[i] ?? '.'}</Col>
                            <Col xs='2'>{truePosition[i] ?? '.'}</Col>
                        </Row>
                    ))}
                </tbody>
            </Table>
    );
}

export { ShowTable };
