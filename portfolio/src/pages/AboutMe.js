import React from 'react';
import profilePic from "../assets/images/RecentPhoto.jpg"
import profilePic2 from "../assets/images/RecentPhoto2.jpg"

const AboutMe = () => {

    return (
        <div className='aboutMe'>
            <div className='aboutTitle'>
                <h3>About Me</h3>

            </div>

            <div className="aboutDes">

                My name is Logan Dufek. I am a graduate of Case Western Reserve University with a degree in Nutritional Biochemistry. Currently I am working towards completing CWRU's Web Development Boot Camp. I am also a self-taught video editor, and all around creative individual. I look forward to applying those creative skill sets to my coding knowledge.

                <br></br>

                <div className="pics">
                    <img src={profilePic}
                        style={
                            {width: 350}
                        }
                        className="profile"></img>

                    <img src={profilePic2}
                        style={
                            {width: 350}
                        }
                        className="profile"></img>

                </div>


                I am a dedicated hard-working individual with a strong work ethic and attention to detail. My current skill sets include knowledge of the following programming languages and concepts: HTML, CSS, Javascript, Node.js, Express.js, React, MongoDB/Mongoose, GraphQL, SQL, and Sequalize. For examples of my coding work, you can click on the Portfolio tab in the header!


            </div>


        </div>
    )


}

export default AboutMe;
