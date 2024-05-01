import React, { createContext, useState } from "react";
import { Login } from "./Login";
import { User } from "./User";

export const UserContext = createContext(null);

function UserContextProvider() { // Use a more descriptive name

  const [userName, setUserName] = useState("");

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      <Login />
      <User />
    </UserContext.Provider>
  );
}

export { UserContextProvider };
