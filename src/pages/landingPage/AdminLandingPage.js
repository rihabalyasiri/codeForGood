import React from 'react';
import Header from '../../components/header/Header';
import Aufträge from '../../components/main/Aufträge';
import TalentPool from '../../components/main/TalentPool';
import AuftraegeData from '../../data/AuftraegeData';
import TalentPoolData from '../../data/TalentPoolData';
import './landingPage.css'



const LandingPage = () => {

    let AuftraegeArray = AuftraegeData.map((el) => {
        return <Aufträge title={el.title} description={el.description} image={el.image} />
    })

    let TalentPoolArray = TalentPoolData.map((el) => {
        return <TalentPool title={el.title} description={el.description} image={el.image} />
    })

    return (
        <div >
            <Header />
            <div className="landing-page-block">
            {AuftraegeArray}
            {TalentPoolArray}
            </div>
           

        </div>
    );
}

export default LandingPage;