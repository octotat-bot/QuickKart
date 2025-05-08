import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer 
      className="text-light py-3"
      style={{ 
        position: 'fixed', 
        bottom: 0, 
        width: '100%', 
        height: 'var(--footer-height)',
        zIndex: 1000,
        background: 'linear-gradient(90deg, rgba(15, 15, 19, 0.95), rgba(7, 7, 9, 0.95))',
        boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.15)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)'
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="d-flex align-items-center">
            <div 
              className="d-flex align-items-center" 
              style={{ position: 'relative' }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: 'var(--accent-color)',
                  borderRadius: '50%',
                  marginRight: '12px',
                  animation: 'pulse 2s infinite'
                }}
              />
              <p className="mb-0" style={{ 
                fontSize: '0.9rem', 
                opacity: 0.9,
                letterSpacing: '0.3px'
              }}>
                © {year} QuickKart - 10-Minute Delivery Analysis Platform
              </p>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div className="d-flex">
              <ul className="list-unstyled d-flex mb-0 footer-links">
                <li className="me-3">
                  <Link to="/" className="footer-link">Home</Link>
                </li>
                <li className="me-3">
                  <Link to="/research" className="footer-link">Research</Link>
                </li>
                <li className="me-3">
                  <Link to="/system-diagram" className="footer-link">System</Link>
                </li>
                <li className="me-3">
                  <Link to="/data-dashboard" className="footer-link">Data</Link>
                </li>
                <li>
                  <Link to="/analysis" className="footer-link">Analysis</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4} className="text-md-end">
            <p className="mb-0" style={{ 
              background: 'linear-gradient(45deg, var(--primary-color), var(--accent-color))', 
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
              fontSize: '0.9rem',
              letterSpacing: '0.5px',
              opacity: 0.95
            }}>
              QuickKart & Environmental Impact Analysis
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 