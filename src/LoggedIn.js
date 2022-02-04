import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";

function LoggedIn() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Feed />} exact />
      </Routes>
    </BrowserRouter>
  );
}

export default LoggedIn;
