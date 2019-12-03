import React from 'react';
import Header from '../../components/header/Header';
import Aufträge from '../../components/mainUser/Aufträge';
import TalentPool from '../../components/mainUser/TalentPool';
import AuftraegeData from '../../data/AuftraegeData';
import TalentPoolData from '../../data/TalentPoolData';



const LandingPage = () => {

    let AuftraegeArray = AuftraegeData.map((el) => {
        return <Aufträge title={el.title} description={el.description} image={el.image} />
    })

    let TalentPoolArray = TalentPoolData.map((el) => {
        return <TalentPool title={el.title} description={el.description} image={el.image} />
    })

    return (
        <div>
            <Header />
            {AuftraegeArray}
            {TalentPoolArray}

        </div>
    );
}

export default LandingPage;