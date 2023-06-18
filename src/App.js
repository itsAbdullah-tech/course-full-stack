import { useState } from "react";

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + bad + neutral;
  const average = good + bad + neutral / 3;


  const goodHandler = () => {
    return setGood(good+1);
  }

  const neutralHandler = () => {
    return setNeutral(neutral+1);
  }

  const badHandler = () => {
    return setBad(bad+1);
  }


  return (
    <div className="App">
      <h1>Give FeedBack</h1>
      <button onClick={() => goodHandler()}>good</button>
      <button onClick={() => neutralHandler()}>neutral</button>
      <button onClick={() => badHandler()}>bad</button>


      <h2>Statistics</h2>
      if(good || bad || neutral || all || average){
        return  (<p>Good {good}</p>
        <p>Neutral {neutral}</p>
        <p>Bad {bad}</p>
        <p>All {all}</p>
        <p>Average {average}</p>)
      }
      
    </div>
  );
}

export default App;
