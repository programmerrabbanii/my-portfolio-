import React from 'react';
import Home from '../pages/Home';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayouts;