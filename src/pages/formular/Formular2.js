import React from 'react';
import Kategorie from '../../components/Kategorie/Kategorie';
import Unternehmen from '../../components/unternehmenInfo/UnternehmenInfo';
import UserHeader from '../../components/userHeader/UserHeader'
import './formular.css';
import ProjektData from '../../data/ProjektData';

class Formular2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    unternehmenNameHandler = (e) => {
        let { value } = e.target;
        ProjektData.unternehmen = value;
    }

    unternehmenArtHandler = (e) => {
        let { value } = e.target;
        ProjektData.unternehmensArt = value;
    }


    render() {
        return (
            <div className="formular-bg">
                <UserHeader />
                <div className="formular2">
                    <Kategorie secondActive=" active" />
                    <Unternehmen
                        unternehmenName={this.unternehmenNameHandler}
                        unternehmenArt={this.unternehmenArtHandler}
                    />
                </div>
            </div >
        );
    }

}

export default Formular2;