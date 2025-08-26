import {
  FolderOpen,
  Plus,
  Search,
  Filter,
  Calendar,
  DollarSign,
  MoreHorizontal,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import ProgressBar from "./ProgressBar";

function ProjectCard({ obj }) {
  const statusConfig = {
    completed: {
      label: "Completed",
      color: "bg-emerald-100 text-emerald-800",
      icon: CheckCircle,
      iconColor: "text-emerald-600",
    },
    "in-progress": {
      label: "In Progress",
      color: "bg-indigo-100 text-indigo-800",
      icon: Clock,
      iconColor: "text-indigo-600",
    },
    "on-hold": {
      label: "On Hold",
      color: "bg-amber-100 text-amber-800",
      icon: AlertTriangle,
      iconColor: "text-amber-600",
    },
    cancelled: {
      label: "Cancelled",
      color: "bg-red-100 text-red-800",
      icon: AlertTriangle,
      iconColor: "text-red-600",
    },
  };

  const status = statusConfig[obj.status];
  const StatusIcon = status.icon;

  return (
    <div className="bg-white rounded-lg shadow-md px-5 py-5 flex flex-col transition-all duration-300 hover:shadow-lg hover:scale-102 max-xs:w-full ">
      <div className="flex gap-4 mb-2">
        <div className="text-[#4f46e5] bg-[#e0e7ff] w-10 h-10 rounded-lg flex items-center justify-center">
          <FolderOpen size={20} />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{obj.name}</h1>
          <span className="text-sm text-gray-600">{obj.client}</span>
        </div>
      </div>
      <div>
        <p className="text-gray-600 text-md mb-3">{obj.description}</p>
      </div>
      <div className="flex items-center justify-between mb-5">
        <div
          className={`flex gap-2 px-3 ${status.color} items-center capitalize rounded-full justify-center py-1`}
        >
          <StatusIcon size={15} className={status.iconColor} />
          <span>{status.label}</span>
        </div>
        <span className="font-semibold text-lg">{obj.budget}</span>
      </div>
      <div className="space-y-2 mb-4">
        <ProgressBar obj={obj} />
      </div>
      <div className="flex items-center text-gray-500 gap-2">
        <Calendar size={15} />
        <span>{obj.deadline}</span>
      </div>
    </div>
  );
}

export default ProjectCard;
