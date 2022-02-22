import './App.css';
import React, { useState } from 'react';
import Container from './Container.js';


function App() {
  const [version, setVersion] = useState(0)

  return (
    <div className="App">
      <button onClick={() => setVersion(0)}>React Virtualized</button>
      <button onClick={() => setVersion(1)}>React Window</button>
      <button onClick={() => setVersion(2)}>React Native</button>
      <Container version={version} />
    </div>
  );
}

export default App;
