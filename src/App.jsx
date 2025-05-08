import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Pages
import Home from './pages/Home';
import Research from './pages/Research';
import SystemDiagram from './pages/SystemDiagram';
import DataDashboard from './pages/DataDashboard';
import Analysis from './pages/Analysis';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (you would typically load resources here)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Show loading screen for 2.5 seconds
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner text="QuickKart" />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research" element={<Research />} />
            <Route path="/system-diagram" element={<SystemDiagram />} />
            <Route path="/data-dashboard" element={<DataDashboard />} />
            <Route path="/analysis" element={<Analysis />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
