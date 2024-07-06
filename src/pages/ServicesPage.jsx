import React from 'react';

import HowWeCanHelp from '../components/servicesPage/HowWeHelp';
import ServicesCard from '../components/servicesPage/ServicesCard';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

const ServicesPage = () => {
    return (
        <div className='page-content'>
            <NavBar/>
            <HowWeCanHelp/>
            <ServicesCard />
            <Footer/>
       </div>
    );
};

export default ServicesPage;