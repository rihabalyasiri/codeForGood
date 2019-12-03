import React from 'react';
import UserHeader from '../../components/userHeader/UserHeader';
import './userPlatform.css';
import Antrag from '../../components/NeuBriefing/Antrag';
import ReferenzPage from '../referenz/ReferenzPage';

const AdminPage = () => {
    return (
        <div className="user-platform">
            <UserHeader />
            <div className="user-page">
                <Antrag />
            </div>
            <ReferenzPage />

        </div>
    );
}

export default AdminPage;