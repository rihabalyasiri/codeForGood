import React from 'react';
import UserHeader from '../../components/userHeader/UserHeader'
import Kategorie from '../../components/Kategorie/Kategorie';
import Gewerbe from '../../components/GewerbeInfos/GewerbeInfos';
import './formular.css';
import ProjektData from '../../data/ProjektData';

class Formular3 extends React.Component {
    constructor(props) {
        super(props)

    }

    projektBeschreibungHandler = (e) => {
        let { value } = e.target;
        ProjektData.verwendung = value;
    }

    projektZielHandler = (e) => {
        let { value } = e.target;
        ProjektData.projektZiel = value;
    }

    projektErwartungHandler = (e) => {
        let { value } = e.target;
        ProjektData.projektErwartung = value;
    }

    render() {
        return (
            <div className="formular-bg">
                <UserHeader />
                <div className="formular2">
                    <Kategorie thirdActive=" active" />
                    <Gewerbe
                        projektBeschreibung={this.projektBeschreibungHandler}
                        projektZiel={this.projektZielHandler}
                        projektErwartung={this.projektErwartungHandler}
                    />

                </div>
            </div >
        );
    }

}

export default Formular3;