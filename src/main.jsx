import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter} from "react-router-dom"
import "./global.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter , BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
 <BrowserRouter basename="/src">
            <App />
        </BrowserRouter>
);
