// components/TaskDoneChart.js
'use client'; 

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area,
} from 'recharts';

const data = [
  { name: 'May', blue: 20, purple: 30 },
  { name: 'Jun', blue: 80, purple: 100 },
  { name: 'Jul', blue: 200, purple: 150 },
  { name: 'Aug', blue: 300, purple: 400 },
  { name: 'Sep', blue: 180, purple: 260 },
  { name: 'Oct', blue: 210, purple: 200 },
  { name: 'Nov', blue: 0, purple: 190 },
  { name: 'Dec', blue: 30, purple: 200 },
  { name: 'Jan', blue: 50, purple: 330 },
  { name: 'Feb', blue: 100, purple: 350 },
  { name: 'Mar', blue: 150, purple: 270 },
  { name: 'Apr', blue: 60, purple: 100 },
];

export default function TaskDoneChart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3EC2FF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3EC2FF" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8A6CFF" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8A6CFF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="blue"
            stroke="#3EC2FF"
            fillOpacity={1}
            fill="url(#colorBlue)"
            dot={{ r: 5 }}
          />
          <Area
            type="monotone"
            dataKey="purple"
            stroke="#8A6CFF"
            fillOpacity={1}
            fill="url(#colorPurple)"
            dot={{ r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
