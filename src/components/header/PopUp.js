import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';


const PopUp = (props) => {
    return (
        <div className={props.stylePopup}>
            <div className="block-1">
                <i class="fas fa-times" onClick={props.close}></i>
                <input type="text"
                    name="username" id="username"
                    placeholder="Username"
                    className="login-input "
                    onChange={props.change}
                    value={props.email}
                    required />

                <input type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="login-input "
                    onChange={props.changePassword}
                    value={props.password}
                    required />
            </div>

            <div className="block-2">
                <Link className="password-vergessen">Password vergessen?</Link>
                <Link className="login-btn centering" onClick={props.signin}>Log in</Link>
            </div>

        </div>
    );
}

export default PopUp;