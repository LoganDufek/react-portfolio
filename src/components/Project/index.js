import React, { useState } from 'react';
import github from "../../assets/images/github-logo.png";
import linklogo from "../../assets/images/link-logo.png"



const Project = (props) => {


    const {
        projects = [],
        setcurrentProject,
        currentProject
    } = props;


    return (
        <div className = "projects">
           

            {projects.map((project) => (

                <div >
                    <div className="container">
        
                    <img
                        src={require(`../../assets/images/${project.name}.jpg`).default}
                        alt={project.name}
                        className="proj-thumbnail"
                       

                        key={project.name}
                    />
                     <h4 className="proj-title">{project.title}
                     </h4>
                     
                     
                      <p>
                        {project.description}
                        
                    </p>

                    

                </div>
                <div className="links" >

                 <a href= {project.github}
                        
                        className="githubProj" >
                             <img alt="githublogo"  onmouseover="click();" src={github} style={
                            {width: 60}
                        }></img>
                    </a>

                     <a href= {project.link}
                        
                        className="linkProj" >
                             <img alt="linklogo"  src={linklogo} style={
                            {width: 60}
                        }></img>
                    </a>
                    </div>
                </div>
            ))}

        </div>
    )


}

export default Project;