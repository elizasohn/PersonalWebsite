import React from 'react';

export default function About() {
    return (
        <div className="container">
            <div className="about">
            <img
                className="img" 
                src={require("../assets/muchfiner.jpeg")}
                alt="Eliza djing with some datamoshing photoshopped in"
            />
            <p>Hi, I'm Eliza (she/her). I'm a creative, self-motivated programmer. I'm passionate about problem-solving and love making things. I currently work as a developer at The Good, and am a graduate student studying Computer Science at Portland State University. I have a background in Fine Arts with a BFA from Pacific Northwest College of Art. You can find me hosting the show Much Finer on Xray.fm where I play mostly vinyl, or playing soccer in my free time. </p>
            </div>
        </div>
    )
};