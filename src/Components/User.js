import { useState } from "react";

const User = (props) => {
  const { name, location } = props;
  const [count] = useState(0);
  const [count2] = useState(1);

  return (
    <div className="User-details">
      <h1>Count:{count}</h1>
      <h1>Count2:{count2}</h1>
      <h1>{name}(Functional Component)</h1>
      <span>{location}</span>
    </div>
  );
};
export default User;
