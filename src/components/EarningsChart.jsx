import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", earnings: 2400 },
  { month: "Feb", earnings: 3200 },
  { month: "Mar", earnings: 2800 },
  { month: "Apr", earnings: 4100 },
  { month: "May", earnings: 3600 },
  { month: "Jun", earnings: 4250 },
  { month: "Mar", earnings: 2800 },
  { month: "Apr", earnings: 4100 },
  { month: "May", earnings: 3600 },
  { month: "Jun", earnings: 4250 },
];
function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height={330}>
      <BarChart data={data}>
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />{" "}
            {/* Indigo */}
            <stop offset="100%" stopColor="#a78bfa" stopOpacity={1} />{" "}
            {/* Purple */}
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
        <XAxis
          dataKey="month"
          stroke="#64748b"
          fontSize={12}
          tickLine={false}
        />
        <YAxis
          stroke="#64748b"
          fontSize={12}
          tickLine={false}
          tickFormatter={(value) => `$${value / 1000}k`}
        />
        <Tooltip
          formatter={(value) => [`$${value}`, "Earnings"]}
          labelStyle={{ color: "#1e293b" }}
          contentStyle={{
            backgroundColor: "white",
            border: "1px solid #e2e8f0",
            borderRadius: "8px",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Bar
          dataKey="earnings"
          fill="url(#barGradient)"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default EarningsChart;
