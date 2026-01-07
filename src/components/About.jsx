import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="section about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content glass-card slide-up">
                    <p className="about-text">
                        Java Full Stack Developer currently employed at AinoSoft Technologies with <strong>9+ months of professional experience</strong> building
                        backend services, REST APIs, and AI-driven automation systems. Specializing in Java, microservices,
                        AI/ML engineering, and DevOps practices.
                    </p>
                    <p className="about-text">
                        Proficient in working across the full technology stack—from backend architecture and AI service integration
                        to frontend development and deployment automation. Focused on building scalable, production-ready solutions
                        with clean code and modern engineering practices.
                    </p>
                    <div className="about-highlights">
                        <div className="highlight-item">
                            <span className="highlight-icon">⚡</span>
                            <span className="highlight-text">Backend Services & REST APIs</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">🧪</span>
                            <span className="highlight-text">AI/ML Engineering</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">🚀</span>
                            <span className="highlight-text">DevOps & Deployment</span>
                        </div>
                        <div className="highlight-item">
                            <span className="highlight-icon">🔧</span>
                            <span className="highlight-text">Microservices Architecture</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
