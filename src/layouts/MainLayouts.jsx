import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';
import bgimg from '../assets/fulBg.jpg';

const MainLayouts = () => {
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
            {/* Navbar স্টিকি থাকবে */}
            <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Navbar />
            </div>
            {/* বাকী কন্টেন্ট */}
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayouts;
