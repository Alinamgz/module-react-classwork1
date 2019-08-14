import React, {useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {Note} from './components/Note';

function App() {
    const [showCounterStatus, setCounterStatus] = useState(false);
    const toggleCounterBtnHandler = () => {
        setCounterStatus(!showCounterStatus);
        console.log("showCounterStatus: " + showCounterStatus);
    };
  return (
    <div className="App">

        <Note/>

        <button onClick={toggleCounterBtnHandler}> Counter Toggle</button>
        { showCounterStatus ? <Counter startValue={0} /> : null }
    </div>
  );
}

export default App;
