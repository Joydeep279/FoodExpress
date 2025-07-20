console.log("Shimmer Loaded");

const ShimmerLayout = () => {
  return (
    <div className="card-layout">
      <img
        src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*jJKlUDkGzezjiFPagzvnuw.gif"
        alt="ShimmerUI"
      />
    </div>
  );
};
const Shimmer = () => {
  return (
    <div className="Shimmer">
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
    </div>
  );
};
export default Shimmer;
