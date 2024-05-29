import React from 'react';
import socket from './socket';
import reducer from './reducer';
import Form from './components/form/Form';

import './App.css';

function App() {

  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomID: null,
    userName: null
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    })
    socket.emit('ROOM:JOIN', obj)
  }

  console.log(state)

  return (
    <main className="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="wrapper">
        {!state.joined && <Form onLogin={onLogin} />}
      </div>
    </main>
  );
}

export default App;
