import { PieChart, Pie, Tooltip } from "recharts";

const Charts = ({ transactions }) => {
  const data = transactions.map(t => ({
    name: t.category,
    value: t.amount,
  }));

  return (
    <PieChart width={300} height={300}>
      <Pie data={data} dataKey="value" outerRadius={100} />
      <Tooltip />
    </PieChart>
  );
};

export default Charts;