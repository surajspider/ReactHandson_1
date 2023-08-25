// import logo from './logo.svg';
import './App.css';
// import ClassCompo from './Compo/ClassCompo';
import DisplayData from './Compo/DisplayData';
// import FuncCompo from './Compo/FuncCompo';
import './style.css';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1 id="heading">Styling using Functional and Class Component</h1>
      <DisplayData />
    </div>
  );
}

export default App;
