import Header from './components/Header';
import AllRouts from './routes/Routes';

function App() {
  return (
    <>
      <div className="App d-flex flex-column min-vh-100">
        <Header />
        <AllRouts />
      </div>
    </>
  );
}

export default App;
