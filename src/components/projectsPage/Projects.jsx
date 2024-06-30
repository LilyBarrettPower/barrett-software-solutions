import React from "react";

import ProjectsCard from "./ProjectsCard";
import ImageModal from "./ImageModal";
import { useState } from "react";



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

const projects = [
    {
        id: 1,
        title: 'The Hororata Village Bar and Cafe',
        images: [
            '/images/HororataCafe1.jpg',
            '/images/HororataCafe2.jpg',
            '/images/HororataCafe3.jpg'
        ],
        description: "Design: We crafted a visually stunning and user-friendly website design that reflects the unique ambience of the Hororata Village Bar and Cafe. Development Using Wix: Leveraging the power of Wix, we seamlessly translated the design into a fully functional website, ensuring smooth navigation and optimal performance.",
        technologies: 'React, Node.js, MongoDB',
        liveLink: 'https://example.com/project-one',
    },
    {
        id: 2,
        title: 'The Mind Jab',
        images: [
            '/images/MindJab.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 3,
        title: 'Jeanette Mabin Hypnotherapy',
        images: [
            '/images/JeanetteMabin.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 4, 
        title: 'Bridget Paape Celebrant',
        images: [
            '/images/BridgetPaape.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 5,
        title: 'Hospitality Safety Culture',
        images: [
            '/images/HospitalitySC.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 6,
        title: 'Motorsport Safety Culture',
        images: [
            '/images/MotorsportSC.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 7,
        title: 'RentShare',
        images: [
            '/images/RentShare1.jpg',
            '/images/RentShare2.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
    },
    {
        id: 8,
        title: 'Pitlane Pro',
        images: [
            '/images/PitlanePro1.jpg',
            '/images/PitlanePro2.jpg'
        ],
        description: 'Description of Project Two. It is a mobile app developed using React Native.',
        technologies: 'React Native, Firebase',
        liveLink: 'https://example.com/project-two',
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
            <h1>Projects</h1>
            <div className="project-cards-container">
                {projects.map((project) => (
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
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