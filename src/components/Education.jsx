import React from 'react';
import '../styles/Education.css';

const Education = () => {
    return (
        <section id="education" className="section education">
            <div className="container">
                <h2 className="section-title">Education</h2>
                <div className="education-card glass-card slide-up">
                    <div className="education-header">
                        <h3 className="degree">B.Tech in Information Technology</h3>
                    </div>
                    <h4 className="university">D.Y. Patil University, Ambi, Pune</h4>
                    <p className="graduation">Expected Graduation: 2027</p>
                </div>
            </div>
        </section>
    );
};

export default Education;
