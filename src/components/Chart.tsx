import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#0088FE', '#FF4444'];

interface Props {
    data: { name: string; value: number }[];
}

export default function Chart({ data }: Props) {
    return (
        <PieChart width={400} height={300}>
            <Pie data={data} cx={200} cy={150} outerRadius={100} fill="#8884d8" dataKey="value" label>
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
}