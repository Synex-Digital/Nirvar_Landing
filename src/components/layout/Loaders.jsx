const Skeleton = ({
  width = "w-full",
  height = "h-4",
  rounded = "rounded-md",
}) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${width} ${height} ${rounded}`}
    ></div>
  );
};

export const PageSkeleton = () => {
  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <Skeleton width="w-1/2" height="h-8" rounded="rounded-lg" />

      {/* Content */}
      <div className="space-y-4">
        <Skeleton width="w-full" height="h-48" rounded="rounded-lg" />
        <Skeleton width="w-3/4" height="h-6" />
        <Skeleton width="w-1/2" height="h-6" />
      </div>

      {/* List Items */}
      <div className="space-y-4">
        {[...Array(5)].map((_, index) => (
          <Skeleton
            key={index}
            width="w-full"
            height="h-12"
            rounded="rounded-md"
          />
        ))}
      </div>
    </div>
  );
};
