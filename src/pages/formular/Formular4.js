import React from 'react';
import Kategorie from '../../components/Kategorie/Kategorie';
import UserHeader from '../../components/userHeader/UserHeader';
import Inhalt from '../../components/Inhalt/Inhalt';
import './formular.css';
import ProjektData from '../../data/ProjektData';

class Formular4 extends React.Component {
    constructor(props) {
        super(props)
    }

    projektnameHandler = (e) => {
        let { value } = e.target;
        ProjektData.projektname = value;
    }

    inhaltStrukturHandler = (e) => {
        let { value } = e.target;
        ProjektData.inhaltStruktur = value;
    }

    inhalteHandler = (e) => {
        let { value } = e.target;
        ProjektData.inhalte = value;
    }

    sonstigeInhalteHandler = (e) => {
        let { value } = e.target;
        ProjektData.sonstigeInhalte = value;
    }

    sprachenHandler =(e) => {
        let { value } = e.target;
        ProjektData.sprachen = value;
    }

    render() {
        return (
            <div className="formular-bg">
                <UserHeader />
                <div className="formular2">
                    <Kategorie fourthActive=" active" />
                    <Inhalt
                        projektname={this.projektnameHandler}
                        inhaltStruktur={this.inhaltStrukturHandler}
                        inhalte={this.inhalteHandler}
                        sonstigeInhalte={this.sonstigeInhalteHandler}
                        sprachen ={this.sprachenHandler}
                    />
                </div>
            </div>
        );
    }

}

export default Formular4;