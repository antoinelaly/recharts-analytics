import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './simplebarchart.css'

const data = [
  {
    name: '1',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '2',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '3',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '4',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '5',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '6',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: '7',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

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
          <XAxis dataKey="name" stroke="#9B9EAC" tickLine={false}/>
          <YAxis yAxisId="right" tickCount={3} stroke="#9B9EAC" orientation="right" tickLine={false} axisLine={false} />
          <YAxis yAxisId="right" tickCount={3} orientation="right" stroke="#9B9EAC"  tickLine={false}/>
          <Tooltip             
            labelStyle={{ display: "none" }}
            itemStyle={{ color: "#fff" }}
            itemFormatter={function(value) {
              return `${value}label`;
            }}
            labelFormatter={function(value) {
              return `${value}: label`;
            }}
          />
          <Bar yAxisId="right" dataKey="pv" fill="#282D30" barSize={10} radius={[10, 10, 0, 0]}/>
          <Bar yAxisId="right" dataKey="uv" fill="#E60000" barSize={10} radius={[10, 10, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
