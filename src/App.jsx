import Counter from "./counter";
import "./App.css";
import Batsman from "./batsman";

function App() {
  function handleClick() {
    alert("Iam clicked");
  }

  const handleClick3 = () => {
    alert("clicked 3");
  };
  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };
  return (
    <>
      <h1>Vite + React</h1>
      <Batsman></Batsman>
      <Counter />

      <button>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick}>Click Me</button>
      <br></br>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={() => alert("click 4")}>Click 4</button>
      <button onClick={() => handleAdd5(10)}>Click Add 5</button>
    </>
  );
}

export default App;
