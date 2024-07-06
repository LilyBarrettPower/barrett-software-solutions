import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import HomePage from '../pages/HomePage';
import ServicesPage from '../pages/ServicesPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import BlankScreen from '../pages/BlankScreen';
// import NavBar from '../components/Navbar';
import Overlay from '../components/Overlay';
// import LoadingScreen from '../components/LoadingScreen';
import '../App.css'

// const AppRoutes = () => {

//     const location = useLocation();
//         const [triggerTransition, setTriggerTransition] = useState(false);
//         const [delayedLocation, setDelayedLocation] = useState(location);

//         useEffect(() => {
//             setTriggerTransition(true);
//             setTimeout(() => {
//                 setDelayedLocation(location);
//                 setTriggerTransition(false);
//             }, 1500); // Duration of the overlay effect
//         }, [location]);

//     return (
        
//         <>
//             <NavBar />
//             <Overlay triggerTransition={triggerTransition} />
//             <TransitionGroup>
//                 <CSSTransition key={delayedLocation.key} classNames="page" timeout={1000}>
//                     <Routes location={delayedLocation}>
//                         <Route path="/" element={<BlankScreen />} />
//                         <Route path="/home" element={<HomePage/>}/>
//                         <Route path="/services" element={<ServicesPage />} />
//                         <Route path="/projects" element={<ProjectsPage />} />
//                         <Route path="/contact" element={<ContactPage />} />
//                     </Routes>
//                 </CSSTransition>
//             </TransitionGroup>
//         </>
//     );
// };

// export default AppRoutes;


const AppRoutes = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [triggerTransition, setTriggerTransition] = useState(false);
    const [delayedLocation, setDelayedLocation] = useState(location);
    const [initialLoad, setInitialLoad] = useState(true);

    useEffect(() => {
        if (initialLoad) {
            setTimeout(() => {
                setInitialLoad(false);
                navigate('/home');
            }, 3000); // Duration of the blank screen
        }
    }, [initialLoad, navigate]);

    useEffect(() => {
        if (!initialLoad && location.pathname !== '/') {
            setTriggerTransition(true);
            setTimeout(() => {
                setDelayedLocation(location);
                setTriggerTransition(false);
            }, 1500); 
        }
    }, [location, initialLoad]);

    return (
        <>
            {!initialLoad && <Overlay triggerTransition={triggerTransition} />}
            <TransitionGroup>
                <CSSTransition key={delayedLocation.key} classNames="page" timeout={1000}>
                    <div className="page">
                        <Routes location={delayedLocation}>
                            <Route path="/" element={<BlankScreen />} />
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/services" element={<ServicesPage />} />
                            <Route path="/projects" element={<ProjectsPage />} />
                            <Route path="/contact" element={<ContactPage />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    );
};

export default AppRoutes;
   