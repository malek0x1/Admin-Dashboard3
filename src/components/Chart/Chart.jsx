

import './Chart.css';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({aspect,Title}) => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2000 },
    { name: "March", Total: 10 },
    { name: "April", Total: 1200 },
    { name: "May", Total: 5200 },
    { name: "June", Total: 4200 },
    { name: "July", Total: 2200 },
  ];

  return (
    <div className='chart'>
      <div className="title">{Title}</div>
      <ResponsiveContainer width="100%"  aspect={aspect}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className='chartGrid' />
          <XAxis dataKey="name" stroke='gray' />
          <Tooltip />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="Total" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart;