//import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Product from './pages/Product';
import ForgotPassword from './pages/ForgotPassword';
import Productdetail from './pages/Productdetail';
import Payment from './pages/Payment';
import History from "./pages/History";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/productdetail" element={<Productdetail />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/history" element={<History />} />
        <Route
          path="*"
          element={
            <main className="d-flex justify-content-center align-item-center p-5 fw-bold">
              <p>Page Not Found!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
