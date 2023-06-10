import UserLogin from "./components/login/UserLogin";
import UserHomePage from "./components/homepages/UserHomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/login/AdminLogin";
import AdminHomePage from "./components/homepages/AdminHomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/home" element={<UserHomePage />} />
        <Route path="/adminlog" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
