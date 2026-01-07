import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <h2 className="section-title">Professional Experience</h2>
                <div className="experience-card glass-card slide-up">
                    <div className="experience-header">
                        <div>
                            <h3 className="company-name">AinoSoft Technologies Pvt. Ltd.</h3>
                            <h4 className="job-title">Java Full Stack Developer (Intern → Full-Time)</h4>
                        </div>
                        <div className="experience-meta">
                            <span className="location">📍 Pune, India</span>
                            <span className="duration">📅 May 2025 – Present</span>
                        </div>
                    </div>

                    <ul className="responsibilities">
                        <li>Developed and maintained Java backend services using modular architecture, dependency injection, and microservices patterns</li>
                        <li>Architected AI agent system using FastAPI and Python with RAG (Retrieval-Augmented Generation) pipeline integrating Qdrant vector database for semantic search across 500+ pages of API documentation</li>
                        <li>Implemented Model Context Protocol (MCP) for standardized LLM tool-calling interfaces, enabling zero-shot service deployments through natural language</li>
                        <li>Built multi-agent system with Finite State Machine (FSM) for autonomous DevOps workflow automation and conversational state management</li>
                        <li>Optimized prompt engineering using DSPy and integrated LangSmith for LLM observability and reasoning path tracing</li>
                        <li>Built and optimized REST APIs with MySQL and MongoDB for scalable data management</li>
                        <li>Implemented frontend integration using React.js and collaborated with frontend teams for seamless API consumption</li>
                        <li>Deployed services using Docker and Kubernetes and assisted with CI/CD pipelines (Jenkins)</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Experience;
