import React from 'react'; 

import AboutProjects from '../components/projectsPage/AboutProjects';
// import ProjectsCard from '../components/projectsPage/ProjectsCard';
import Footer from '../components/Footer'
import Projects from '../components/projectsPage/Projects';
import NavBar from '../components/Navbar';



const ProjectsPage = () => {
    return (
        <div className='page-content'>
            <NavBar/>
            <AboutProjects />
            <Projects />
            <Footer/>
        </div>
    );
};

export default ProjectsPage;