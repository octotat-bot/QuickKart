import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Custom tooltip component with better visibility
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ 
        backgroundColor: 'rgba(24, 24, 29, 0.95)', 
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '6px',
        padding: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
      }}>
        <p className="tooltip-label" style={{ color: 'white', fontWeight: '600', marginBottom: '6px' }}>{label}</p>
        <div>
          {payload.map((entry, index) => (
            <p key={`item-${index}`} style={{ color: entry.color, margin: '4px 0' }}>
              <span style={{ fontWeight: '600' }}>{entry.name}:</span> {entry.value}
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const LineChart = ({ 
  data, 
  title, 
  xDataKey, 
  lines = [], 
  height = 400,
  grid = true
}) => {
  return (
    <div className="chart-container">
      {title && <h4 className="chart-title">{title}</h4>}
      <ResponsiveContainer width="100%" height={height}>
        <RechartsLineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {grid && <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" />}
          <XAxis 
            dataKey={xDataKey} 
            tick={{ fill: '#f0f0f0', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
          />
          <YAxis 
            tick={{ fill: '#f0f0f0', fontSize: 12 }}
            axisLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
            tickLine={{ stroke: 'rgba(255, 255, 255, 0.3)' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ paddingTop: '10px' }}
            formatter={(value) => <span style={{ color: '#f0f0f0', fontSize: '12px' }}>{value}</span>}
          />
          {lines.map((line, index) => (
            <Line
              key={index}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color || `#${Math.floor(Math.random()*16777215).toString(16)}`}
              activeDot={{ r: 8 }}
              strokeWidth={2}
              name={line.name || line.dataKey}
            />
          ))}
        </RechartsLineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChart; 