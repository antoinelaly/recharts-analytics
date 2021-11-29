import React, { PureComponent } from 'react';
import renderPolarAngleAxis from '../renderPolarAngleAxis';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, 
} from 'recharts';

const data = [
  { subject: 'Intensité', A: 90, fullMark: 250, },
  { subject: 'Vitesse', A: 220, fullMark: 250,},
  { subject: 'Force', A: 80, fullMark: 250,},
  { subject: 'Endurance', A: 80, fullMark: 250, class:'endu'},
  { subject: 'Energie', A: 240, fullMark: 250, },
  { subject: 'Cardio', A: 200, fullMark: 250,},
];

export default class RadarChartRecharts extends PureComponent {
  //static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';
//<PolarAngleAxis tick={props => renderPolarAngleAxis(props)} />
  render() {
    return (
      <RadarChart cx={130} cy={130} outerRadius={70} width={258} height={263} data={data} >
        <PolarGrid gridType='' stroke="#fff" />
        <angleAxis stroke="#000" />
        <PolarAngleAxis dataKey="subject" tick={props => renderPolarAngleAxis(props)}/>
        <recharts-polar-grid-angle fill="#FF0101" stroke="#000" />
        <PolarAngleAxis dataKey="subject" stroke="#fff" verticalAnchor="middle" />
        <Radar dataKey="A" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}