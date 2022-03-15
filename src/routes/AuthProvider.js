import { createContext, useState } from "react";
import fakeAuthProvider from "../apiServices";
import { AuthContext } from "../context/BasicContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState(null);
  console.log("fakeAuthProvider", fakeAuthProvider);
  let signin = (newUser, newPassword, cb) => {
    return fakeAuthProvider.signin(() => {
      setUser(newUser);
      setPassword(newPassword);
      cb();
    });
  };
  let signout = (cb) => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      setPassword(null);
      cb();
    });
  };
  let value = { user, signin, signout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
