import { PieChart, Pie, Cell, Tooltip } from 'recharts'
import { NumericFormat } from 'react-number-format'

const COLORS = ['#ff71b6', '#007bff', '#009688']

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="custom-tooltip">
                <p className='text-sm font-bold'>{data.label}</p>
                <NumericFormat
                    value={data.value}
                    displayType={'text'}
                    thousandSeparator={true}
                />
                {/* <p>{data.value}</p> */}
            </div>
        );
    }

    return null;
};
const CalculatorPieChart = ({ data }) => {
    return (
        <PieChart width={200} height={200}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="label"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
        </PieChart>
    )
};

export default CalculatorPieChart;