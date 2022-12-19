import logo from './logo.svg';
import './App.css';
import './main.scss';
import BaseClock from './components/BaseClock';
import ModularClock from './components/ModularClock';

function App() {
  return (
    <div className="App">
      <BaseClock />
      <ModularClock />
    </div>
  );
}

export default App;
