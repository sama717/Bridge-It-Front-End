'use client'
import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import '../../components/dashboardComponents/Graph.css'

// Cubic spline interpolation to generate smooth curves
const generateSplineData = (originalData, steps = 10) => {
  if (originalData.length < 2) return originalData;
  
  const splineData = [];
  const n = originalData.length;
  
  // Calculate cubic coefficients for each segment
  const h = [], b = [], u = [], v = [], z = [];
  
  for (let i = 0; i < n - 1; i++) {
    h[i] = 1; // Equal spacing since we're using categorical x-axis
    b[i] = (originalData[i+1].value - originalData[i].value) / h[i];
  }
  
  u[1] = 2 * (h[0] + h[1]);
  v[1] = 6 * (b[1] - b[0]);
  
  for (let i = 2; i < n - 1; i++) {
    u[i] = 2 * (h[i-1] + h[i]) - (h[i-1] * h[i-1]) / u[i-1];
    v[i] = 6 * (b[i] - b[i-1]) - (h[i-1] * v[i-1]) / u[i-1];
  }
  
  z[n-1] = 0;
  for (let i = n - 2; i > 0; i--) {
    z[i] = (v[i] - h[i] * z[i+1]) / u[i];
  }
  z[0] = 0;
  
  // Generate smooth points
  for (let i = 0; i < n - 1; i++) {
    // Add original point
    splineData.push(originalData[i]);
    
    // Add interpolated points
    for (let j = 1; j < steps; j++) {
      const t = j / steps;
      const t2 = t * t;
      const t3 = t2 * t;
      
      const c1 = originalData[i].value;
      const c2 = b[i] - h[i] * (z[i+1] + 2 * z[i]) / 6;
      const c3 = z[i] / 2;
      const c4 = (z[i+1] - z[i]) / (6 * h[i]);
      
      const interpolatedValue = c1 + c2 * t + c3 * t2 + c4 * t3;
      
      splineData.push({
        name: '',
        value: interpolatedValue
      });
    }
  }
  
  // Add last point
  splineData.push(originalData[n-1]);
  return splineData;
};

const DocsViews = () => {
  const originalData = [
    { name: '01', value: 1 },
    { name: '05', value: 10 },
    { name: '10', value: 5 },
    { name: '15', value: 25 },
    { name: '20', value: 10 },
    { name: '25', value: 15 },
    { name: '30', value: 30 }
  ];

  const splineData = generateSplineData(originalData);

  return (
    <div style={{
      backgroundColor: 'white',
      padding: '16px',
      borderRadius: '8px',
      border: '1px solid #e5e7eb',
      width: '100%',
    }}>
        <div className="graph-parent" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            marginBottom: '16px'
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
            <img 
                src="/docviews.svg" 
                alt="Docs Icon" 
                style={{ 
                width: '40px', 
                height: '40px', 
                marginRight: '1em' 
                }} 
            />
            <h3 style={{
                margin: 0, // Removed bottom margin
                fontSize: '1.1rem',
                color: '#4b5563',
                fontWeight: '500',
                lineHeight: '1' // Ensures text doesn't create extra space
            }}>
                Docs Views
            </h3>
            </div>
            <span style={{ 
            fontSize: '18px',
            fontWeight: '600',
            marginRight: '8px',
            color: 'black'
            }}>08</span>
        </div>  
      <div style={{ display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ height: '120px', flex: 1 }}>
            <div style={{ height: '120px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={splineData}
            margin={{ top: 5, right: 5, bottom: 20, left: 5 }} // Added margin for padding
          >
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
              interval={0}
              padding={{ left: 10, right: 10 }} // Add horizontal padding
              tickMargin={10} // Add vertical padding between ticks and line
            />
            <YAxis 
              hide 
              domain={[0, 'dataMax + 5']} 
              padding={{ top: 10, bottom: 10 }} // Add vertical padding
            />
            <Line 
              type="linear"
              dataKey="value"
              stroke="#3C41CA"
              strokeWidth={2}
              dot={(data) => data.name ? { 
                r: 4, 
                fill: '#3C41CA',
                stroke: '#fff',
                strokeWidth: 2
              } : undefined}
              activeDot={false}
              strokeLinecap="round"
              connectNulls={true}
              style={{
                filter: 'drop-shadow(0px 8px 5px rgba(60, 65, 202, 0.5))'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
        </div>
        <div style={{ 
            marginLeft: '16px',
            fontSize: '1rem',
            color: '#9CA3AF',
            textAlign: 'right',
            marginBottom: '1em'
        }}>
            <span style={{fontSize:"1.1rem", color:"#768396"}}><span style={{ color: '#3C41CA'}}>10+</span> more </span><br></br>from last week
        </div>
        </div>
    </div>
  );
};

export default DocsViews;