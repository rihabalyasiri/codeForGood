import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import ProjektData from '../../data/ProjektData';

const Thanks = () => {
    return (
        <section className="thanks-block centering">
            <article className="thanks-article">
                <h1 className="thanks-heading">{(ProjektData.gender === "Divers") ? '' : ProjektData.gender} {ProjektData.name},</h1>
                <p>Sie haben alle nötigen Fragen<br />
                    beantwortet die wir brauchen.</p><br />
                <p>Vielen Dank für ihre Anfrage<br />
                    Wir werden ihre Angaben prüen.</p>

                <p style={{ marginBottom: '20px' }}>Wenn Sie ihr Formular ansehen oder bearbeiten wollen<br />
                    Fordern Sie hier einen <Link >Magic Link</Link> an.</p>
                <Link to="/userplatform" className='SonstigesInfo'>Ok</Link>
            </article>
        </section>
    );
}

export default Thanks;