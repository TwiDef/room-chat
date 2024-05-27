import React from 'react';
import socket from '../../socket';

import './Form.css';

const Form = () => {
    return (
        <form className="form">
            <div className="title">Welcome</div>
            <div className="input-container ic1">
                <input
                    id="RoomID"
                    className="input"
                    type="text"
                    placeholder=" " />
                <div className="cut-1"></div>
                <label htmlFor="firstname" className="placeholder">Room ID</label>
            </div>
            <div className="input-container ic2">
                <input
                    id="lastname"
                    className="input"
                    type="text"
                    placeholder=" " />
                <div className="cut-2"></div>
                <label htmlFor="name" className="placeholder">Ваше имя</label>
            </div>
            <button type="text" className="submit">Войти</button>
        </form>
    );
};

export default Form;