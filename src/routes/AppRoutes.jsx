import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import NavBar from '../components/Navbar';
import Overlay from '../components/Overlay';
import '../App.css'

const AppRoutes = () => {

        const location = useLocation();
        const [triggerTransition, setTriggerTransition] = useState(false);
        const [delayedLocation, setDelayedLocation] = useState(location);

        useEffect(() => {
            setTriggerTransition(true);
            setTimeout(() => {
                setDelayedLocation(location);
                setTriggerTransition(false);
            }, 1500); // Duration of the overlay effect
        }, [location]);

    return (
//         <>
//             <NavBar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/services" element={<ServicesPage />} />
//                 <Route path="/projects" element={<ProjectsPage />} />
//                 <Route path="/contact" element={<ContactPage />} />
//             </Routes>
//         </>
//     );
    // };
        
        <>
            <NavBar />
            <Overlay triggerTransition={triggerTransition} />
            <TransitionGroup>
                <CSSTransition key={delayedLocation.key} classNames="page" timeout={1000}>
                    <Routes location={delayedLocation}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/services" element={<ServicesPage />} />
                        <Route path="/projects" element={<ProjectsPage />} />
                        <Route path="/contact" element={<ContactPage />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

export default AppRoutes;