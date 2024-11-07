import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import LoginPage from "../pages/LoginPage";
import PageNotFound from "../components/PageNotFound";

const CustomRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default CustomRoutes;
