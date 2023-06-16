import ClientLogin from "./components/login/ClientLogin";
import ClientHomePage from "./components/homepages/ClientHomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/login/AdminLogin";
import AdminHomePage from "./components/homepages/AdminHomePage";
import Signup from "./components/login/Singup";
import Public from "./components/homepages/Public";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/login" element={<ClientLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<ClientHomePage />} />
        <Route path="/adminlog" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminHomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
