import './App.css';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Calculator className="calc" />
        <Quote className="quote" />
      </div>
    </>
  );
}

export default App;
