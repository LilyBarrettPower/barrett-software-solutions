import React from "react";

import '../../styling/Projects.css'
import ProjectsCard from "./ProjectsCard";
import ImageModal from "./ImageModal";
import { useState } from "react";



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

const projects = [
    {
        id: 1,
        title: 'The Hororata Village Cafe',
        images: [
            '/images/HororataCafe1.jpg',
            '/images/HororataCafe2.jpg',
            '/images/HororataCafe3.jpg'
        ],
        description: `
        <p><strong>Design:</strong> We crafted a visually stunning and user-friendly website design that reflects the unique ambience of the Hororata Village Bar and Cafe.</p>
        <p><strong>Development Using Wix:</strong> Leveraging the power of Wix, we seamlessly translated the design into a fully functional website, ensuring smooth navigation and optimal performance.</p>
        <p><strong>Content Creation:</strong> Our team curated engaging content that showcases the bar and cafe's offerings, events, and specials, capturing the attention of visitors and enticing them to explore further.</p>
        <p><strong>Social Media Marketing:</strong> As part of our holistic approach to digital marketing, we managed the Hororata Village Bar and Cafe's social media presence, posting regular updates and promotions on Facebook and Instagram.</p>
        <p><strong>Menu Creation:</strong> We meticulously designed and implemented an interactive menu section, allowing customers to browse through the bar and cafe's mouthwatering offerings with ease.</p>
        <p><strong>SEO Optimisation:</strong> To enhance online visibility and attract more customers, we implemented strategic SEO techniques to improve the website's search engine ranking.</p>
      `,
        technologies: 'Wix, Social media',
        liveLink: 'https://www.hororatacafe.com/',
    },
    {
        id: 2,
        title: 'The Mind Jab',
        images: [
            '/images/MindJab.jpg'
        ],
        description: `<p>We created a distinctive Wix website for The MindJab to showcase the Virtual Gastric Band, a hypnotherapy weight loss technique. The site includes booking and payment systems, contact forms, automated emails, and features that highlight the client's unique personality, providing an engaging and seamless experience for users.</p>`,
        technologies: 'Wix',
        liveLink: 'https://www.themindjab.com/',
    },
    {
        id: 3,
        title: 'Jeanette Mabin Hypnotherapy',
        images: [
            '/images/JeanetteMabin.jpg'
        ],
        description: `<p>We developed a user-friendly website for Jeanette Mabin Hypnotherapy using Wix, designed to streamline her virtual hypnotherapy sessions. The site features integrated bookings, secure payment options, contact forms, and automated email communications, providing a seamless experience for clients seeking her services.</p>`,
        technologies: 'Wix',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 4, 
        title: 'Bridget Paape Celebrant',
        images: [
            '/images/BridgetPaape.jpg'
        ],
        description: `<p>We developed a visually engaging Wix website for Bridget Paape Celebrant, featuring numerous photos that capture the essence of her services. The site effectively attracts many customers through its appealing design and functionality. In addition to the website, I manage all of Bridget's social media and blog content, ensuring consistent and captivating communication with her audience.</p>`,
        technologies: 'Wix',
        liveLink: 'https://www.bridgetpaapecelebrant.com/',
    },
    {
        id: 5,
        title: 'Hospitality Safety Culture',
        images: [
            '/images/HospitalitySC.jpg'
        ],
        description: `<p>We developed a comprehensive safety culture framework for a hospitality business to ensure adherence to food safety practices. This system consolidates methods, records, and compliance documentation in one easy-to-use platform, streamlining audits and enhancing overall food safety management.</p>`,
        technologies: 'Safety culture',

    },
    {
        id: 6,
        title: 'Motorsport Safety Culture',
        images: [
            '/images/MotorsportSC.jpg'
        ],
        description: `<p>Introducing our bespoke safety culture framework tailored for the motorsport industry, honing in on meticulous management of teams, workshops,  vehicles and data storage and analysis. Our customisation extends to race-specific inspections, post-event evaluations, and streamlined inventory control, ensuring precision and safety at every stage of the racing journey.</p>`,
        technologies: 'Safety Culture, Zapier',

    },
    {
        id: 7,
        title: 'RentShare',
        images: [
            '/images/RentShare1.jpg',
            '/images/RentShare2.jpg'
        ],
        description: `<p>RentShare is a web application that allows users to rent and borrow under-utilised goods from every-day people</p>`,
        technologies: 'React, NodeJS, MySQL, AWS',

    },
    {
        id: 8,
        title: 'Pitlane Pro',
        images: [
            '/images/PitlanePro1.jpg',
            '/images/PitlanePro2.jpg'
        ],
        description: `<p>PitLane Pro is being developed with motorsport workers in mind. It's a cohesive mobile application that integrates all aspects of motorsport management.</p>
        <p>PitLane Pro was crafted using React Native, ensuring seamless performance across both iOS and Android platforms. Leveraging a modular architecture and robust backend integration, we engineered a scalable solution that empowers motorsport teams with intuitive management capabilities.</p>`,
        technologies: 'React Native, Firebase, IOS, Android, MongoDB, NodeJS',
       
    }
    // Add more projects as needed
];

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects-page">
            <div className="project-cards-container">
                {projects.map((project) => (
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        images={project.images}
                        onClick={() => handleCardClick(project)}
                    />
                ))}
            </div>
            {selectedProject && (
                <ImageModal
                    isOpen={!!selectedProject}
                    onClose={handleCloseModal}
                    project={selectedProject}
                />
            )}
        </div>
    );
};

export default Projects;