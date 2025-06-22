import { useRouteError } from "react-router";
const Error = () => {
    const err=useRouteError();
    console.log(err);
    
  return (
    <div>
      <h1>OOPS </h1>
      <h2>Something Went Wrong</h2>
      <span>{err.status}:{err.statusText}</span>
    </div>
  );
};
export default Error;
