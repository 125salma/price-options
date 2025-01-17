import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,Legend} from 'recharts';
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChar = () => {
    return (
            <div className='mt-8 mb-8'>
            <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    
                    >
                    <CartesianGrid strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend/>
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" stackId={1} />
                    <Area type="monotone" dataKey="pv" stroke="red" fill="#8884d8" stackId={1} />

                    </AreaChart>
             </div>
    );
};

export default AreaChar;