import "./App.css";
import { useState } from "react";
import options from "./options.json";

const strings = {
  n: "Não corta ❌",
  c: "Corta ✅",
  p: "Corta se tiver porta paralela 🟥",
  b: "Corta se tiver mais de uma pilha 🔋",
  s: "Corta se o último dígito do número de série for par 🔢",
};

function App() {
  const [blue, setBlue] = useState(false);
  const [red, setRed] = useState(false);
  const [star, setStar] = useState(false);
  const [led, setLed] = useState(false);

  const result = options.find(
    (o) => o.blue === blue && o.red === red && o.led === led && o.star === star
  );

  function clear() {
    setBlue(false);
    setRed(false);
    setStar(false);
    setLed(false);
  }

  return (
    <>
      <h1>Fios de bombas</h1>
      <button onClick={clear}>Limpar</button>
      <label className="container">
        <input
          name="Azul"
          checked={blue}
          type="checkbox"
          onChange={(e) => setBlue(e.target.checked)}
        />
        <span className="checkmark"></span>
        Azul
      </label>
      <label className="container">
        <input
          name="Vermelho"
          type="checkbox"
          checked={red}
          onChange={(e) => setRed(e.target.checked)}
        />
        <span className="checkmark"></span>
        Vermelho
      </label>
      <label className="container">
        <input
          name="Estrela ⭐"
          type="checkbox"
          checked={star}
          onChange={(e) => setStar(e.target.checked)}
        />
        <span className="checkmark"></span>
        Estrela⭐
      </label>
      <label className="container">
        <input
          name="Led"
          type="checkbox"
          checked={led}
          onChange={(e) => setLed(e.target.checked)}
        />
        <span className="checkmark"></span>
        Led
      </label>
      <h3>{result ? strings[result.result as keyof typeof strings] : "-"}</h3>
    </>
  );
}

export default App;
