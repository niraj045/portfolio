import React from 'react';
import '../styles/Achievements.css';

const achievementsData = [
    {
        icon: "🏆",
        title: "Internship Conversion",
        description: "Converted internship to full-time based on performance at AinoSoft Technologies"
    },
    {
        icon: "🥈",
        title: "Runner-Up, DYP University Hackathon",
        description: "Led team to secure second place in university-level hackathon with Farmer's Buddy project"
    },
    {
        icon: "💡",
        title: "Smart India Hackathon",
        description: "Participated in the prestigious Smart India Hackathon, showcasing innovative solutions"
    }
];

const Achievements = () => {
    return (
        <section id="achievements" className="section achievements">
            <div className="container">
                <h2 className="section-title">Achievements & Recognition</h2>
                <div className="achievements-grid">
                    {achievementsData.map((achievement, index) => (
                        <div key={index} className="achievement-card glass-card slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="achievement-icon">{achievement.icon}</div>
                            <h3 className="achievement-title">{achievement.title}</h3>
                            <p className="achievement-description">{achievement.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
