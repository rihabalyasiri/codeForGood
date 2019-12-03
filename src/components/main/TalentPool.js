import React from 'react';
import './TalentPool.css';
import { Link } from 'react-router-dom';


const TalentPool = (props) => {
    return (

        <section className="section1" >
            <article className="heading1">
                <div className="talentpool-img">

                </div>
                <div className="block">
                    <h1 >{props.title}</h1>
                    <p className="auftrag-description">{props.description}</p>

                    <div>
                        <a href='https://gfstee.github.io/Supercode-Alumni/build/' className=" link">Erfahren Mehr</a>
                    </div>

                </div>

            </article>

        </section>





    );
}

export default TalentPool;