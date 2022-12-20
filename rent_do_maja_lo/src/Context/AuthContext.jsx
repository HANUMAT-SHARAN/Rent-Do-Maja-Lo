import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialuser = { auth: false, name: "" };

export const AuthContext = React.createContext();
export default function AuthContextProvider({ children }) {
  const [isAuth, SetIsAuth] = React.useState(initialuser);
  const [total,setTotal]=React.useState()

  const login = (name) => {
    SetIsAuth(name ? { auth: true, name: name } : { auth: false, name: "" });
  };
  const logout = () => {
    SetIsAuth({ auth: false, name: "" });
  };
  const totalsum=(t)=>{
      setTotal(t)
  }
  console.log(total)
  const val = { login, logout, isAuth,total,totalsum };
  return (
    <>
      <AuthContext.Provider value={val}>{children}</AuthContext.Provider>
      <ToastContainer />
    </>
  );
}
