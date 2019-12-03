import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const PopUp = (props) => {
    return (
        <div className={props.stylePopup}>
            <div className="block-1">
                <i className="fas fa-times" onClick={props.close}></i>
                <input type="email"
                    name="email" id="email"
                    placeholder="E-Mail Adresse"
                    className="login-input "
                    onChange={props.change}
                    value={props.email}
                    required />

                <input type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="login-input "
                    onChange={props.change}
                    value={props.password}
                    required />
            </div>

            <div className="block-2">
                <Link className="password-vergessen" to="/index">Password vergessen?</Link>
                <Link className="login-btn centering" to="/index" onClick={props.signin}>Log in</Link>
            </div>

        </div>
    );
}

export default PopUp;