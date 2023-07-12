import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator" element={<Calculator className="calc" />} />
          <Route path="/quote" element={<Quote className="quote" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
