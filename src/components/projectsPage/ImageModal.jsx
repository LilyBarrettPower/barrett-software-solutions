import React from 'react';
import '../../styling/ImageModal.css';

import ImageSlider from './ImageSlider';


const ImageModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>{project.title}</h2>
                <ImageSlider images={project.images} />
                <p>{project.description}</p>
                <p><strong>Technologies:</strong> {project.technologies}</p>
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Live Project
                </a>
            </div>
        </div>
    );
};

export default ImageModal;
