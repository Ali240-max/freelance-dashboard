function ProgressBar({ obj }) {
  return (
    <>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-600">Progress</span>
        <span className="font-medium text-slate-900">{obj.progress}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${obj.progress}%` }}
        />
      </div>
    </>
  );
}

export default ProgressBar;
