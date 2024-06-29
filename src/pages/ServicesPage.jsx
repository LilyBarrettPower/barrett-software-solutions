import React from 'react';

import HowWeCanHelp from '../components/servicesPage/HowWeHelp';
import ServicesCard from '../components/servicesPage/ServicesCard';
import Footer from '../components/Footer';

const ServicesPage = () => {
    return (
        <>
            <HowWeCanHelp/>
            <ServicesCard />
            <Footer/>
       </>
    );
};

export default ServicesPage;