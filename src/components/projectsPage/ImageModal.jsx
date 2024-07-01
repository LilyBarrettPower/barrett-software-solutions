import React, {useState} from 'react';
import '../../styling/ImageModal.css';

import { IoClose } from "react-icons/io5";

import ImageSlider from './ImageSlider';


const ImageModal = ({ isOpen, onClose, project }) => {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 1000); // Match the duration of the close animation
    };

    if (!isOpen) return null;
    return (
        <div className="modal-overlay" onClick={handleClose}>
            <div className={`modal-content ${isClosing ? 'closing' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={handleClose}>
                    <IoClose />
                </button>
                <h2>{project.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
                <ImageSlider images={project.images} />
                {project.liveLink && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className='live-project-link'>
                        View Live Project
                    </a>
                )}
            </div>
        </div>
    );
};

export default ImageModal;
