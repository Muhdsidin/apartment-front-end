import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Root() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
