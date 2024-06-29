import React from "react";
import '../../styling/ContactInfo.css'

const ContactInfo = () => {

    return (
        <>
            <div className="contact">
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
export default ContactInfo;