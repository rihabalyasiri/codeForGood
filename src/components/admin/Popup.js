import React from 'react';
import './style.css';
import { Table } from 'react-bootstrap'

const Popup = (props) => {

    return (

        // <article className={props.popUp}>
        //     <div className="popup-container">
        //         <div className='pointContainer'>
        //             <div className='pointContainer2'>
        //                 <div style={(props.status === 'Done') ? greenPoint : redPoint}></div>
        //                 <p className='status-popup'>{props.status}</p>
        //             </div>
        //             <p>{new Date().getVarDate}</p>
        //         </div>
        //         {/* Moch Up img faken / einfach ein img mit in  Components packen */}
        //         <h2>{props.projektname}</h2>
        //         <p><b>Name des/der Antragstellers/ rin: </b>{(props.gender === "Divers") ? '' : props.gender} {props.name}</p>
        //         <p><b>Name des Unternehmens: </b>{props.unternehmen}</p>
        //         <p><b>Art des Unternehmens: </b> {props.unternehmensArt}</p>
        //         <p ><b>Der Verwendungszewck der Seite: </b> {props.verwendung}</p>
        //         <p><b>Technologie: </b>{props.technologie}</p>
        //         <p><b>Projekt Ziel: </b>{props.projektZiel}</p>
        //         <p><b>Projekt Erwartungen: </b>{props.projektErwartung}</p>
        //         <p><b>Inhalt Struktur: </b>{props.inhaltStruktur}</p>
        //         <p><b>Inhalte: </b>{props.inhalte}</p>
        //         <p><b>Sonstige Inhalte: </b>{props.sonstigeInhalte}</p>
        //         <p><b>Projekt Ideen: </b>{props.projektIdeen}</p>
        //         <p><b>Mockup: </b>{props.mockup}</p>
        //         <p><b>Must Have: </b>{props.mustHave}</p>
        //         <p><b>Sprachen:</b>{props.sprachen}</p>
        //         <p><b>Budget:</b> {props.budget} €</p>
        //         <p> <b>Zum: </b>{props.deadLine}</p>
        //         <p><b>Projekt ID: </b>#{props.id}</p>
        //         <div className='btn'>
        //             <button onClick={props.btnHandler}>Zeige weniger</button>
        //         </div>
        //     </div>

        // </article>

        <article className={props.popUp}>
            <div className="popup-container">
                <div className='pointContainer'>
                    <div className='pointContainer2'>
                        <div style={(props.status === 'Done') ? greenPoint : redPoint}></div>
                        <p className='status-popup'>{props.status}</p>
                    </div>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>

            <Table striped bordered hover variant="#fff">
                <thead>
                    <tr>
                        <th>Projekt ID</th>
                        <th>#{props.id}</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Projekt Name</td>
                        <td>{props.projektname}</td>

                    </tr>
                    <tr>
                        <td>Name des/der Antragstellers/rin</td>
                        <td>{(props.gender === "Divers") ? '' : props.gender} {props.name}</td>

                    </tr>
                    <tr>
                        <td>Name des Unternehmens</td>
                        <td colSpan="2">{props.unternehmen}</td>
                    </tr>
                    <tr>
                        <td>Art des Unternehmens</td>
                        <td colSpan="2">{props.unternehmensArt}</td>
                    </tr>
                    <tr>
                        <td>Der Verwendungszewck der Seite</td>
                        <td colSpan="2">{props.verwendung}</td>
                    </tr>
                    <tr>
                        <td>Technologie</td>
                        <td colSpan="2">{props.technologie}</td>
                    </tr>
                    <tr>
                        <td>Projekt Ziel</td>
                        <td colSpan="2">{props.projektZiel}</td>
                    </tr>
                    <tr>
                        <td>Projekt Erwartungen</td>
                        <td colSpan="2">{props.projektErwartung}</td>
                    </tr>
                    <tr>
                        <td>Inhalt Struktur</td>
                        <td colSpan="2">{props.inhaltStruktur}</td>
                    </tr>
                    <tr>
                        <td>Inhalte</td>
                        <td colSpan="2">{props.inhalte}</td>
                    </tr>
                    <tr>
                        <td>Sonstige Inhalte</td>
                        <td colSpan="2">{props.sonstigeInhalte}</td>
                    </tr>
                    <tr>
                        <td>Projekt Ideen</td>
                        <td colSpan="2">{props.projektIdeen}</td>
                    </tr>
                    <tr>
                        <td>Mockup</td>
                        <td colSpan="2">{props.mockup}</td>
                    </tr>
                    <tr>
                        <td>Must Have</td>
                        <td colSpan="2">{props.mustHave}</td>
                    </tr>
                    <tr>
                        <td>Sprachen</td>
                        <td colSpan="2">{props.sprachen}</td>
                    </tr>
                    <tr>
                        <td>Budget</td>
                        <td colSpan="2">{props.budget} €</td>
                    </tr>
                    <tr>
                        <td>Zum</td>
                        <td colSpan="2">{props.deadLine}</td>
                    </tr>
                </tbody>
            </Table>

            <div className='btn'>
                <button onClick={props.btnHandler}>Zeige weniger</button>
            </div>
             </div>

         </article >
    );
}

export default Popup;
const redPoint = {
    height: '20px',
    width: '20px',
    background: 'red',
    borderRadius: '90%'
}

const greenPoint = {
    height: '20px',
    width: '20px',
    background: 'green',
    borderRadius: '90%'
}

