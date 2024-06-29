import React from 'react';
import '../../styling/ServicesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilRuler, faShieldAlt, faMobileAlt, faBullhorn, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const services = [
    { title: 'Web Development', icon: faCode, text: 'We provide cutting-edge web development services using the latest technologies and best practices to create fast, secure, and scalable web applications.' },
    { title: 'Design Services', icon: faPencilRuler, text: 'Our design team crafts visually stunning and user-friendly designs that reflect your brand identity and captivate your audience.' },
    { title: 'Safety Culture', icon: faShieldAlt, text: 'We offer comprehensive safety culture services to help organizations improve workplace safety and reduce risks.' },
    { title: 'Mobile App Development', icon: faMobileAlt, text: 'Our mobile app development services cover both iOS and Android platforms, delivering high-performance and user-friendly mobile applications.' },
    { title: 'Digital Marketing', icon: faBullhorn, text: 'Our digital marketing services help businesses increase their online presence, engage with their audience, and drive growth through effective marketing strategies.' },
    { title: 'E-commerce Development', icon: faShoppingCart, text: 'We specialize in creating robust and scalable e-commerce platforms that provide a seamless shopping experience and drive sales.' },
];

const ServicesCard = () => {
    return (
        <div className="services">
            {services.map((service, index) => (
                <div className="service-box" key={index}>
                    <div className="service-content">
                        <div className="service-title">
                            <FontAwesomeIcon icon={service.icon} />
                            <h3>{service.title}</h3>
                        </div>
                        <div className="service-text">
                            <p>{service.text}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ServicesCard;