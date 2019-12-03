import React from 'react';
import './Aufträge.css';
import {NavLink } from 'react-router-dom';



const Aufträge = (props) => {
    return (

        <section className="section2" >
            <article className="heading2">
                <div className="img-block">
                    <img className="img2" src={props.image} alt="" />
                </div>
                <div className="auftrag">
                    <h1 >{props.title}</h1>
                    <p>{props.description}</p>
                    <NavLink to="/userplatform" className="link">Erfahren Mehr</NavLink>

                </div>

            </article>

        </section>





    );
}

export default Aufträge;