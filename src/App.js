import React from 'react';
import './index.css';
import Layout from './Component/Layout';
import Main from './Component/Main';
function App() {
  return (
    <div className="App">
      <Layout children={<Main />} />
    </div>
  );
}

export default App;

