import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    
  } from "recharts";
const QuizMarks = () => {
    const data = [
        {
          name: "React",
          marks: 4000,
          quiz: 2400,
          amt: 2400
        },
        {
          name: "JavaScript",
          marks: 3000,
          quiz: 1398,
          amt: 2210
        },
        {
          name: "Css",
          marks: 2000,
          quiz: 9800,
          amt: 2290
        },
        {
          name: "Git",
          marks: 2780,
          quiz: 3908,
          amt: 2000
        },
        
      ];
    return (
        <div className=''>
            <LineChart width={500} height={400} data={data}>
            <Line type="monotone" dataKey="marks" stroke="#EAB308" />
            <XAxis dataKey="name"stroke="#EAB308"  />
            <YAxis stroke="#EAB308" />
            <Tooltip stroke="#EAB308" ></Tooltip>
            </LineChart>
        </div>
    );
};

export default  QuizMarks;
;