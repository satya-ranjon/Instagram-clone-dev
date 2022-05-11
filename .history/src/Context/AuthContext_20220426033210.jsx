import React, { createContext, useContext } from "react";

const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthContext() {
  return <div>AuthContext</div>;
}
