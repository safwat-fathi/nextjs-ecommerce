const GridSkeleton = () => {
  return (
    <div className="border border-gray-500 shadow rounded-md p-4 h-64">
      <div className="animate-pulse flex flex-col h-full justify-between items-center gap-y-4">
        <div className="rounded-lg bg-slate-700 h-5/6 w-full"></div>
        <div className="w-full space-y-3">
          <div className="w-full h-2 bg-slate-700 rounded"></div>
          <div className="w-full h-2 bg-slate-700 rounded"></div>
          <div className="w-full h-2 bg-slate-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default GridSkeleton;
