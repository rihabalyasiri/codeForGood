import React from 'react';
import './sonstiges.css'
import {Link} from 'react-router-dom';

const Sonstiges = (props) => {
    return (
        <article className='Sonstiges'>
            <section className='SonstigesSection'>
                <h2>Fast geschafft!</h2>
                <p>Auch wir können diese Frage nicht verhindern, welches Budget habt ihr?</p>
                <form action="">
                    <input type="number" placeholder='Betrag in Euro' size='60' onChange={props.budget} />  €
                    <br />
                    <p>Und sofern geplant, würden wir gerne ein Fertigstellungstermin wissen</p>
                    <br />
                    <input style={{marginBottom:'30px'}} type="Date"  size='60' 
                    onChange={props.deadLine}/>
                    <br />
                    <Link to="/thanks" className='formular-btn' onClick={props.auftragHandler}>Weiter</Link>
                </form>
            </section>
        </article>
    );
}

export default Sonstiges;