import React from 'react';


const MainAdmin = (props) => {

    return (
        <article className={props.classNameDefault}>
            <div className="auftrag-container">
                <div className='pointContainer'>
                    <div className='pointContainer2'>
                        <div style={(props.data.status === 'Done') ? greenPoint : redPoint}></div>
                        <p className='status'>{props.data.status}</p>
                    </div>
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
                <h2 className="heading">{props.data.projektname}</h2>
                <p className='discription'>{props.data.verwendung}</p>
                <div className='icon-block'>
                    <button className='zeigen-btn' onClick={() => props.showPopup(props.data.id)}>Erfahre mehr</button>
                    <i onClick={() => props.deleteAdmin(props.data.id)} className="fas fa-trash-alt del-icon"></i>
                </div>
            </div>


        </article>
    );
}

const greenPoint = {
    height: '20px',
    width: '20px',
    background: 'green',
    borderRadius: '90%'
}

const redPoint = {
    height: '20px',
    width: '20px',
    background: 'red',
    borderRadius: '90%'
}

const yellowPoint = {
    height: '20px',
    width: '20px',
    background: 'yellow',
    borderRadius: '90%'
}
export default MainAdmin;