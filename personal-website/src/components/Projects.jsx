function Projects() {
    return (
        <div className="container">
            <div className='project-container'>
                <div className='project'>
                    <div className='project-description'>
                        <h2><a href='https://github.com/elizasohn/exquisite-corpse'>Exquisite Corpse</a></h2>
                        <p>Exquisite Corpse is a three person drawing game based off the original Surrealist game played on paper. Participants play by taking turns drawing sections of a body, and each individual's contribution is hidden to the other participants.  Exquisite Corpse is meant to be played with three players, or two players alternating turns. Players are meant to avoid looking at other players' drawings until the end of the game. The first player draws a head, then the second player adds a torso without seeing the head, then the third player draws the legs and feet without seeing the head or torso. Andre Breton believed that one way of unlocking psychic space is through games. It can be used as a means to probe the nature of collaboration, partnership, and unfettered creativity.</p>
                        <p>The technologies used were HTML, CSS, Javascript, React, and Redux.</p>
                    </div>
                    <div className='project-img'>
                        <img
                            className="img" 
                            src={require("../assets/exquisitecorpse1.png")}
                            alt="example from exquisite corpse app"
                        />
                        <img
                            className="img" 
                            src={require("../assets/exquisitecorpse2.png")}
                            alt="example from exquisite corpse app"
                        />
                    </div>
                </div>
                <div className='project'>
                    <div className='project-description'>
                        <h2><a href='https://github.com/elizasohn/fresh-synth'>Fresh Synth of Bel Air</a></h2>
                        <p> This is a simple subtractive synthesizer created for Bart Massey's CS-510 Music, Sound and Computers course at PSU in Spring 2022. It features  Midi controller support, Standalone and VST3 support, 1x Monophonic Selectable Oscillator (sine, saw, square), 1x VCA ADSR envelope controller, 1x Filter ADSR envelope controller, 1x Switchable Ladder filter with cutoff and resonance controls, (Filters include Lowpass, Highpass, and Bandpass each with 12 or 24db slopes), and 1x Gain control.</p>
                        <p>The technologies used were C++ and JUCE</p>
                    </div>
                    <div className='project-img'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/mgoawzzeguM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Projects;
