import React from 'react';
import '../styles/Projects.css';

const projectsData = [
    {
        id: 1,
        title: "AI-Powered No-Code Test Automation Platform",
        type: "Production-Grade Automation Platform",
        description: "An AI-driven no-code test automation platform that allows users to test any website by simply providing its URL. The system automatically understands the website structure, generates Selenium test cases, executes them, and produces detailed test reports — without requiring users to write a single line of code.",
        highlights: [
            "No-Code Selenium Automation – Just enter a website URL",
            "AI-Generated Test Cases – Automatic detection of user flows (login, forms, navigation)",
            "Smart Selector Healing – Automatically fixes broken locators when UI changes",
            "End-to-End Test Execution – Browser handling, execution, and result tracking",
            "Auto-Generated Documentation – Test plans, test cases, and execution reports with screenshots",
            "System Architecture: Python (AI Brain) analyzes DOM and generates tests, Java (Executor) orchestrates Selenium execution"
        ],
        technologies: ["Java", "Spring Boot", "React.js", "Python", "Selenium WebDriver", "PostgreSQL", "MinIO/S3"]
    },
    {
        id: 2,
        title: "ChatWave – Real-Time Chat Application",
        type: "Full Stack Project",
        description: "Developed a real-time chat application using Java, MongoDB, and WebSockets with JWT-based authentication and Docker containerization.",
        highlights: [
            "Real-time messaging using WebSockets",
            "JWT-based authentication for secure access",
            "MongoDB for message persistence",
            "Containerized the application using Docker"
        ],
        technologies: ["Java", "MongoDB", "WebSockets", "JWT", "Docker"]
    },
    {
        id: 3,
        title: "Farmer's Buddy – Smart Agriculture Web App",
        type: "Team Project (University Hackathon - Runner-Up)",
        description: "Built backend APIs for a smart agriculture web application using Java and MySQL. Led a 6-member team to secure runner-up position at university-level hackathon.",
        highlights: [
            "Backend API development using Java and MySQL",
            "Led a 6-member development team",
            "Runner-Up at DYP University Hackathon",
            "Smart agriculture monitoring and analytics features"
        ],
        technologies: ["Java", "MySQL", "REST APIs", "Spring"]
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={project.id} className="project-card glass-card slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                            <div className="project-header">
                                <h3 className="project-title">{project.title}</h3>
                                <span className="project-type">{project.type}</span>
                            </div>

                            <p className="project-description">{project.description}</p>

                            <div className="project-highlights">
                                <h4 className="highlights-title">Key Features:</h4>
                                <ul className="highlights-list">
                                    {project.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="project-technologies">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
