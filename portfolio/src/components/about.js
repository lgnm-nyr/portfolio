import React from 'react';
import "../styles/about_me.css"


const About = () => {
    return (
        <section className="about-me">
            <div className="about-me-content">
                <div className="about-me-text">
                    <h2>About Me</h2>
                    <p>
                        Hi, I'm [Your Name], a [Your Profession] with a passion for [Your Passion/Interests].
                        I have been working in the industry for [X] years and love to explore new technologies,
                        solve problems, and learn new things every day.
                    </p>
                    <p>
                        In my free time, I enjoy [Hobbies/Interests], and I'm always looking for opportunities
                        to grow both personally and professionally.
                    </p>
                </div>
                <div className="about-me-photo">
                    <img src="[path-to-your-photo.jpg]" alt="Your Name" />
                </div>
            </div>
        </section>
    );
};

export default About;