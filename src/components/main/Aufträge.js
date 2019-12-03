import React from 'react';
import './Aufträge.css';
import {NavLink } from 'react-router-dom';
import User from '../../data/User';



const Aufträge = (props) => {
    return (

        <section className="section2" >
            <article className="heading2">
                <div className="img-block">
                </div>
                <div className="auftrag">
                    <h1 >{props.title}</h1>
                    <p className="auftrag-description">{props.description}</p>
                    {(User.username === 'sergio cardial')?<NavLink to="/adminplatform"  className="link">Erfahren Mehr</NavLink>:<NavLink to="/userplatform" className="link">Erfahren Mehr</NavLink>}
                </div>

            </article>

        </section>





    );
}

export default Aufträge;