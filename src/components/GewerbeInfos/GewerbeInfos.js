import React from 'react';
import './gewerbe.css'
import { Link } from 'react-router-dom';
import { tsPropertySignature } from '@babel/types';


const Gewerbe = (props) => {
    return (
        <article className='gewerbe'>
            <section className='gewerbeSection'>
                <h2>Bitte schreiben sie in kurzen Sätzen</h2>
                <form className='gewerbeForm' action="#">
                    <p>Worum handelt es sich bei Ihrem neuen Projekt?</p>
                    <textarea className="formular-input" rows="4" size='50'
                        cols="50" name="comment" form="usrform"
                        placeholder='z.B Neuentwicklung, Überarbeitung?' onChange={props.projektBeschreibung} />
                    <p>Wenn sie erlauben, welches Ziel steuert Ihr neues Projekt an?</p>
                    <textarea className="formular-input" rows="4" size='50'
                        cols="50" name="comment" form="usrform"
                        placeholder='z.B Informieren, Verkaufen, Kundengewinnung ...?' onChange={props.projektZiel} />
                    <p>Welche erwartung haben Ihre Kunden an Ihr Projekt?</p>
                    <textarea className="formular-input" style={{ marginBottom: '30px' }}
                        rows="4" size='50' cols="50" name="comment"
                        form="usrform" placeholder='z.B Verbesserung der UX und UI' onChange={props.projektErwartung} /> <br />
                    <Link to="/userplatform" className="formular-btn">Abbrechen</Link>
                    <Link to="/formular4" className='formular-btn' >Weiter</Link>
                </form>

            </section>
        </article>
    );
}

export default Gewerbe;