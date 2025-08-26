import {
  DollarSign,
  FolderOpen,
  Clock,
  TrendingUp,
  TrendingDown,
  Calendar,
  CheckCircle,
  AlertTriangle,
  DollarSignIcon,
} from "lucide-react";

function StatusCard({
  title,
  value,
  change,
  changeType,
  icon: Icon,
  color,
  text,
}) {
  const colorClasses = {
    green: "bg-green-300/70",
    indigo: "bg-indigo-300/70",
    amber: "bg-amber-300/70",
    purple: "bg-purple-300/70",
  };
  const textClasses = {
    green: "text-green-600",
    indigo: "text-indigo-600",
    amber: "text-amber-600",
    purple: "text-purple-600",
  };

  return (
    <div className="flex gap-8 bg-white shadow-md  hover:translate-y-[-5px] transition-all duration-300 hover:shadow-lg rounded-lg p-5 items-center justify-between w-120 max-[1320px]:w-100 max-md:w-full">
      <div className="flex flex-col gap-5 ">
        <div>
          <h1 className="text-lg text-gray-500">{title}</h1>
          <h1 className="text-3xl font-bold">{value}</h1>
        </div>
        <div
          className={`${
            changeType === "positive" ? "text-green-600" : "text-red-600"
          } flex gap-2 `}
        >
          {changeType === "positive" ? (
            <TrendingUp className="" />
          ) : (
            <TrendingDown className="" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div
        className={`w-12 flex items-center justify-center h-12 ${colorClasses[color]} ${textClasses[text]} rounded-lg`}
      >
        <Icon className="" />
      </div>
    </div>
  );
}

export default StatusCard;
