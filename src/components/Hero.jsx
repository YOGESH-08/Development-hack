import React from 'react';
import { FaLinkedin, FaUniversity, FaRobot } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            The All-in-One Platform for <span className="highlight">College Students</span>
          </h1>
          <p className="hero-subtitle">
            Combining the best of LinkedIn, Unstop, and AI-powered exam preparation into one centralized hub for college applications, opportunities, and academic success.
          </p>
          <div className="hero-buttons">
            <a href="#signup" className="btn btn-primary">Start Free Trial</a>
            <a href="#demo" className="btn btn-secondary">Watch Demo</a>
          </div>
          <div className="hero-features">
            <div className="feature-item">
              <FaLinkedin className="feature-icon" />
              <span>LinkedIn-style Networking</span>
            </div>
            <div className="feature-item">
              <FaUniversity className="feature-icon" />
              <span>College Applications</span>
            </div>
            <div className="feature-item">
              <FaRobot className="feature-icon" />
              <span>AI Question Generator</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="dashboard-preview">
            <div className="dashboard-card card-1">
              <h4>College Applications</h4>
              <p>Track all your applications in one place</p>
            </div>
            <div className="dashboard-card card-2">
              <h4>AI Question Generator</h4>
              <p>Custom practice papers in seconds</p>
            </div>
            <div className="dashboard-card card-3">
              <h4>Student Network</h4>
              <p>Connect with peers and alumni</p>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .hero {
          padding-top: 140px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, #f5f7ff 0%, #e3e9ff 100%);
        }
        
        .container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
        }
        
        .hero-content {
          flex: 1;
          min-width: 300px;
          padding-right: 40px;
        }
        
        .hero-title {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
          color: var(--dark-color);
        }
        
        .highlight {
          color: var(--primary-color);
        }
        
        .hero-subtitle {
          font-size: 1.2rem;
          color: var(--gray-color);
          margin-bottom: 30px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
        }
        
        .hero-features {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .feature-item {
          display: flex;
          align-items: center;
          gap: 10px;
          background: white;
          padding: 10px 15px;
          border-radius: 50px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        
        .feature-icon {
          color: var(--primary-color);
        }
        
        .hero-image {
          flex: 1;
          min-width: 300px;
        }
        
        .dashboard-preview {
          position: relative;
          height: 400px;
        }
        
        .dashboard-card {
          position: absolute;
          width: 280px;
          padding: 20px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .card-1 {
          background: linear-gradient(135deg, #4361ee, #3a0ca3);
          color: white;
          top: 0;
          left: 0;
          z-index: 3;
        }
        
        .card-2 {
          background: white;
          top: 30px;
          left: 50px;
          z-index: 2;
          transform: rotate(-5deg);
        }
        
        .card-3 {
          background: linear-gradient(135deg, #4cc9f0, #4361ee);
          color: white;
          top: 60px;
          left: 100px;
          z-index: 1;
          transform: rotate(5deg);
        }
        
        @media (max-width: 768px) {
          .hero {
            padding-top: 120px;
          }
          
          .hero-title {
            font-size: 2.2rem;
          }
          
          .hero-content {
            padding-right: 0;
            margin-bottom: 50px;
          }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .dashboard-preview {
            height: 300px;
          }
          
          .dashboard-card {
            width: 220px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;