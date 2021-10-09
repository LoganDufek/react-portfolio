import { React, useState} from "react";
import hero from "../../assets/images/PortfolioHero.jpg"
import Navigation from "../Navigation";



function Header() {

    const [categories] = useState([
    { name: 'About Me', path: "/" },
    { name: 'Portfolio', path: "portfolio" },
    { name: 'ContactMe', path: "contact" },
    { name: 'Resume', path: "resume" },
  ]);

    return (
        <header style={{ backgroundImage: `url(${hero})` }}>
            
            <div className="banner" >
            <h1 >Logan Dufek  </h1>
                  <Navigation categories={categories}/> 
    
           </div>

        </header>
    )
}

export default Header;