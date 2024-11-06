import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/Header";
import CustomRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CustomRoutes />
    </BrowserRouter>
  );
}

export default App;
