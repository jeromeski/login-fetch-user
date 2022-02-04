import { useEffect } from "react";
import AppStateProvider from "./context/app-state";
import appReducer, { initialState } from "./context/appReducer";
import useAuth from "./hooks/useAuth";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./pages/LoggedOut";
import "./styles.css";

function App() {
  const { auth, authAttempted } = useAuth();
  if (!authAttempted) return null;

  return <>{auth ? <LoggedIn /> : <LoggedOut />}</>;
}

export default () => {
  return (
    <AppStateProvider reducer={appReducer} initialState={initialState}>
      <App />
    </AppStateProvider>
  );
};
