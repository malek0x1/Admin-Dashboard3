import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '2016',
        uv: 4000,
        users: 2400,
        amt: 2400,
    },
    {
        name: '2017',
        uv: 3000,
        users: 1398,
        amt: 2210,
    },
    {
        name: '2018',
        uv: 2000,
        users: 9800,
        amt: 2290,
    },
    {
        name: '2019',
        uv: 2780,
        users: 3908,
        amt: 2000,
    },
    {
        name: '2020',
        uv: 1890,
        users: 4800,
        amt: 2181,
    },
    {
        name: '2021',
        uv: 2390,
        users: 3800,
        amt: 2500,
    },
    {
        name: '2022',
        uv: 3490,
        users: 4300,
        amt: 2100,
    },
];

const getIntroOfPage = (label) => {
    if (label === 'Page A') {
        return "lorem ipsum lorem ipsum";
    }
    if (label === 'Page B') {
        return "lorem ipsum lorem ipsum";
    }
    if (label === 'Page C') {
        return "lorem ipsum lorem ipsum";
    }
    if (label === 'Page D') {
        return 'lorem ipsum lorem ipsum';
    }
    if (label === 'Page E') {
        return 'lorem ipsum lorem ipsum';
    }
    if (label === 'Page F') {
        return 'lorem ipsum lorem ipsum';
    }
    return '';
};


const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`${label} : ${payload[0].value}`}</p>
                <p className="intro">{getIntroOfPage(label)}</p>
                <p className="desc">Anything you want can be displayed here.</p>
            </div>
        );
    }

    return null;
};


const UsersGraph = () => {
var demoUrl = 'https://codesandbox.io/s/tooltip-with-customized-content-lyxvs';
return (
    <BarChart
          width={390}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="users" barSize={20} fill="#0088FE" />
        </BarChart>
)
}

export default UsersGraph