import React from 'react';
import Word from './Word';
import '../styling/LoadingText.css';

const LoadingText = () => {
    const words = ["We", "develop ", "solutions ", "to ", "enhance ", "your ", "life"];

    return (
        <div className="loading-text">
            {words.map((word, index) => (
                <Word key={index} text={word} delay={index * 500} />
            ))}
        </div>
    );
};

export default LoadingText;