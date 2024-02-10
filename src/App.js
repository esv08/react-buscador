import './App.css';
import Searcher from './components/Searcher';
import Card from './components/Card';


function App() {
  return (
    <div className="App-header">

    <div className='header'>
      <Searcher />
    </div>

      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
