

import React from "react";

import '../styling/BlankScreen.css';
import LoadingText from '../components/LoadingText';


const BlankScreen = () => {

    return (

        <>
            <div className='screen'>
                <div className="loading-animation">
                    <div className="spinner"></div>
                    <LoadingText/>
                </div>
            </div>
        </>
    )
}

export default BlankScreen;