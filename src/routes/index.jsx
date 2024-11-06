import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/LoginPage";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default CustomRoutes;
