import React from 'react';

export default function About() {
    return (
        <div className="container">
            <h1 className='greeting'>Hi, I'm Eliza</h1>
            <div className="about">
                <div className="portrait">
                    <img
                        className="img" 
                        src={require("../assets/muchfiner.jpeg")}
                        alt="Eliza djing with some datamoshing photoshopped in"
                    />
                </div>
                <div className='description'>
                    <p>I'm a creative, self-motivated programmer. I'm passionate about problem-solving and love making things.</p>
                    <p>I currently work as a developer at The Good, and am a graduate student studying Computer Science at Portland State University. </p>
                    <p>I have a background in Fine Arts with a BFA from Pacific Northwest College of Art. </p>
                    <p>You can find me hosting the show <a href='https://xray.fm/shows/much-finer'>Much Finer on Xray.fm </a>where I play mostly vinyl, or playing soccer in my free time. </p>
                </div>
            </div>
        </div>
    )
};