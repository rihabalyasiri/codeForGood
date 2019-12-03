import React from 'react';
import './inhalt.css'
import { Link } from 'react-router-dom'


const Inhalt = (props) => {
    return (
        <article className='Inhalt'>
            <section className='InhaltSection'>
                <h2>Noch einige Fragen zum Inhalt</h2>
                <form className='InhaltForm' action="#">
                    <p>Können Sie uns eine grobe Inhaltsstruktur vorgeben?</p>
                    <textarea className="formular-input" rows="4" size='50' cols="50"
                        name="comment" form="usrform" placeholder='z.B Impressum, Kontakt, ...?'
                        onChange={props.inhaltStruktur} />
                    <p>Soll es bestimmte Inhalte geben?</p>
                    <input className="formular-input" type="file" enctype="multipart/form-data"
                        onChange={props.inhalte}
                    /> <br /> <br />
                    <textarea className="formular-input" rows="2" size='50' cols="50" name="comment"
                        form="usrform" placeholder='z.B Bilder, Slider, GoogleMap ...?'
                        onChange={props.sonstigeInhalte} />
                    {/* <p>Wie sieht es da mit Ihrer Socialmedia verbindung aus?</p>
                    <input type="button"/><i className="socialIcon fab fa-twitter-square"></i>
                    <button><i className="socialIcon fab fa-pinterest-square"></i></button>
                    <button><i className="socialIcon fab fa-facebook-square"></i></button>
                    <button><i className="socialIcon fab fa-instagram"></i></button> */}
                    <p>Wollen sie auch andere Sprachen haben?</p>
                    <input className="inhalt-input formular-input" type='text' size='50' 
                    placeholder='z.B EN, FR, TU ...?'
                    onChange={props.sprachen} /> <br />
                    <p>Projekt Name:</p>
                    <input className="inhalt-input formular-input" type='text' placeholder='projekt name' onChange={props.projektname} /> <br />
                    <Link to="/formular5" className='formular-btn'>Weiter</Link>
                </form>

            </section>
        </article>
    );
}

export default Inhalt;