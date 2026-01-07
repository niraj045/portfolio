import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero-background"></div>
            <div className="container">
                <div className="hero-content slide-up">
                    <h1 className="hero-title">Niraj Sonawane</h1>
                    <p className="hero-subtitle">Java Full Stack Developer</p>
                    <p className="hero-tagline">
                        Building robust backend services, REST APIs, and automation-ready systems
                    </p>

                    <div className="hero-contact">
                        <a href="tel:9322919716" className="contact-item">
                            <span className="icon">📞</span>
                            <span>9322919716</span>
                        </a>
                        <a href="mailto:infinityniraj@gmail.com" className="contact-item">
                            <span className="icon">✉️</span>
                            <span>infinityniraj@gmail.com</span>
                        </a>
                        <a href="https://github.com/niraj045" target="_blank" rel="noopener noreferrer" className="contact-item">
                            <span className="icon">🌐</span>
                            <span>github.com/niraj045</span>
                        </a>
                        <span className="contact-item">
                            <span className="icon">📍</span>
                            <span>Pune, Maharashtra, India</span>
                        </span>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">View My Work</a>
                        <a href="#contact" className="btn btn-secondary">Get In Touch</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
