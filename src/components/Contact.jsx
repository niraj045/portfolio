import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <footer id="contact" className="contact">
            <div className="container">
                <div className="contact-content">
                    <h2 className="contact-title">Let's Connect</h2>
                    <p className="contact-description">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>

                    <div className="contact-links">
                        <a href="mailto:infinityniraj@gmail.com" className="contact-link">
                            <span className="contact-icon">✉️</span>
                            <span>infinityniraj@gmail.com</span>
                        </a>
                        <a href="tel:9322919716" className="contact-link">
                            <span className="contact-icon">📞</span>
                            <span>+91 9322919716</span>
                        </a>
                        <a href="https://github.com/niraj045" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <span className="contact-icon">🌐</span>
                            <span>github.com/niraj045</span>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Niraj Sonawane. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
