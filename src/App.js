import './App.css';   
import './style-sheet/Counter.css';
import Counter from './components/Counter.js';
import { useState } from 'react';
import Button from './components/Button.js'

function App() { 

  const[numClics,setNumClics] = useState(0);


  const handleClick = () => {
    setNumClics(numClics + 1);
  };

  const restartCounter = () => {
    setNumClics(0)
  };

  return (
    <div className="App">
      <div className='box-title'>
        <h1>Click Counter</h1>
      </div>
      <div className='main-box'>
        <Counter numClics={numClics}/>
        <Button 
        text='Click'
        isClickButton={true}
        handleClick={handleClick}/>

        <Button 
        text='Reset'
        isClickButton={false}
        handleClick={restartCounter}/>


      </div>
    </div>
  );
}

export default App;
