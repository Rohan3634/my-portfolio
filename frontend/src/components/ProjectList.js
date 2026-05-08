import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // This fetches from your Node.js server
        axios.get('http://localhost:5000/projects')
            .then(res => setProjects(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <section style={{ padding: '20px' }}>
            <h2>My Projects</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                {projects.map(project => (
                    <div key={project._id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noreferrer">View Code</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectList;