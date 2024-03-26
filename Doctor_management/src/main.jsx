
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import React from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    <ToastContainer />
    </AuthProvider>
    
  </React.StrictMode>
);