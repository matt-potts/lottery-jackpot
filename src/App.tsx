import { useEffect, useState } from 'react'
import './App.css'
import './odometer.css'
import Odometer from 'react-odometerjs';

const getRandomIncrease = (limit: number): number => Math.floor(Math.random() * limit);

function App() {
  const [jackpotValue, setJackpotValue] = useState(getRandomIncrease(1000));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setJackpotValue((oldCount) => oldCount + getRandomIncrease(1000));
    }, 5000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);


  return (
    <div className="jackpot-container jackpot-font">
      <p className="jackpot-title">Current Jackpot</p>
      <div className="jackpot-odometer">
        $&nbsp;&nbsp;&nbsp;<Odometer value={jackpotValue} format="(,ddd)" />
      </div>
      <button className="jackpot-button">Play Now</button>
      <p className="jackpot-next-draw">Next Draw: Thursday 1:40pm AST</p>
    </div>
  )
}

export default App