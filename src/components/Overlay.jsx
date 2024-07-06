import React, { useEffect, useState } from 'react';
import '../styling/Overlay.css';


const Overlay = ({ triggerTransition }) => {
    const [overlayClass, setOverlayClass] = useState('hidden');

    useEffect(() => {
        if (triggerTransition) {
            setOverlayClass('enter');
            setTimeout(() => {
                setOverlayClass('exit');
            }, 500); // Time for the overlay to stay fully visible before starting the exit
            setTimeout(() => {
                setOverlayClass('hidden');
            }, 3000); // Ensure this timeout matches the total duration of the animation
        }
    }, [triggerTransition]);

    return (
        <div className={`overlay ${overlayClass}`}></div>
    );
};

export default Overlay;

