// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Config } from '../config';

const BtnGroup = ({ State }) => {
    const { data, setData } = State;
    const { count, guessNum, trueNum, truePosition } = data;
    const [displayNum, setDisplayNum] = useState([]);
    const nums = Array.from({ length: 9 }, (_, i) => i + 1);

    function addDisplayNum(e) {
        const value = e.target.value;
        const condition =
            displayNum.length < 4 &&
            !displayNum.find((element) => element === value);
        // console.log(condition);
        if (condition) setDisplayNum((prev) => [...prev, value]);
    }
    function delDisplayNum(e) {
        if (displayNum.length === 1) {
            setDisplayNum([]);
        } else
            setDisplayNum(
                displayNum.filter((item) => item.name !== displayNum.pop())
            );
    }
    function submit() {
        // console.log('data:', data);
        const _trueNum = checktTrueNum();
        const _truePosition = checktPosition();
        if (_truePosition === 4) {
            setData((prev) => ({ ...prev, gameWin: true }));
            setDisplayNum([])
            return;
        }
        if (count + 1 === Config.MAXROUND) {
            setData((prev) => ({ ...prev, gameOver: true }));
            setDisplayNum([])
            return;
        }
        guessNum[count] = [...displayNum];
        trueNum[count] = _trueNum;
        truePosition[count] = checktPosition();

        setData((prev) => {
            return { ...prev, count: count + 1 };
        });
        setDisplayNum([]);
    }
    function checktTrueNum() {
        let trueNum = 0;
        displayNum.forEach((v, i) => {
            const isTrueNum = data.myNumber.find((element) => element === v);
            if (isTrueNum) trueNum++;
        });

        return trueNum;
    }

    function checktPosition() {
        let truePosition = 0;
        displayNum.forEach((v, i) => {
            if (displayNum[i] === data.myNumber[i]) truePosition++;
        });
        return truePosition;
    }

    return (
        <div className="align-items-center justify-content-center p-2 ">
            <div className="bg-white fs-3">{displayNum?.join(' ') || '.'}</div>

            <Row clasename="mt-1 p-3">
                <Col xs="9">
                    {nums.map((num, i) => {
                        return (
                            <>
                                <Button
                                    variant="outline-primary m-2"
                                    key={"but"+i}
                                    value={num}
                                    onClick={addDisplayNum}
                                >
                                    {num}
                                </Button>
                                {num === 5 && <br key={"br"+i} />}
                            </>
                        );
                    })}
                </Col>
                <Col xs="2" className="m-1 pb-2">
                    <Button
                        variant="outline-danger m-1 h-50 w-100"
                        onClick={delDisplayNum}
                        disabled={displayNum.length===0}
                    >
                        {'<<'}
                    </Button>
                    <Button
                        variant="outline-success m-1 h-50 w-100"
                        onClick={submit}
                        disabled={displayNum.length!==Config.NUMLENGTH}
                    >
                        {'>>'}
                    </Button>
                </Col>
            </Row>
        </div>
    );
};

export { BtnGroup };
