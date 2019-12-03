import React from 'react';
import './referenz.css';

const Referenz = (props) => {
    return (

        <div className="refernz-block">
            <div className="referenz-img-block">
                <img className="referenz-img" src={props.img} alt="image" />
            </div>
            <div className="referenz-content">
                <div className="referenz-content-padding">
                    <h3 className="referenz-title">{props.title}Music App</h3>
                    <p className="refernz-description">{props.description} I would like to.......</p>
                </div>

            </div>
        </div>

    );
}

export default Referenz;