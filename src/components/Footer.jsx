import React from 'react';
import '../styling/Footer.css';


const Footer = () => {


    return (
        <>
            <div className="footer">
                <div className="contact-item">
                    <p className="label">Phone:</p>
                    <p className="value">022 021 5282</p>
                </div>
                <div className="contact-item">
                    <p className="label">Email:</p>
                    <p className="value">lilypowersoftware@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer;