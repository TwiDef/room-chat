import React from 'react';
import socket from './socket';
import reducer from './reducer';
import Form from './components/form/Form';

import './App.css';
import Chat from './components/chat/Chat';

function App() {

  const [state, dispatch] = React.useReducer(reducer, {
    joined: false,
    roomID: null,
    userName: null,
    users: [],
    messages: []
  })

  const onLogin = (obj) => {
    dispatch({
      type: 'JOINED',
      payload: obj
    })
    socket.emit('ROOM:JOIN', obj)
  }

  React.useEffect(() => {
    socket.on('ROOM:JOINED', (users) => {
      dispatch({
        type: 'SET_USERS',
        payload: users
      })
    })
  }, [])


  return (
    <main className="container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <div className="wrapper">
        {
          !state.joined ?
            <Form onLogin={onLogin} /> :
            <Chat {...state} />
        }
      </div>
    </main>
  );
}

export default App;
