import {
  FolderOpen,
  DollarSign,
  MessageCircle,
  CheckCircle,
  Clock,
} from "lucide-react";

function RecentActivity({ activities }) {
  const Icon = activities.icon;
  return (
    <div className="flex gap-4 px-3 py-5 rounded-lg transition-all duration-300 hover:bg-gray-50">
      <div
        className={`${activities.color} w-15 h-15 flex items-center justify-center`}
      >
        <Icon className={`w-5 h-5 `} />
      </div>
      <div className="flex flex-col ">
        <h1 className="text-lg">{activities.title}</h1>
        <p className="text-gray-600 text-md">{activities.description}</p>
        <span className="text-sm text-gray-500">{activities.time}</span>
      </div>
    </div>
  );
}

export default RecentActivity;
