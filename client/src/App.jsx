import React from 'react';
import socket from './socket';
import Form from './components/form/Form';

import './App.css';

function App() {

  const onConnect = () => {
  }

  return (
    <main className="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="wrapper">
        <Form />
      </div>
    </main>
  );
}

export default App;
