import Project1 from '../images/project1.jpeg';
import Project2 from '../images/project2.jpeg';
import Project3 from '../images/project3.jpeg';
import Project4 from '../images/project4.jpeg';

import ProjectItem from './ProjectItem';


const Projects = () => {
    return ( 
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
            <p className='text-cener py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis cum nobis tenetur aspernatur saepe id corrupti. Aspernatur aut odit voluptas eius saepe distinctio, itaque molestiae eveniet, omnis, deleniti ex! Perspiciatis!</p>
            <div className='grid sm:grid-cols-2 gap-12'>
                <ProjectItem img={Project1} title="Calculator"/>
                <ProjectItem img={Project2} title="Expense Tracker"/>
                <ProjectItem img={Project3} title="Pokedex"/>
                <ProjectItem img={Project4} title="Ecommerce Website"/>
            </div>
        </div>
     );
}
 
export default Projects;