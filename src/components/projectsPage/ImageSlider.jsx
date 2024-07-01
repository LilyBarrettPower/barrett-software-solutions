import React from 'react';
import { useState} from 'react';
import '../../styling/ImageSlider.css';

import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="image-slider">
            {images.length > 1 && (
                <button className="arrow-button" onClick={prevImage}>
                    <MdArrowBackIos />
                </button>
            )}
            <img src={images[currentIndex]} alt="project" />
            {images.length > 1 && (
                <button className="arrow-button" onClick={nextImage}>
                    <MdArrowForwardIos />
                </button>
            )}
        </div>
    );
};

export default ImageSlider;