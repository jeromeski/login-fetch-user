import { useEffect } from "react";
import { onAuthStateChanged } from "../utils/index.js";
import { useAppState } from "../context/app-state";

export default function useAuth() {
  const [{ authAttempted, auth }, dispatch] = useAppState();

  useEffect(() => {
    return onAuthStateChanged((auth) => {
      if (auth) {
        const { id, name, username } = auth;
        dispatch({
          type: "AUTH_CHANGE",
          auth: { id, name, username }
        });
      } else {
        dispatch({ type: "AUTH_CHANGE", auth: null });
      }
    });
  }, [dispatch]);

  return { authAttempted, auth };
}
