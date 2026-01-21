import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { FiCheck, FiRefreshCw, FiX } from "react-icons/fi";

const data = [
  { name: "Collections", value: 10 },
  { name: "Fees", value: 8 },
  { name: "Expenses", value: 5},
];


const CylinderBar = ({ x, y, width, height, payload }) => {
  const radius = width / 2;

  const gradientMap = {
    Collections: "url(#blueGrad)",
    Fees: "url(#redGrad)",
    Expenses: "url(#yellowGrad)",
  };

  return (
    <g>
     
      <ellipse
        cx={x + width / 2}
        cy={y + height}
        rx={radius}
        ry={6}
        fill={gradientMap[payload.name]}
        opacity={0.9}
      />
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={gradientMap[payload.name]}
      />
      <ellipse
        cx={x + width / 2}
        cy={y}
        rx={radius}
        ry={6}
        fill="white"
        opacity={0.35}
      />
      <ellipse
        cx={x + width / 2}
        cy={y + 4}
        rx={radius - 4}
        ry={4}
        fill="white"
        opacity={0.15}
      />
    </g>
  );
};

const FeesChart = () => {
  return (
    <div className="bg-white  border rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">
          Fees Collection & Expenses
        </h3>
        <div className="flex gap-2 text-sm">
          <FiCheck className="text-green-500 cursor-pointer" />
          <FiRefreshCw className="text-blue-500 cursor-pointer" />
          <FiX className="text-red-500 cursor-pointer" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="space-y-4 min-w-[150px]">
          <LegendItem color="bg-blue-500" label="Collections" value="10,000" />
          <LegendItem color="bg-red-400" label="Fees" value="8,000" />
          <LegendItem color="bg-yellow-400" label="Expenses" value="5,000" />
        </div>
        <div className="flex-1">
          <ResponsiveContainer width="100%" height={385}>
            <BarChart data={data}>
              <defs>
                <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#7DB7FF" />
                  <stop offset="50%" stopColor="#4F9CF9" />
                  <stop offset="100%" stopColor="#2B6FD6" />
                </linearGradient>

                <linearGradient id="redGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF9A9A" />
                  <stop offset="50%" stopColor="#F87171" />
                  <stop offset="100%" stopColor="#DC2626" />
                </linearGradient>

                <linearGradient id="yellowGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFE38A" />
                  <stop offset="50%" stopColor="#FACC15" />
                  <stop offset="100%" stopColor="#EAB308" />
                </linearGradient>
              </defs>

              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />

              <Bar dataKey="value" shape={<CylinderBar />} />
            </BarChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default FeesChart;

const LegendItem = ({ color, label, value }) => (
  <div className="flex gap-4 items-start">
    <span className={`w-4 h-4 mt-1 rounded-sm ${color}`} />
    <div>
      <p className="font-semibold text-gray-700">${value}</p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  </div>
);
