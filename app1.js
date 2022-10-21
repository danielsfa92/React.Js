import './App.css';
import { useState } from "react";

function App() {
  const [name, setName] = useState("Daniel");
  const [number,setNumber] = useState(1)

  const changenumber = () => {
    //previous value
    setNumber(number +1);
    //setNumber((prevNumber) => prevNumber + 1);
    //setNumber((prevNumber) => prevNumber + 1);
  };

  return (
    <div className="App">
      <h1>Meu Nome é: {name}</h1>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <div>
        <p>Número: {number}</p>
        <button> onClick={changenumber}Mudar Número!</button>
      </div>
    </div>
  );
}

export default App;
