import React from "react";
import { useState } from "react";
// import '../../styling/ProjectsCard.css'



// const ProjectsCard = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [selectedProject, setSelectedProject] = useState(null);

//     const openModal = (project) => {
//         setSelectedProject(project);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//         setSelectedProject(null);
//     };

//     return (
//         <div className="projects-page">
//             <h1>My Projects</h1>
//             <p>Here are some of the projects I've worked on:</p>
//             <div className="projects-grid">
//                 {projects.map((project, index) => (
//                     <div className="project-card" key={index} onClick={() => openModal(project)}>
//                         <img src={project.images[0]} alt={project.title} className="project-image" />
//                         <h3>{project.title}</h3>
//                     </div>
//                 ))}
//             </div>
//             {selectedProject && (
//                 <ImageModal isOpen={isModalOpen} project={selectedProject} onClose={closeModal} />
//             )}
//         </div>
//     );
// };

// export default ProjectsCard;


const ProjectCard = ({ title, onClick }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <h3>{title}</h3>
        </div>
    );
};

export default ProjectCard;