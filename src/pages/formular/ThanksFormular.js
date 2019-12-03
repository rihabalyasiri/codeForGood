import React from 'react';
import Thanks from '../../components/thanks/Thanks'
import UserHeader from '../../components/userHeader/UserHeader'

const ThanksFormular = () => {
    return (
        <div className="formular-bg">
            <UserHeader />
            <div >
                <Thanks/>
            </div>
        </div>
    );
}

export default ThanksFormular;