import React from 'react';
import '../styles/Skills.css';

const skillsData = {
    "Backend & Frameworks": ["Java", "Python", "Spring Core Concepts", "Microservices", "Hibernate", "REST APIs", "FastAPI", "Shell"],
    "Frontend": ["HTML", "CSS", "JavaScript", "React.js", "TypeScript"],
    "AI & ML Engineering": ["RAG (Retrieval-Augmented Generation)", "Vector Databases (Qdrant, ChromaDB)", "MCP (Model Context Protocol)", "Multi-Agent Systems", "LLM Integration", "Semantic Search"],
    "Automation & Testing": ["Selenium WebDriver", "JUnit", "Mockito"],
    "Databases": ["MySQL", "MongoDB"],
    "DevOps & Tools": ["Docker", "Kubernetes", "Jenkins", "Git", "Linux", "Nginx", "Jetty"],
    "IDE & Utilities": ["IntelliJ IDEA", "VS Code", "Eclipse", "Postman"]
};

const Skills = () => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2 className="section-title">Technical Skills</h2>
                <div className="skills-grid">
                    {Object.entries(skillsData).map(([category, skills], index) => (
                        <div key={category} className="skill-category glass-card slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <h3 className="category-title">{category}</h3>
                            <div className="skills-list">
                                {skills.map((skill) => (
                                    <span key={skill} className="tag skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
