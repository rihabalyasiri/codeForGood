import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';
import User from '../../data/User';


const Nav = (props) => {
    return (
        <nav style={{height:'100%'}} className="nav">
            <div className="login-btn-block centering">
                <NavLink to="/" className="login-btn centering"
                    onClick={props.showPopup}
                    className={props.styleLoginbtn}>
                    Log in
                    </NavLink>
                <p>{User.username}</p>
            </div>
            <div className="menu-block centering">
                <i className="fas fa-bars"></i>

            </div>

        </nav>
    );
}

export default Nav;