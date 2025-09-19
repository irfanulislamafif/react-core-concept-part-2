import { useState } from "react";

export default function Batsman() {
  const [runs, setRuns] = useState(0);
  const [wickets,setWickets] = useState(0)
  const [sixes, setSixes] = useState(0)
  const handleSingle = () => {
    const updatedRuns = runs + 1;
    setRuns(updatedRuns)
  };
  const handleSix = () => {
    const updatedRuns = runs + 6;
    const updatedSixes = sixes + 1;
    setSixes(updatedSixes)
    setRuns(updatedRuns)
  }
  const handleFour = () => {
    const updatedRuns = runs + 4;

    setRuns(updatedRuns)
  }
  const handleWicket = () => {
    const updateWickets = wickets + 1
    setWickets(updateWickets)
  }
  return (
     <div>
      <h3>Player: Bangla Batsman</h3>
      <p><b>Six: {sixes}</b></p>
      {
        runs> 50 && <p> Your Score: 50</p>
      }
      <h1>Score: {runs} / {wickets}</h1>
      <button onClick={handleSingle}>Singles</button>
      <button onClick={handleFour}>Four</button>
      <button onClick={handleSix}>Six</button>
      <button onClick={handleWicket}>Wicket</button>
    </div>
  );
}
