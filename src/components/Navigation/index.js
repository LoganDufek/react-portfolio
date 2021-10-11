import React from "react";
import { Link } from 'react-router-dom';

function Navigation(props) {

    const {
    categories = []
  } = props;

    return (
        <nav className = "navOptions">
           {categories.map((category) =>(  
                       <li
                            key={category.name}> 
                            <Link to={`${category.path}`} >
                                {category.name}
                            </Link>
                        </li> ))}
           
        </nav>
    )
}

export default Navigation;