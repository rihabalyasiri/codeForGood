import React from 'react';
import './anrede.css'
import {Link} from 'react-router-dom'
const Anrede = (props) => {
    return ( 
        <article className='anrede'>
            <section>
                <h2>Wie sollen Wir dich ansprechen?</h2>
                <input className={props.anredeStyle} name="anrede" type="submit" value="Frau" onClick={props.click}/>
                <input className={props.anredeStyle} name="anrede" type="submit" value="Divers" onClick={props.click} />
                <input className={props.anredeStyle} name="anrede" type="submit" value="Herr" onClick={props.click}/>
            </section>
            <section className="anrede-section2"> 
                <h2>Bitte gib uns, hier deinen Namen </h2>
                <form action="">
                    <input name="userName" className="formular-input" 
                    type="text" placeholder='Max Mustermann' size='60'
                    onChange={props.change}
                    />
                </form>
                <Link to="/userplatform" className="formular-btn">Abbrechen</Link>
                <Link to="/formular2" className="formular-btn">Weiter</Link>
            </section>
        </article>
     );
}
 
export default Anrede;