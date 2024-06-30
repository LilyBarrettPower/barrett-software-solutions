import React from "react";
import { useState } from "react";
import '../../styling/ProjectsCard.css'


const ProjectCard = ({ title, onClick, images }) => {
    return (
        <div className="project-card" onClick={onClick}>
            <h3>{title}</h3>
            {images && images.length > 0 && (
                <img src={images[0]} alt={title} className="project-image" />
            )}
        </div>
    );
};

export default ProjectCard;