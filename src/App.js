import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLandingPage from './pages/landingPage/AdminLandingPage';
import AdminPlatform from './pages/adminPage/AdminPlatform';
import UserPlatform from './pages/userPlatform/UserPlatform';
import Formular from './pages/formular/Formular';
import UnternehmenInfo from './components/unternehmenInfo/UnternehmenInfo';
import Gewerbe from './components/GewerbeInfos/GewerbeInfos'
import NeuBriefing from './components/NeuBriefing/Antrag'
import Formular2 from './pages/formular/Formular2';
import Formular3 from './pages/formular/Formular3';
import Formular4 from './pages/formular/Formular4';
import Formular5 from './pages/formular/Formular5';
import Formular6 from './pages/formular/Formular6';
import ThanksFormular from './pages/formular/ThanksFormular';
import Datas from './components/admin/Data'





class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: ''
    }
  }

  componentDidMount() {
    // localStorage.clear()
    if (localStorage.getItem('dataFromUser') === null) {
      localStorage.setItem('dataFromUser', JSON.stringify(Datas))
    }

  }

  render() {

    return (


      <div className="site">
        < Router>
          <Switch>
            <Route path="/" exact component={AdminLandingPage} />
            <Route path="/userplatform" exact component={UserPlatform} />
            <Route path="/adminplatform" exact component={AdminPlatform} />
            <Route path="/" exact component={UserPlatform} />
            <Route path="/unternehmeninfo" exact component={UnternehmenInfo} />
            {this.state.route}
          </Switch>
          <Route path="/unternehmeninfo" exact component={UnternehmenInfo} />
          <Route path="/gewerbe" exact component={Gewerbe} />
          <Route path="/neubriefing" exact component={NeuBriefing} />
          <Route path="/formular" exact component={Formular} />
          <Route path="/formular2" exact component={Formular2} />
          <Route path="/formular3" exact component={Formular3} />
          <Route path="/formular4" exact component={Formular4} />
          <Route path="/formular5" exact component={Formular5} />
          <Route path="/formular6" exact component={Formular6} />
          <Route path="/thanks" exact component={ThanksFormular} />
        </Router>

      </div>
    );
  }

}

export default App;
