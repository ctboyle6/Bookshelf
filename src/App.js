import './App.css';
import Bookshelf from './components/Bookshelf/Bookshelf';

function App() {
  return (
    <div className="App">
      <h1>Bookshelf</h1>
      <hr></hr>
      {/* Search Box */}
      <Bookshelf />
    </div>
  );
}

export default App;
