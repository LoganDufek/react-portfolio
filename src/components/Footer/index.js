import React from "react";
import github from "../../assets/images/github-logo.png";
import linkedIn from "../../assets/images/linkedin-logo.png";
import facebook from "../../assets/images/facebook-logo.png"


function Footer() {


    return (
        <footer className="foot">

            <div>
                <a href="https://github.com/LoganDufek"

                    className="github" >
                    <img alt="githublogo" src={github} style={
                        { width: 80 }
                    }></img>
                </a>

                <a href="https://www.linkedin.com/in/logan-dufek-7b919383/"

                    className="linkedIn" >
                    <img alt="linkedInlogo" src={linkedIn} style={
                        { width: 80 }
                    }></img>
                </a>

                <a href="https://www.facebook.com/logan.dufek"

                    className="facebook" >
                    <img alt="linkedInlogo" src={facebook} style={
                        { width: 80 }
                    }></img>
                </a>

            </div>

            
        </footer>
    )
}

export default Footer;