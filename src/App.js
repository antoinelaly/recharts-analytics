import React from 'react';
import RadarChart from './components/RadarChart';
import TheLineChart from './components/TheLineChart';
import TheLineChart1 from './components/TheLineChart1';
import SimpleBarChart from './components/SimpleBarChart';
import RadialBarChart from './components/RadialBarChart';
import Hearder from './components/Hearder';
import Leftbar from './components/Leftbar';
import Rightbar from './components/Rightbar';
import './App.css'

function App() {
  return (
    <div>
      <div className=""><Hearder/></div>
      <div className="leftbar"><Leftbar/>
        <div className="main">

          <div className="letitre"><h1>Bonjour Thomas</h1>
            <h6>Félicitation ! Vous avez explosé vos objectifs hier </h6>
          </div>

        <div className="legraf">

          <div className="recharts">
            <div className="labarre"><h5>Activité quotidienne</h5>
              <SimpleBarChart/></div>
            <div className="theprofile fontSize">
              <div className="laline">
                <div className="letitre"><h3>Durée moyenne des sessions</h3></div>
                <div  className="lacourbe"><TheLineChart /></div>
                <div className="lasemaine"><h3>L M M J V S D</h3></div>
              </div>
              <div className="leradar"><RadarChart /></div>
              <div className="leradial"><RadialBarChart /></div>
            </div>
            <div className="lelayer">
              <div className="colonnea"></div>
              <div className="colonneb"></div>
            </div>
          </div>
                  <div className="rightbar"><Rightbar/></div>
        </div>

        </div>
      </div>

    </div>
  );
}

export default App;