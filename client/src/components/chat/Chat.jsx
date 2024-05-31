import React from 'react';
import './Chat.css';

const Chat = ({ users, messages }) => {
  const [message, setMessage] = React.useState('')

  return (
    <div className="row clearfix">
      <div className="card chat-app">
        <div id="plist" className="people-list">
          <div className="input-group">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fa fa-search"></i></span>
            </div>
          </div>
          <ul className="list-unstyled chat-list">
            <li className="clearfix">
              <div className="about">
                <span>Users: {users.length}</span>
                <ul className='users-list'>
                  {users.map(name => <li className='user-name'>{name}</li>)}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="chat">
          <div className="chat-header clearfix">
            <div className="chat-about">
              <h6></h6>
            </div>
          </div>
          <div className="chat-history">
            <ul>
              <li className="clearfix">
                <div className="message other-message float-right">
                  Hi Aiden, how are you? How is the project coming along?
                </div>
              </li>
              <li className="clearfix">
                <div className="message my-message">
                  Are we meeting today?
                </div>
              </li>
              <li className="clearfix">
                <div className="message my-message">
                  Project has been already finished and I have results to show you.
                </div>
              </li>
            </ul>
          </div>
          <div className="chat-message clearfix">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text"><i className="fa fa-send"></i></span>
              </div>
              <form
                onClick={(e) => e.preventDefault()}
                className='send-block'>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows={3}
                  type="text"
                  className="form-control"
                  placeholder="Enter text here..." />
                <button className='btn-send'>Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Chat;