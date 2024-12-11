import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { PortfolioProvider } from "./pages/profil/components/contexts/editPortfolioContext.jsx";
import { MalumotProvider } from "./pages/profil/components/contexts/editMalumotlarContext.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <AuthProvider>
    <PortfolioProvider>
      <MalumotProvider>
        <App />
        <ToastContainer position="bottom-right"/>
      </MalumotProvider>
    </PortfolioProvider>
    </AuthProvider>
  </>
);
