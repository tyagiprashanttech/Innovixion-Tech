import logo from './logo.svg';
import './App.css';
import Format from './task1/Format';
import ToDoList from './task1/ToDoList';
import Database from './task1/Database';

function App() {
  return (
    <>
    <Format/>
    <ToDoList/>
    <Database/>

    
  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>

    </>
  );
}

export default App; 
