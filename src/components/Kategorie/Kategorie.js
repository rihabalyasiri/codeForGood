import React from 'react';
import './kategorie.css';
import { NavLink } from 'react-router-dom'


const Kategorie = (props) => {
    const kategorieStyle = {
        paddingTop: '2em',
        color: ' #042956',
        border: '.5px solid #00DEAC'
    }
    return (
        <aside className='asideKategorie'>
            <section>
                <div style={kategorieStyle} className={props.firstActive}><p>Kontaktdaten</p></div>
                <div style={kategorieStyle} className={props.secondActive}><p>Generelle Infos</p></div>
                <div style={kategorieStyle} className={props.thirdActive}>Struktur/ Inhalt</div>
                <div style={kategorieStyle} className={props.fourthActive}>Vorgaben/ Bedingungen</div>
                <div style={kategorieStyle} className={props.fifthActive}>Sonstiges</div>
            </section>
        </aside>
    );
}

export default Kategorie;