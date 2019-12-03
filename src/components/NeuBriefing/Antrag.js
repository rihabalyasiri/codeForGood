import React from 'react';
import './antrag.css'
import { Link } from 'react-router-dom';

const Antrag = () => {
    return (
        <section className='newBriefing'>
            <h2 className="newBrief-title">Erstelle jetzt ein Briefing für deinen Auftrag</h2>
            <p>Du kannst hier in einigen schritten ganz einfach dein eigenes Projekt
                    briefen. <br />
                Dazu brauchen wir einige angaben von dir,
                im Optimal fall hast du auch schon ein
                Mock up für uns.
                    <br /> <br />
                Viel spaß beim Briefing!
                </p>
            <Link to="/formular" className="formular-btn briefing-btn"><i class="fas fa-plus"></i>Neues Briefing</Link>

        </section>
    );
}

export default Antrag;
