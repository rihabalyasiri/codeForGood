import React from 'react';
import './unternehmen.css'
import { Link } from 'react-router-dom';
import ProjektData from '../../data/ProjektData';



const Unternehmen = (props) => {
    return (
        <article className='unternehmen'>
            <section className='unternehmenSection'>
                <h2>Hallo {(ProjektData.gender === "Divers") ? '' : ProjektData.gender} {ProjektData.name}</h2>
                <p>Bitte nennen Sie uns den Namen Ihres Unternehmens <br />
                    oder für dass sie Arbeiten.
                </p>
                <form action="">
                    <input className="formular-input"  type="text" placeholder='Mustermann Firma' size='60' onChange={props.unternehmenName} />
                    <br />
                    <label className='uLable formular-input'>Um welche Art eines Unternehmens handelt es sich dabei?</label>
                    <br />
                    <input className="info-input formular-input" type="text" placeholder='Verein , Gemeinützige Gemeinschaft ... ' size='60' onChange={props.unternehmenArt}/>
                    <br />
                    <Link to="/userplatform" className="formular-btn">Abbrechen</Link>
                    <Link to="/formular3" className=' formular-btn'  >weiter</Link>
                </form>
            </section>
        </article>
    );
}

export default Unternehmen;