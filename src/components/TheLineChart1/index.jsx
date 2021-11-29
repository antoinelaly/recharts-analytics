import React from "react";
import { LineChart, Line, XAxis, ReferenceArea } from "recharts";
import './thelinechart1.css'

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

const CustomLabel = (props) => {
  //console.log(props);
  return (
    <g>
      <rect
        x={props.viewBox.x}
        y={props.viewBox.y}
        fill="#fff"
        width={60}
        height={30}
      />
      <text x={props.viewBox.x} y={props.viewBox.y} fill="#111" dy={20} dx={10}>
        68 min
      </text>
    </g>
  );
};

export default function TheLineChart1() {
  return (
    <LineChart width={258} height={258} data={data} margin={{ top: 0, right: -2, left: -2, bottom: 0, }}>
      <Line type="monotone" dataKey="pv" stroke="#fff" strokeWidth={4} dot={false}/>
      <XAxis dataKey="name" type="category" />
      <ReferenceArea className="theline" x1={4} x2={7} label={CustomLabel} />
    </LineChart>
  );
}