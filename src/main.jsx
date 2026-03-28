import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import("preline/dist/index.js");
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
)