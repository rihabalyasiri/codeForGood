import React from 'react';
import './TalentPool.css';
import {Link} from 'react-router-dom';


const TalentPool = (props) => {
    return (

        <section className="section1" >
            <article className="heading1">
                <div>
                    <img className="img1" src={props.image} alt="" />
                </div>
                <div className="block">
                    <h1 >{props.title}</h1>
                    <p >{props.description}</p>

                    <div>
                        <Link className=" link">Erfahren Mehr</Link>
                    </div>

                </div>

            </article>

        </section>





    );
}

export default TalentPool;