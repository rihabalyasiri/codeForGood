import React from 'react';
import ReferenzTop from '../../components/referenz/ReferenzTop';
import ReferenzBottom from '../../components/referenz/ReferenzBottom';
import './referenzPage.css';
import ProjektData from '../../components/admin/Data';



const ReferenzPage = () => {
    return (
        <div>
            <h1 className="referenz-heading">Referenz</h1>
            <div className="referenz-page">
                <ReferenzTop
                    img={ProjektData[0].img}
                    title={ProjektData[0].projektname}
                    description={ProjektData[0].verwendung}
                />
                <ReferenzBottom
                    img={ProjektData[1].img}
                    title={ProjektData[1].projektname}
                    description={ProjektData[1].verwendung}
                />
                <ReferenzTop
                    img={ProjektData[2].img}
                    title={ProjektData[2].projektname}
                    description={ProjektData[2].verwendung}
                />
                <ReferenzBottom
                    img={ProjektData[3].img}
                    title={ProjektData[3].projektname}
                    description={ProjektData[3].verwendung}
                />

            </div>
        </div>

    );
}

export default ReferenzPage;