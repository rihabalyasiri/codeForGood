import React from 'react';
import Kategorie from '../../components/Kategorie/Kategorie';
import UserHeader from '../../components/userHeader/UserHeader';
import Sonstiges from '../../components/Sonstiges/Sonstiges';
import './formular.css';
import ProjektData from '../../data/ProjektData'

class Formular6 extends React.Component {
    constructor(props) {
        super(props)
    }

    auftragHandler = () => {
        let DataFromUser =JSON.parse(localStorage.getItem('dataFromUser'));
        DataFromUser.unshift(ProjektData);
        localStorage.setItem('dataFromUser',JSON.stringify(DataFromUser));

    }

    budgetHandler =(e)=> {
        let { value } = e.target;
        ProjektData.budget = value;
    }

    deadLineHandler =(e)=> {
        let { value } = e.target;
        ProjektData.deadLine = value;
    }



    render() {
        return (
            <div className="formular-bg">
                <UserHeader />
                <div className="formular2">
                    <Kategorie fifthActive=" active" />
                    <Sonstiges 
                    auftragHandler={this.auftragHandler}
                    budget={this.budgetHandler} 
                    deadLine={this.deadLineHandler}/>
                </div>
            </div>
        );
    }

}

export default Formular6;