import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { id: "1", name: "L1", value: 60 },
  { id: "2", name: "L2", value: 40 }
  ];

export default function App() {
  return (
  
<PieChart width={150} height={150}>
  <text
    x={80}
    y={80}
    textAnchor="middle"
    dominantBaseline="middle"
  >
    25
  </text>
  <Pie
    data={data}
    dataKey="value"
    innerRadius="80%"
    outerRadius="100%"
    fill="#FF0000"
    startAngle={90}
    endAngle={-270}
    paddingAngle={0}
    cornerRadius={5}
  >
    <Cell
      key="test"
      fill="#fff"
    />
  </Pie>
</PieChart>
  );
}
