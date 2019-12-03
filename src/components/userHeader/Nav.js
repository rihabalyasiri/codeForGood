import React from 'react';
import './Header.css'
import User from '../../data/User';


const Nav = () => {
    return (
        <nav style={{height:'10%'}} className="nav">
            <div className="login-btn-block centering">
                <p className=" centering">
                    {User.username}
                </p>
            </div>
            <div className="menu-block centering">
                <i className="fas fa-bars"></i>

            </div>

        </nav>
    );
}

export default Nav;