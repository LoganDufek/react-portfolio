import { React, useState } from "react";
import hero from "../../assets/images/PortfolioHero.jpg"
import Navigation from "../Navigation";

function Header() {

    const [categories] = useState([
        { name: 'About Me', path: "/react-portfolio/" },
        { name: 'Portfolio', path: "/react-portfolio/portfolio" },
        { name: 'ContactMe', path: "/react-portfolio/contact" },
        { name: 'Resume', path: "/react-portfolio/resume" },
    ]);

    return (
        <header style={{ backgroundImage: `url(${hero})` }} className="header">

            <div className="banner" >
                <h1 >Logan Dufek  </h1>
                <Navigation categories={categories} />

            </div>

        </header>
    )
}

export default Header;