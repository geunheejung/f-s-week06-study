import Counter from "./components/Counter";
import CounterControl from "./components/CountControl";
import "./App.css";
import NameCard from "./components/NameCard";
import Step4Counter from "./components/step4/Step4Counter";
import Step4CounterControl from "./components/step4/Step4CountControl";

function App() {
  return (
    <div className="App">
      <Counter />
      <Counter />
      <CounterControl />

      <NameCard />

      <h1>Step4</h1>
      <div>
        <Step4Counter />
        <Step4CounterControl />
      </div>
    </div>
  );
}

export default App;
