import React from "react";
import { LineChart, Line, XAxis, CartesianGrid, YAxis, Tooltip, Legend } from "recharts";
import './thelinechart.css'

const data = [
  {
    name: "1",
    pv: 30
  },
  {
    name: "2",
    pv: 23
  },
  {
    name: "3",
    pv: 45
  },
  {
    name: "4",
    pv: 50
  },
  {
    name: "5",
    pv: 0
  },
  {
    name: "6",
    pv: 0
  },
  {
    name: "7",
    pv: 60
  }
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip-line">
        <p className="label--line">{`${payload[0].value} min`}</p>
      </div>
    );
  }

  return null;
};


export default function TheLineChart() {
  return (
    <LineChart
    width={258}
    height={120}
    data={data}
    margin={{top: 10, right: -2, left: -2, bottom: 20, }}
  >
    <Tooltip  cursor={false} labelStyle={{ display: "none" }} itemStyle={{ color: "#000" }} content={<CustomTooltip/>} 
    wrapperStyle={{zIndex: 1000}}/>
    <Line type="natural" dataKey="pv" stroke="#fff" strokeWidth={2} dot={false} zIndex={10}/>

  </LineChart>
  );
}