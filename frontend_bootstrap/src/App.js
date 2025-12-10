// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/homepage';
import Dashboard from './components/Dashboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles.css';

export default function App() {
  const [recipientEmail, setRecipientEmail] = useState(""); // centralized email state
  const [emailSending, setEmailSending] = useState(false);

  // Notification helper
  const notify = (message, type = "success") => {
    if (toast[type]) {
      toast[type](message, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast(message);
    }
  };

  return (
    <Router>
      <Navbar 
        recipientEmail={recipientEmail} 
        setRecipientEmail={setRecipientEmail} 
        emailSending={emailSending} 
        setEmailSending={setEmailSending} 
      />

      <Routes>
        {/* Home page with background image */}
        <Route path="/" element={<HomePage />} />

        {/* Dashboard without email input */}
        <Route 
          path="/dashboard" 
          element={<Dashboard 
            notify={notify} 
          />} 
        />
      </Routes>

      <ToastContainer />
    </Router>
  );
}
