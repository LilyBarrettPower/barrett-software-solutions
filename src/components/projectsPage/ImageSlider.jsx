import React from 'react';
import { useState} from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
import '../../styling/ImageSlider.css';

// const ImageSlider = ({ images }) => {
//     const settings = {
//         dots: true,
//         infinite: images.length > 1,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     return (
//         <div className="slider-container">
//             <Slider {...settings}>
//                 {images.map((image, index) => (
//                     <div key={index} className="slide">
//                         <img src={image} alt={`Slide ${index}`} className="slider-image" />
//                     </div>
//                 ))}
//             </Slider>
//         </div>
//     );
// };

// export default ImageSlider;


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