import React from "react";
import {PieChart,Pie,Tooltip} from 'recharts'


function Chart({data}){
  return (
      <PieChart width={300} height={300} className="pie-chart">
        <Pie
          dataKey="value"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#6bbd99"
          label
        />
        <Tooltip />
      </PieChart>
  );
}

export default Chart