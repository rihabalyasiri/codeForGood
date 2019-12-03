import React from 'react';
import Kategorie from '../../components/Kategorie/Kategorie';
import UserHeader from '../../components/userHeader/UserHeader';
import Vorgaben from '../../components/Vorgaben/Vorgaben';
import ProjektData from '../../data/ProjektData'
import './formular.css';

class Formular5 extends React.Component {
    constructor(props) {
        super(props)
    }

    ideenHandler = (e) => {
        let { value } = e.target;
        ProjektData.projektIdeen = value;
    }
    mockupHandler =(e) => {
        let { value } = e.target;
        ProjektData.mockup = value;
    }

    mustHaveHandler =(e)=> {
        let { value } = e.target;
        ProjektData.mustHave = value;
    }

    render() {
        return (
            <div className="formular-bg">
                <UserHeader />
                <div className="formular2">
                    <Kategorie fifthActive=" active" />
                    <Vorgaben
                        ideen={this.ideenHandler} 
                        mockup={this.mockupHandler}
                        mustHave ={this.mustHaveHandler}/>
                </div>
            </div>
        );
    }

}

export default Formular5;