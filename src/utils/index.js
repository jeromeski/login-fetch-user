import axios from "axios";
import localforage from "localforage";

export function login(email, password) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function onAuthStateChanged(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}

const noop = () => {};
let onAuthChangeHandler = noop;

export function auth() {
  function onAuthStateChanged(handler) {
    onAuthChangeHandler = handler;
    localforage.getItem("auth").then((auth) => {
      if (auth) {
        handler(auth);
      } else {
        handler(null);
      }
    });
  }

  async function signInWithEmailAndPassword(email, password) {
    const users = await fetchUsers();
    const user = users.find((user) => user.email === email);
    localforage.setItem("auth", user);
    if (!user) {
      throw new Error("No user found!");
    }
    onAuthChangeHandler(user);
  }

  async function signOut() {
    await localforage.removeItem("auth");
    onAuthChangeHandler(null);
  }

  return {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
  };
}

async function fetchUsers() {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return data;
}
