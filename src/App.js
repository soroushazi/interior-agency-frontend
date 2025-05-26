import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';  // Import the Header component
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Profile from './components/Profile/Profile';
// import Services from './components/Services/Services';
// import About from './components/About/About';
// import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router>
      <div>
        <Header /> {/* The Header component will appear on every page */}

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
