import React from 'react';

import ContactInfo from '../components/contactPage/ContactInfo';
import ContactForm from '../components/contactPage/ContactForm';
import Footer from '../components/Footer';
import NavBar from '../components/Navbar';

import '../styling/ContactPage.css'

const ContactPage = () => {
    return (
        <div className='page-content'>
            <NavBar/>
                <div className="contact-heading">
                    <h1>Contact us to learn more</h1>
                </div>
            <div className="contact-page">
                <ContactInfo />
                <ContactForm />
            </div>
            <Footer/>
       </div>
    );
};

export default ContactPage;