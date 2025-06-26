'use client';

import { useState } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const dailyData = [
  { name: 'Mon', blue: 10, purple: 20 },
  { name: 'Tue', blue: 30, purple: 10 },
  { name: 'Wed', blue: 15, purple: 25 },
  { name: 'Thu', blue: 25, purple: 35 },
  { name: 'Fri', blue: 40, purple: 30 },
  { name: 'Sat', blue: 20, purple: 15 },
  { name: 'Sun', blue: 10, purple: 5 },
];

const weeklyData = [
  { name: 'Week 1', blue: 100, purple: 200 },
  { name: 'Week 2', blue: 150, purple: 250 },
  { name: 'Week 3', blue: 130, purple: 180 },
  { name: 'Week 4', blue: 170, purple: 300 },
];

const monthlyData = [
  { name: 'Jan', blue: 200, purple: 300 },
  { name: 'Feb', blue: 180, purple: 250 },
  { name: 'Mar', blue: 220, purple: 270 },
  { name: 'Apr', blue: 160, purple: 200 },
  { name: 'May', blue: 190, purple: 230 },
  { name: 'Jun', blue: 210, purple: 240 },
  { name: 'Jul', blue: 180, purple: 220 },
  { name: 'Aug', blue: 190, purple: 210 },
  { name: 'Sep', blue: 200, purple: 220 },
  { name: 'Oct', blue: 180, purple: 200 },
  { name: 'Nov', blue: 190, purple: 210 },
  { name: 'Dec', blue: 200, purple: 220 },
];

export default function TaskDoneChart() {
  const [tab, setTab] = useState('Monthly');

  const getData = () => {
    if (tab === 'Daily') return dailyData;
    if (tab === 'Weekly') return weeklyData;
    return monthlyData;
  };

  return (
    <div className="py-4 px-3 bg-white" style={{ borderRadius: '1rem', border: '1px solid #E5E7EB', color: '#4B5563', width: '100%'}}>
      {/* Header and Tabs Container */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding:'0px 2em', marginBottom:'1em'}} >
        <h5 className="text-sm font-bold t">Task Done</h5>
        <div className="flex gap-2">
          {['Daily', 'Weekly', 'Monthly'].map((label) => (
            <button
              key={label}
              onClick={() => setTab(label)}
              className={`px-3 py-1 text-sm rounded-md btn ${
                tab === label 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={300} padding={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <AreaChart data={getData()}>
          <defs>
            <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3EC2FF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#3EC2FF" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8A6CFF" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8A6CFF" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name"
            tickMargin={15}
            fontSize='0.9rem'
          />
          <YAxis 
            tickMargin={20} 
            fontSize='0.9rem'
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="blue" 
            stroke="#3EC2FF" 
            fill="url(#colorBlue)" 
            dot={{ r: 4 }} 
          />
          <Area 
            type="monotone" 
            dataKey="purple" 
            stroke="#8A6CFF" 
            fill="url(#colorPurple)" 
            dot={{ r: 4 }} 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}