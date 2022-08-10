import React from 'react';

export default function About() {
    return (
        <div className="container">
            <img
                className="img" 
                src={require("../assets/muchfiner.jpeg")}
                alt="Eliza djing with some datamoshing photoshopped in"
            />
            <p>Hi! My name is Eliza Sohn, and this is my introduction. I'm currently a graduate student at Portland State University in Computer Science. I have a BFA in Intermedia, and I love playing soccer.</p>
        </div>
    )
};