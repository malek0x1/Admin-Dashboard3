import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

import './App.css';
import Main from "./components/Main/Main";
import RightBar from "./components/RightBar/RightBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import New from "./components/New/New";
function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="Admin-Dashboard3/" element={<Home />} />
        <Route path="Admin-Dashboard3/users" element={<Users />} />
        <Route path="Admin-Dashboard3/users/new" element={<New />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
