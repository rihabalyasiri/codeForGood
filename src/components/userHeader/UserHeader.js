import React, { Component } from 'react';
import './Header.css';
import logo from "../../img/supercode_logo.png"
import PopUp from './PopUp';
import Nav from './Nav';
import User from '../../data/User';





class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stylePopup: 'login-popup hidden',
            styleLoginbtn: 'login-btn centering',
            username: '',
            test: ''
        }
    }

    loginPopupHandler = () => {
        this.setState({ stylePopup: 'login-popup show' })
    }

    closeLoginPopupHandler = () => {
        this.setState({ stylePopup: 'login-popup hidden' })
    }

    signinHandler = () => {
        this.setState({ stylePopup: 'login-popup hidden' })
        this.setState({ styleLoginbtn: 'login-btn centering hidden' })



    }

    loginChangeHandler = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }



    render() {
        return (
            <header >
                <div className="logo-block">
                    <img src={logo} alt="" className="logo" />
                </div>

                <Nav showPopup={this.loginPopupHandler}
                    styleLoginbtn={this.state.styleLoginbtn}
                    username={this.state.username} />

                <PopUp stylePopup={this.state.stylePopup}
                    close={this.closeLoginPopupHandler}
                    signin={this.signinHandler}
                    change={this.loginChangeHandler}
                    email={this.state.email}
                    password={this.state.password} />

            </header>
        );
    }
}

export default Header;