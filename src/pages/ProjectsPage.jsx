import React from 'react'; 

import AboutProjects from '../components/projectsPage/AboutProjects';
// import ProjectsCard from '../components/projectsPage/ProjectsCard';
import Footer from '../components/Footer'
import Projects from '../components/projectsPage/Projects';



const ProjectsPage = () => {
    return (
        <>
            <AboutProjects />
            <Projects />
            <Footer/>
        </>
    );
};

export default ProjectsPage;