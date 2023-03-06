import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const initialuser = { auth: false, name: "" };

export const AuthContext = React.createContext();
export default function AuthContextProvider({ children }) {
  const [isAuth, SetIsAuth] = React.useState(initialuser);
  const [total, setTotal] = React.useState();
  const [elecData, setElecData] = React.useState([]);
  const [furnitureData, setFurnitureData] = React.useState([]);
  const [fitnessData, setFitnessData] = React.useState([]);

  const login = (name) => {
    SetIsAuth(name ? { auth: true, name: name } : { auth: false, name: "" });
  };
  const logout = () => {
    SetIsAuth({ auth: false, name: "" });
  };
  const totalsum = (t) => {
    setTotal(t);
  };
  const getElecData = (data) => {
    setElecData(data);
  };
  const getFurnitureData = (data) => {
    setFurnitureData(data);
  };
  const getFitnessData = (data) => {
    setFitnessData(data);
  };

  const val = {
    login,
    logout,
    isAuth,
    total,
    totalsum,
    getElecData,
    elecData,
    getFurnitureData,
    furnitureData,
    fitnessData,
    getFitnessData,
  };
  return (
    <>
      <AuthContext.Provider value={val}>{children}</AuthContext.Provider>
      <ToastContainer />
    </>
  );
}
