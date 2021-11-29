import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, Legend,
  PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  { subject: 'Intensité', A: 90, fullMark: 250, },
  { subject: 'Vitesse', A: 220, fullMark: 250,},
  { subject: 'Force', A: 80, fullMark: 250,},
  { subject: 'Endurance', A: 80, fullMark: 250,},
  { subject: 'Energie', A: 240, fullMark: 250, },
  { subject: 'Cardio', A: 200, fullMark: 250,},
];

export default class RadarChartRecharts extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/dpgb3xjq/';

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data} background>
        <PolarGrid gridType=''/>
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 150]} />
        <Radar name="Karl" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Legend />
      </RadarChart>
    );
  }
}