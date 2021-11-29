import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './simplebarchart.css'

const data = [
  {
    day: '1',
    kilogram: 80,
    calories: 240
},
{
    day: '2',
    kilogram: 80,
    calories: 220
},
{
    day: '3',
    kilogram: 81,
    calories: 280
},
{
    day: '4',
    kilogram: 81,
    calories: 290
},
{
    day: '5',
    kilogram: 80,
    calories: 160
},
{
    day: '6',
    kilogram: 78,
    calories: 162
},
{
    day: '7',
    kilogram: 76,
    calories: 390
}
];


const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].value}kg`}</p>
        <p className="label">{`${payload[1].value}Kcal`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid vertical={false} tickCount={3} />
          <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false}/>
          
          <YAxis yAxisId="right" type="number" domain={['dataMin - 20', 'dataMax + 10']} tickCount={4} stroke="#9B9EAC" orientation="right" tickLine={false} axisLine={false} />
          <YAxis yAxisId="right" type="number" domain={['dataMin - 20', 'dataMax + 10']} tickCount={3} orientation="right" stroke="#9B9EAC"  tickLine={false}/>
          <Tooltip    content={<CustomTooltip/>} itemStyle={{ color: "#fff" }}/>
          <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="right" dataKey="calories" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
