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
            anredeStyle:'anrede-input'
        }
    }

    anredeHandler = (e) => {
        let { value } = e.target;
        ProjektData.gender = value;
        this.setState({anredeStyle:'anrede-input'}) 
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
                        anredeStyle={this.state.anredeStyle} />
                </div>
            </div>

        );
    }

}

export default Formular;