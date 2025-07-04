import { createContext } from "react";

const userInfo = createContext({
  name: "user name",
});
console.log(userInfo);

export default userInfo;
