import React from 'react';
import Filter from '../../components/filter/Filter';
import Admin from '../../components/admin/AdminAnsicht'
import './adminPage.css'
import UserHeader from '../../components/userHeader/UserHeader';

const AdminPage = () => {
    return (
        <div >
            <UserHeader />
            <div className="admin-page">
                <Filter />
                <Admin />
            </div>

        </div>
    );
}

export default AdminPage;