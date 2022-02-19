import logo from './logo.svg';
import './App.css';
import ReactVirtualizedExample from "./ReactVirtualizedExample"
import ReactWindowExample from './ReactWindowExample'

function App() {
  return (
    <div className="App">
      <div>
        <h1>React-Virtualized</h1>
        <ReactVirtualizedExample />
      </div>
      <div>
        <h1>React-Window</h1>
        <ReactWindowExample />
      </div>
    </div>
  );
}

export default App;
