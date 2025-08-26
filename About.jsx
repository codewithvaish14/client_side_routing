import React from 'react';

function About() {
  return (
    <div style={{ 
      background: 'linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 50%, #a5d6a7 100%)',
      padding: '40px', 
      minHeight: '400px',
      color: 'black'
    }}>
      <h1>About Page</h1>
      <p>This is the About page. Learn more about our application here.</p>
      <div style={{ marginTop: '30px' }}>
        <h2>Our Mission</h2>
        <p>We are dedicated to creating amazing web applications using modern technologies like React and React Router DOM.</p>
        <p>Our goal is to provide seamless user experiences with fast, responsive, and intuitive interfaces.</p>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Technologies We Use</h3>
        <ul>
          <li>React.js for building user interfaces</li>
          <li>React Router DOM for client-side routing</li>
          <li>Vite for fast development and building</li>
          <li>Modern CSS for beautiful styling</li>
        </ul>
      </div>
      <div style={{ marginTop: '30px' }}>
        <h3>Why Choose Us?</h3>
        <p>We focus on clean code, best practices, and delivering high-quality applications that meet your needs.</p>
      </div>
    </div>
  );
}

export default About;
