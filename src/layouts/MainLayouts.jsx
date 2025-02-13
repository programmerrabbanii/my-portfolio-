import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import bgimg from '../assets/fulBg.jpg';
import Footer from '../Components/Footer';

const ClockSpinner = () => {
  return (
    <div className="flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

const MainLayouts = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Stop loading after 3 seconds
    }, 3000); // You can adjust the duration based on your needs

    return () => clearTimeout(timer); // Clean up the timer when the component unmounts
  }, []);

  return (
    <div
      style={{
        backgroundImage: `url(${bgimg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Navbar */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <Navbar />
      </div>

      {/* Show spinner while loading */}
      {loading ? (
        <ClockSpinner />
      ) : (
        <div className="flex-1">
          <Outlet />
          <Footer />
        </div> 
      )}
    </div>
  );
};

export default MainLayouts;
