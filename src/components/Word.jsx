import React, { useState, useEffect } from 'react';
import '../styling/Word.css';

const Word = ({ text, delay }) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return (
        <span className={`word ${visible ? 'visible' : ''}`}>{text} </span>
    );
};

export default Word;