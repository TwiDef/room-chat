import React from 'react';
import socket from './socket';
import Form from './components/form/Form';

import './App.css';

function App() {

  const onConnect = () => {
  }

  return (
    <main className="wrapper">
      <div className='wrapper-form'><Form /></div>
    </main>
  );
}

export default App;
