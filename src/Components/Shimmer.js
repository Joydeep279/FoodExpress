import React from "react";
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
    <React.Fragment>
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
      <ShimmerLayout />
    </React.Fragment>
  );
};
export default Shimmer;
