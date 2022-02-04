import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { signOut } from "../utils";

function Feed() {
  const { auth } = useAuth();

  useEffect(() => {
    if (auth) {
      console.log(auth);
    }
  });

  const handleLogout = () => {
    signOut();
    console.log(auth);
  };

  return (
    <>
      <h1>Feed</h1>
      <button onClick={handleLogout}>logout</button>
    </>
  );
}

export default Feed;
