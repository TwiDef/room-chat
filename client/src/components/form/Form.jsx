import React from 'react';
import socket from '../../socket';
import axios from 'axios';

import './Form.css';

const Form = ({ onLogin }) => {
  const [roomID, setRoomID] = React.useState('')
  const [userName, setUserName] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(false)

  const onEnter = async (e) => {
    e.preventDefault()

    if (!roomID || !userName) {
      return alert('Заполните все поля!')
    }

    const obj = {
      roomID,
      userName
    }

    setIsLoading(true)
    await axios.post('/rooms', obj)
    onLogin(obj)
    setIsLoading(false)
  }

  return (
    <form className="form">
      <div className="title">Welcome</div>
      <div className="input-container ic1">
        <input
          value={roomID}
          onChange={(e) => setRoomID(e.target.value)}
          id="RoomID"
          className="input"
          type="text"
          placeholder=" " />
        <div className="cut-1"></div>
        <label htmlFor="firstname" className="placeholder">Room ID</label>
      </div>
      <div className="input-container ic2">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="lastname"
          className="input"
          type="text"
          placeholder=" " />
        <div className="cut-2"></div>
        <label htmlFor="name" className="placeholder">Ваше имя</label>
      </div>
      <button
        disabled={isLoading}
        onClick={(e) => onEnter(e)}
        type="text"
        className="submit">{isLoading ? 'Входим...' : 'Войти'}</button>
    </form>
  );
};

export default Form;