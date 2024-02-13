
import React from 'react'

const freeCodeCampCertification = () => {

  return (
    <div>


    <nav id="navbar">
        <ul>
            <li><a href="#welcome-section">About</a></li>
            <li><a href="#projects">Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
        <section id="welcome-section">
            <h1>Hi, I´m Mario Moya</h1>
            <p>Web developer</p>
        </section>
        <section id="projects">
            <h2>Here some of my projects</h2>
            <div className="projects-grid">
                <a href="https://codepen.io/SSMoya/pen/OJgprRy" className="project-tile" target="_blank">
                    <img src="https://drive.google.com/uc?export=view&id=1P4byZ6BICTP8JOKcbZ6tZjmnnRVS0WuC" alt="Tribute page" className="project-img" />
                    <p className="project-name"><span>&lt;</span>Tribute Page<span>/&lt;</span></p>
                </a>
                <a href="https://codepen.io/SSMoya/pen/OJgxZoq" className="project-tile" target="_blank">
                    <img src="https://drive.google.com/uc?export=view&id=1kn4VaOXpikfD-F2aWcjY6c1gjkVF-mCW" alt="Form page" className="project-img" />
                    <p className="project-name"><span>&lt;</span>Form page<span>/&lt;</span></p>
                </a>
                <a href="https://codepen.io/SSMoya/pen/rNwYqGz" className="project-tile" target="_blank">
                    <img src="https://drive.google.com/uc?export=view&id=1lk4Ty4KpDsIplAKXdiOlvLXX2ITI1x7P" alt="Landing Page" className="project-img" />
                    <p className="project-name"><span>&lt;</span>Landing Page<span>/&lt;</span></p>
                </a>
                <a href="https://codepen.io/SSMoya/pen/rNwpboa" className="project-tile" target="_blank">
                    <img src="https://drive.google.com/uc?export=view&id=1PstIXw0ZchR6NoDZFeJ8YZVqY2p7_XQe" alt="Technical Documentation Page" className="project-img" />
                    <p className="project-name"><span>&lt;</span>Technical Documentation Page<span>/&lt;</span></p>
                </a>
            </div>
        </section>
        <section id="contact">
            <div>
                <h2>Let´s work together...</h2>
            </div>
            <div className="contact-container">
                <a href="mailto:seshomario.01@gmail.com" target="_blank" className="contact-btn">
                    <i className="fas fa-at"></i>
                    Send a mail
                </a>
                <a href="tel:528125221092" target="_blank" className="contact-btn">
                    <i className="fas fa-mobile-alt"></i>
                    Contact me
                </a>
                <a href="https://github.com/SSMoya" target="_blank" id="profile-link" className="contact-btn">
                    <i className="fab fa-github-square"></i>
                    GitHub
                </a>
            </div>
        </section>

    </div>
  )
}

export default freeCodeCampCertification