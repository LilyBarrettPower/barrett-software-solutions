import React from 'react';

import AboutUs from '../components/homePage/AboutUs';
import TechnologyCapabilities from '../components/homePage/TechnologyCapabilities';
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <AboutUs />
            <TechnologyCapabilities />
            <Footer/>
        </>
    );
};

export default HomePage;