import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Example chart data
const sampleData = [
  { name: 'Jan', uv: 400 },
  { name: 'Feb', uv: 300 },
  { name: 'Mar', uv: 500 },
  { name: 'Apr', uv: 200 },
  { name: 'May', uv: 600 },
  { name: 'Jun', uv: 700 },
];

interface ChartProps {
  data?: any[]; // Replace 'any' with the type of data you're using
}

const Chart: React.FC<ChartProps> = ({ data = sampleData }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
