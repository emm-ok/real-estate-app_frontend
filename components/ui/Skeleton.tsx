
const Skeleton = ({ className }: { className?: string }) => {
  return (
    <div className={`animate-pulse bg-stone-200 ${className} rounded-md`} />
  )
}

export default Skeleton