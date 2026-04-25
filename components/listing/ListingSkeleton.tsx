export default function ListingSkeleton() {
  return (
    <div className="animate-pulse bg-white rounded-2xl overflow-hidden">
      <div className="h-56 bg-gray-200" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-6 bg-gray-300 rounded w-1/3" />
      </div>
    </div>
  );
}