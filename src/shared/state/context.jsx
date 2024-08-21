/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { loadAuthState, storeAuthState } from "./storage";

export const AuthContext = createContext();

export function AuthenticationContext({ children }) {
  const [authState, setAuthState] = useState(loadAuthState());

  const onLoginSuccess = (data) => {
    setAuthState(data);
    storeAuthState(data);
  };

  const onLogoutSuccess = () => {
    setAuthState({ id: 0 });
    storeAuthState({ id: 0 });
  };
  return (
    <AuthContext.Provider
      value={{ ...authState, onLoginSuccess, onLogoutSuccess }}
    >
      {children}
    </AuthContext.Provider>
  );
}
