import React from 'react';
import './vorgaben.css'
import { Link } from 'react-router-dom';

const Vorgaben = (props) => {
    return (
        <section className='VorgabenSection'>
            <h2>Ihre Must Have</h2>
            <form className='VorgabenSectionForm' action="">
                <p>Was sind Ihre Ideen für das Projekt?</p>
                <input className='mustHave formular-input' type="text"
                    placeholder='Farben, Logos, ...?' size='50' onChange={props.ideen} />
                <p>Oder habt Ihr sogar ein Mock up?</p>
                <input type="file" enctype="multipart/form-data" onChange={props.mockup} />
                <p>Was ist ein Must have auf Ihrer Seite?</p>
                <input className='mustHave ' type="text"
                    placeholder='Farben, Logos, ...?' size='50'
                    onChange={props.mustHave} /> <br />
                <p>Gibt es noch bestimmte Technologien die zum entstehen <br />
                    der Seite verwendet werden müssen?
                </p>
                <div className="programming-btns">
                    <input className="active" type="button" value="HTML/CSS" />
                    <input type="button" value="Javascript" />
                    <input type="button" value="React" />
                    <input type="button" value="Php" />
                    <input type="button" value="Node.js" />
                    <input type="button" value="Vue.js" />
                </div>

                <input className='mustHave formular-input' type="text" placeholder='Andere Sprachen' size='50' /> <br />
                <br />
                <Link to="/userplatform" className="formular-btn">Abbrechen</Link>
                <Link to="/formular6" className='formular-btn' >Weiter</Link>
            </form>
        </section>
    );
}

export default Vorgaben;
