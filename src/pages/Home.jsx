import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="page-container">
        {/* Hero section with gradient background and stars */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">QuickKart</h1>
            <p className="hero-subtitle">
              Analyzing the impact of 10-minute delivery services on consumer behavior, environmental 
              sustainability, and labor conditions through a systems thinking approach.
            </p>
            <div className="hero-buttons">
              <Link to="/data-dashboard" className="hero-btn explore-btn">
                Explore Data
              </Link>
              <Link to="/research" className="hero-btn learn-btn">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Feature cards section with updated design */}
        <div className="feature-section content-section">
          <div className="feature-cards grid-layout">
            {/* Feature card 1 - Research */}
            <div className="feature-card card-item">
              <div className="feature-icon card-icon">
                <div className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title card-title">Research & Problem Framing</h3>
              <p className="feature-description card-description">
                Comprehensive research on quick commerce and its multifaceted impacts on society, economy, and environment.
              </p>
              <Link to="/research" className="mt-auto">
                <button className="btn btn-outline-primary mt-3">Learn More</button>
              </Link>
            </div>

            {/* Feature card 2 - System Diagrams */}
            <div className="feature-card card-item">
              <div className="feature-icon card-icon">
                <div className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title card-title">Causal Loop Diagrams</h3>
              <p className="feature-description card-description">
                Interactive system diagrams showing relationships and feedback loops in the quick commerce ecosystem.
              </p>
              <Link to="/system-diagram" className="mt-auto">
                <button className="btn btn-outline-primary mt-3">View Diagrams</button>
              </Link>
            </div>

            {/* Feature card 3 - EPS Analysis */}
            <div className="feature-card card-item">
              <div className="feature-icon card-icon">
                <div className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title card-title">EPS Analysis</h3>
              <p className="feature-description card-description">
                Examining economic, political, and social dimensions of quick commerce and potential leverage points.
              </p>
              <Link to="/analysis" className="mt-auto">
                <button className="btn btn-outline-primary mt-3">Explore Analysis</button>
              </Link>
            </div>

            {/* Feature card 4 - Data Dashboard */}
            <div className="feature-card card-item">
              <div className="feature-icon card-icon">
                <div className="icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                  </svg>
                </div>
              </div>
              <h3 className="feature-title card-title">Real-time Data</h3>
              <p className="feature-description card-description">
                Live data integration via APIs to monitor key variables in the quick commerce industry.
              </p>
              <Link to="/data-dashboard" className="mt-auto">
                <button className="btn btn-outline-primary mt-3">View Dashboard</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 