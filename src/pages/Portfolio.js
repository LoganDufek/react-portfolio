import React, { useState } from 'react';
import Project from '../components/Project';


const Portfolio = () => {

    const [projects] = useState([
    {
        title: 'Movie Matcher' , name: 'moviematcherproject', description: 'Front-End Project', github: 'https://github.com/LincolnW90/Movie-Matcher', link: 'https://lincolnw90.github.io/Movie-Matcher/'
    },
     {
        title: 'Pizza Hunt' , name: 'pizzahuntproject', description: 'NoSQL MongoDB', github: 'https://github.com/LoganDufek/pizza-hunt', link: 'https://gentle-thicket-07418.herokuapp.com/add-pizza'
    },
     {
        title: 'Pupparazi' , name: 'pupparaziproject', description: 'Full Stack Project', github: 'https://github.com/Sethmarks216/project_2', link: 'https://dry-fjord-30943.herokuapp.com/'
    },
     {
        title: 'Zoo Keepr' , name: 'zookeeprproject', description: 'SQL Database', github: 'https://github.com/LoganDufek/zookeeper', link: 'https://quiet-hamlet-02060.herokuapp.com/'
    },
       {
        title: 'Run Buddy' , name: 'runbuddyproject', description: 'HTML/CSS', github: 'https://github.com/LoganDufek/Run-Buddy', link: 'https://logandufek.github.io/Run-Buddy/'
    },

      {
        title: 'Get Clickn Tech Blog' , name: 'getclicknproject', description: 'MVC/Handlebars', github: 'https://github.com/LoganDufek/MVC_Structure_Tech_Blog', link: 'https://young-retreat-87062.herokuapp.com/'
    }

])

     const [currentProject, setcurrentProject] = useState(projects[0]);


    return (
        <div className= "portfolio">
            <h3 >Portfolio</h3>

            <Project projects={projects}
            setcurrentProject={setcurrentProject}
            currentProject={currentProject}/>

        </div>
    )

    
}

export default Portfolio;