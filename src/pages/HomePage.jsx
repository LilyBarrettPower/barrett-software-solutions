import React from 'react';

import AboutUs from '../components/homePage/AboutUs';
import TechnologyCapabilities from '../components/homePage/TechnologyCapabilities';
import Footer from '../components/Footer'
import NavBar from '../components/Navbar';

import '../styling/HomePage.css'

const HomePage = () => {
    return (
        <div className='page-content'>
            <NavBar />
            <div className='main-content'>
                <AboutUs />
                <TechnologyCapabilities />
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;