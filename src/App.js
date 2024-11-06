import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import CustomRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./Auth/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./pages/LoginPage";

function App() {
  const { accessToken } = useAuth();
  return (
    <div>
      <BrowserRouter>
        {accessToken ? (
          <>
            <Header />
            <CustomRoutes />
          </>
        ) : (
          <LoginPage />
        )}
      </BrowserRouter>
    </div>
  );
}
export default App;
