import React from 'react';
import Anrede from '../../components/Anrede/Anrede';
import Kategorie from '../../components/Kategorie/Kategorie';
import UserHeader from '../../components/userHeader/UserHeader';
import './formular.css';
import ProjektData from '../../data/ProjektData';
import Datas from '../../components/admin/Data';


class Formular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anredeStyle: 'anrede-input',
            activeStyle: {
                background: '#3A3D55',
                color: '#fff'
            },
            isAnredeClicked: true
        }
    }

    anredeHandler = (e) => {
        let { value } = e.target;
        ProjektData.gender = value;
        this.setState({ anredeStyle: 'anrede-input' })
        this.setState({ isAnredeClicked: !this.state.isAnredeClicked })
    }

    nameHandler = (e) => {
        let { value } = e.target;
        ProjektData.name = value;
    }





    render() {
        return (
            <div className="formular-bg">
                <UserHeader />
                <div className="formular-block">
                    <Kategorie firstActive=" active" />
                    <Anrede click={this.anredeHandler}
                        change={this.nameHandler}
                        anredeStyle={this.state.anredeStyle}
                        isAnredeClicked={this.state.isAnredeClicked}
                        activeStyle={this.state.activeStyle} />
                </div>
            </div>

        );
    }

}

export default Formular;