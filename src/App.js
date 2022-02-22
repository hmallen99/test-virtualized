import logo from './logo.svg';
import './App.css';
import ReactVirtualizedExample from "./ReactVirtualizedExample"
import ReactWindowExample from './ReactWindowExample'
import ReactNativeWebExample from './ReactNativeWebExample';

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
      <div>
        <h1>React Native Web</h1>
        <div style={{width: 400, float: 'left'}}>
          <ReactNativeWebExample inverted={true} horizontal={false}/>
        </div>
        <div style={{width: 400, float: 'right'}}>
          <ReactNativeWebExample inverted={false} horizontal={true}/>
        </div>
      </div>

    </div>
  );
}

export default App;
