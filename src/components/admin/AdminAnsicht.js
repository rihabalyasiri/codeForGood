import React, { Component } from 'react';
import './style.css'
import Datas from './Data'
import Popup from './Popup';
import MainAdmin from './MainAdmin';



class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            className: 'popUp hidden',
            classNameDefault: 'normal',
            Datas: Datas,
            popupID: null,
        }

    }

    showPopup = (id) => {
        let delElement;
        delElement = this.state.Datas.filter((el) => {
            console.log(el.id === id)
            return el.id === id
        })
        this.setState({ popupID: id });
        this.setState({ classNameDefault: 'normal hide', className: 'popUp show' });
    }
    showHidden = () => {
        this.setState({ classNameDefault: 'normal', className: 'hidden' });
    }
    deleteAdmin = (id) => {
        let DataFromUser = JSON.parse(localStorage.getItem('dataFromUser'))
        const filtredData = DataFromUser.filter(data => {
            return data.id !== id
        })
        this.setState({ Datas: filtredData })
    }
    render() {

        let newArr = [];
        let DataFromUser = JSON.parse(localStorage.getItem('dataFromUser'))

        newArr = DataFromUser.map((el) => {
            if (el.id === this.state.popupID) {
                return <Popup popUp=
                    {this.state.className}
                    id={el.id}
                    btnHandler={this.showHidden}
                    gender={el.gender}
                    name={el.name}
                    unternehmen={el.unternehmen}
                    unternehmensArt={el.unternehmensArt}
                    verwendung={el.verwendung}
                    technologie={el.technologie}
                    budget={el.budget}
                    deadLine={el.deadLine}
                    status={el.status}
                    projektname={el.projektname}
                    projektZiel={el.projektZiel}
                    projektErwartung={el.projektErwartung}
                    inhaltStruktur={el.inhaltStruktur}
                    inhalte={el.inhalte}
                    sonstigeInhalte={el.sonstigeInhalte}
                    projektIdeen={el.projektIdeen}
                    mockup={el.mockup}
                    mustHave={el.mustHave}
                    sprachen={el.sprachen}
                />
            }

        })



        const Datas = DataFromUser.map((data, index) => <MainAdmin
            data={data}
            key={data.id}
            classNameDefault={this.state.classNameDefault}
            deleteAdmin={this.deleteAdmin}
            showPopup={() => this.showPopup(data.id)} />)

        return (
            <section className="admin-board">
                {Datas}
                {newArr}
            </section>

        );
    }
}

export default Admin;

