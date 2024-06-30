import React from 'react';
import '../../styling/ImageModal.css';

import { IoClose } from "react-icons/io5";

import ImageSlider from './ImageSlider';


const ImageModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>
                    <IoClose />
                </button>
                <h2>{project.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
                <p><strong>Technologies:</strong> {project.technologies}</p>
                <ImageSlider images={project.images} />
                <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    View Live Project
                </a>
            </div>
        </div>
    );
};

export default ImageModal;
