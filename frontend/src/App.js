import React from 'react';
import './App.css';
import ProjectList from './components/ProjectList';
import profilePhoto from './assets/rohan.jpeg'; // <-- Importing your photo

function App() {
  const mySkills = ["React.js", "Node.js", "Express.js", "MongoDB", "MySQL", "C++", "Python (AI/ML)"];
  const myQualifications = [
    { degree: "B.Tech in CSE (AIML Specialization)", institution: "Gandhi engineering College", year: "2024 - 2028" },
    { degree: "Class XII", institution: "Gayatri Residential college", year: "2022-2024" }
  ];

  return (
    <div className="App">
      {/* 1. Updated Header Section with Photo and Address */}
      <header className="portfolio-header">
        <img src={profilePhoto} alt="Rohan Rout" className="profile-img" />
        <div className="header-text">
          <h1>Rohan Kumar Rout</h1>
          <p className="subtitle">Full-Stack Developer | AIML Student</p>
          <p className="address-line">📍 Bhubaneswar, Odisha, India</p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container">
        
        {/* 2. New Contact Section */}
        <section className="info-section">
          <h2>Contact Info</h2>
          <div className="contact-grid">
            <p>📧 rohanrout648@gmail.com</p>
            <p>📞 +91-8249520013</p>
            <p>🔗 github.com/rohanrout</p>
            <p>🔗 linkedin.com/in/rohanrout</p>
          </div>
        </section>

        {/* About Me (From before) */}
        <section className="info-section">
          <h2>About Me</h2>
          <p>
            I am a results-oriented B.Tech Computer Science student specializing in AI and Machine Learning. 
            I am passionate about building full-stack applications using the MERN and MEAN stacks, 
            bridging the gap between robust backends and dynamic, user-friendly frontends.
          </p>
        </section>

        {/* 3. New Qualifications Section */}
        <section className="info-section">
          <h2>Qualifications</h2>
          <div className="qualification-list">
            {myQualifications.map((qual, index) => (
              <div key={index} className="qualification-item">
                <h4>{qual.degree}</h4>
                <p>{qual.institution} | {qual.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. New Skills Section */}
        <section className="info-section">
          <h2>Technical Skills</h2>
          <div className="skill-badges">
            {mySkills.map((skill, index) => (
              <span key={index} className="skill-badge">{skill}</span>
            ))}
          </div>
        </section>

        {/* Project List (Database Connection) */}
        <section className="info-section">
          <ProjectList />
        </section>

      </main>

      {/* Footer */}
      <footer>
        <p>© 2026 | Developed by Rohan Rout | Built with MERN Stack</p>
      </footer>
    </div>
  );
}

export default App;