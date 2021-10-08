import React from "react";
import hero from "../../assets/images/PortfolioHero.jpg"
import Navigation from "../Navigation";

function Header() {

    return (
        <header style={{ backgroundImage: `url(${hero})` }}>
            
            <div className="banner" >
            <h1 >Logan Dufek  </h1>
                   <p> <Navigation /></p>
    
           </div>

        </header>
    )
}

export default Header;