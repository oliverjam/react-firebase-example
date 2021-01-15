import * as React from "https://cdn.skypack.dev/react@17.0.1";
import firebase from "../firebase.js";

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [authStatus, setAuthStatus] = React.useState("loading");

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setAuthStatus(user ? "loggedIn" : "loggedOut");
    });
    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={authStatus}>{children}</AuthContext.Provider>
  );
}

function useAuth() {
  const authStatus = React.useContext(AuthContext);
  if (!authStatus) {
    throw new Error("useAuth must be called within <AuthProvider>");
  }
  return authStatus;
}

export { AuthProvider, useAuth };
