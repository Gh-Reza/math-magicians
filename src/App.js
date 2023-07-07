import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="App">
      <Calculator className="calc" />
      <Quote className="quote" />
    </div>
  );
}

export default App;
