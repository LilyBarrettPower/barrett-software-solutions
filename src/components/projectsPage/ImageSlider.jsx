import React from 'react';
import { useState} from 'react';
import '../../styling/ImageSlider.css';


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
            <button onClick={prevImage}>Previous</button>
            <img src={images[currentIndex]} alt="project" />
            <button onClick={nextImage}>Next</button>
        </div>
    );
};

export default ImageSlider;