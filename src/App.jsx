import React, { useState ,useEffect} from 'react';
import { Container, Col } from 'react-bootstrap';
import { BtnGroup } from './components/btnGroup';
import { ShowTable } from './components/ShowTable';
import { Config } from './config';
import './App.css';

function App() {
    const [data, setData] = useState(JSON.parse(JSON.stringify(Config.initState)));
    function clearData() {
        setData(JSON.parse(JSON.stringify(Config.initState)));
        
    }
    useEffect(() => {
        if (data.gameWin) {
            alert('Game wins!\nNumber is : ' + data.myNumber.join(''));
            clearData();
        }
        if (data.gameOver) {
            alert('Game Over!\nNumber is : ' + data.myNumber.join(''));
            clearData();
        }
    },[data.gameWin,data.gameOver]);

    
    return (
        <Container
            fluid="sm"
            className="text-center d-flex justify-content-center"
        >
            <Col md="6">
                <h2 className="text-white p-2">Guess My Number</h2>
                {/* <div className='bg-primary'> */}
                <ShowTable State={{ data, setData }} />
                <BtnGroup State={{ data, setData }} />
                {/* </div> */}
            </Col>
        </Container>
    );
}

export default App;
