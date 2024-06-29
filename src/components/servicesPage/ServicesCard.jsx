import React from 'react';
import '../../styling/ServicesCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faPencilRuler, faShieldAlt, faMobileAlt, faBullhorn, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const services = [
    {
        title: 'Web Development', icon: faCode, text: "We specialise in crafting visually stunning and highly functional websites tailored to your unique needs. Whether you prefer the ease of use of platforms like Wix, Shopify, WordPress or the advanced capabilities and customisation of a coded website, we have the expertise to seamlessly integrate your custom design into a user-friendly website. All finished with comprehensive SEO to improve your website's visibility in search engine results." },
    { title: 'Design Services', icon: faPencilRuler, text: 'We understand the importance of captivating design in creating a memorable online presence. Our experienced designers work closely with you to bring your vision to life, ensuring that every aspect of your website or application reflects your brand identity and resonates with your target audience.' },
    { title: 'Safety Culture', icon: faShieldAlt, text: 'We offer unique safety templates designed for various industries. Our specialisation lies in crafting tailored solutions for hospitality businesses, ensuring compliance with FCP regulations, and workshops, including vehicle services, parts lifing and more. Elevate your safety standards with our customised templates.' },
    { title: 'Mobile App Development', icon: faMobileAlt, text: "Whether you're looking to expand your customer engagement, streamline internal processes, or launch a new product, our talented developers will transform your ideas into fully functional mobile applications.From iOS to Android, we leverage the latest technologies to create seamless and intuitive experiences for your users." },
    { title: 'Digital Marketing', icon: faBullhorn, text: 'Elevate your online presence and reach new heights with our strategic digital marketing services. From social media management to email campaigns, we offer a comprehensive suite of solutions designed to increase brand awareness, drive traffic, and generate leads.' },
    { title: 'E-commerce Development', icon: faShoppingCart, text: "Take your online store to the next level with our expert e-commerce development services. Whether you're starting from scratch or looking to enhance your existing platform, we have the skills and expertise to create a seamless shopping experience for your customers." },
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