import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Calculator className="calc" />} />
          <Route path="/quote" element={<Quote className="quote" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
