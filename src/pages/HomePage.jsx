import React from 'react';

import AboutUs from '../components/homePage/AboutUs';
import TechnologyCapabilities from '../components/homePage/TechnologyCapabilities';
import Footer from '../components/Footer'
import NavBar from '../components/Navbar';

const HomePage = () => {
    return (
        <div className='page-content'>
            <NavBar/>
            <AboutUs />
            <TechnologyCapabilities />
            <Footer/>
        </div>
    );
};

export default HomePage;