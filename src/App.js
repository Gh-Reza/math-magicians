import { Route, Routes } from 'react-router-dom';
import Calculator from './pages/Calculator';
import Quote from './pages/Quote';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <Routes>
          <Route path="/s" element={<Home />} />
          <Route path="/calculator" element={<Calculator className="calc" />} />
          <Route path="/" element={<Quote className="quote" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
