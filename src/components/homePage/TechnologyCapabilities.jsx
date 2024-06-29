import React from 'react';
import '../../styling/TechnologyCapabilities.css';

const technologies = [
    { name: 'React', logo: '/images/ReactLogo.jpg' },
    { name: 'JavaScript', logo: '/images/JSLogo.jpg' },
    { name: 'NodeJS', logo: '/images/NodeJSLogo.jpg' },
    { name: 'Python', logo: '/images/PythonLogo.jpg' },
    { name: 'IOS', logo: '/images/IOSLogo.jpg' },
    { name: 'Android', logo: '/images/AndroidLogo.jpg' },
    { name: 'MySQL', logo: '/images/SQLLogo.jpg' },
    { name: 'React Native', logo: '/images/ReactLogo.jpg' },
    { name: 'MongoDB', logo: '/images/MongoDBLogo.jpg' },
    { name: 'Shopify', logo: '/images/ShopifyLogo.jpg' },
    { name: 'Wordpress', logo: '/images/WordPressLogo.jpg' },
    { name: 'Wix', logo: '/images/WixLogo.jpg' },
    { name: 'Square Space', logo: '/images/SquareSpaceLogo.jpg' },
    { name: 'Safety Culture', logo: '/images/SafetyCultureLogo.jpg' },
    {name: 'And more!', logo: '/images/MoreLogo.jpg'}
    
];

const TechnologyCapabilities = () => {

    return (
        <>
            <div className='technology-capabilities-heading'>
                <h2>Technology Capabilities:</h2>
            </div>
            <div className="technology-capabilities">
                <div className="technology-capabilities__left">
                    {/* <h2>Technology Capabilities:</h2> */}
                </div>
                <div className="technology-capabilities__right">
                    <div className="technology-grid">
                        {technologies.map((tech, index) => (
                            <div key={index} className="technology-item">
                                <img src={tech.logo} alt={`${tech.name} logo`} className="technology-logo" />
                                <p>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechnologyCapabilities;