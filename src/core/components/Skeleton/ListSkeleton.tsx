const ListSkeleton = () => {
  return (
    <div className="border border-gray-500 shadow rounded-md p-4">
      <div className="animate-pulse flex gap-x-3">
        <div className="rounded-lg bg-slate-700 min-h-fit w-14"></div>
        <div className="flex-1 py-1">
          <div className="space-y-3">
            <div className="w-[100%] h-2 bg-slate-700 rounded"></div>
            <div className="w-[70%] h-2 bg-slate-700 rounded"></div>
            <div className="w-[50%] h-2 bg-slate-700 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListSkeleton;
