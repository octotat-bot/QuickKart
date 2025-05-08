import { useState, useEffect } from 'react';
import { Row, Col, Card, Button, Spinner, Image } from 'react-bootstrap';
import SystemDiagramCanvas from '../components/SystemDiagramCanvas';
import LoadingSpinner from '../components/LoadingSpinner';
import ApiService from '../utils/ApiService';

const SystemDiagram = () => {
  const [systemData, setSystemData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedLoop, setSelectedLoop] = useState(null);
  const [useStaticImage, setUseStaticImage] = useState(true); // Default to static image for better UX

  // Feedback loops in the system
  const feedbackLoops = [
    {
      id: 1,
      name: "Reinforcing: Quick Delivery Expectation",
      description: "As quick delivery becomes more available, consumer expectations for speed increase, creating market pressure for even faster delivery times.",
      nodes: ['1', '2', '7']
    },
    {
      id: 2,
      name: "Balancing: Driver Stress Impact",
      description: "As delivery speed pressure increases, driver stress rises, potentially leading to burnout and turnover that slows delivery times.",
      nodes: ['1', '4', '5']
    },
    {
      id: 3,
      name: "Reinforcing: Environmental Impact",
      description: "Faster deliveries lead to more vehicles on the road, increasing traffic and emissions, which further impact delivery efficiency.",
      nodes: ['1', '4', '6']
    }
  ];

  useEffect(() => {
    const fetchSystemData = async () => {
      try {
        setLoading(true);
        const response = await ApiService.getSystemDiagramData();
        setSystemData(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load system diagram data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchSystemData();
  }, []);

  const highlightLoop = (loopId) => {
    const loop = feedbackLoops.find(loop => loop.id === loopId);
    setSelectedLoop(loop);
    setUseStaticImage(false); // Switch to interactive diagram when highlighting loops
  };

  const resetHighlight = () => {
    setSelectedLoop(null);
  };

  const toggleStaticImage = () => {
    setUseStaticImage(!useStaticImage);
    if (useStaticImage) {
      setSelectedLoop(null); // Clear selection when switching to interactive mode
    }
  };

  // If selected loop exists, filter nodes/links to only show that loop
  const getFilteredData = () => {
    if (!selectedLoop || !systemData) return systemData;
    
    const filteredNodes = systemData.nodes.filter(node => 
      selectedLoop.nodes.includes(node.id)
    );
    
    const filteredLinks = systemData.links.filter(link => 
      selectedLoop.nodes.includes(link.source) && selectedLoop.nodes.includes(link.target)
    );
    
    return {
      nodes: filteredNodes,
      links: filteredLinks
    };
  };

  return (
    <div className="page-container">
      <div className="content-section">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center">System Diagram</h1>
            <p className="lead text-center mb-5">
              Causal Loop Diagram (CLD) visualization of the QuickKart ecosystem
            </p>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col>
            <Card className="shadow">
              <Card.Header as="h2" className="bg-primary text-white d-flex justify-content-between align-items-center">
                <span>Causal Loop Diagram</span>
                <Button 
                  variant="outline-light" 
                  size="sm" 
                  onClick={toggleStaticImage}
                  className="toggle-diagram-btn"
                >
                  {useStaticImage ? 'Switch to Interactive' : 'Switch to Static'}
                </Button>
              </Card.Header>
              <Card.Body>
                {loading ? (
                  <div className="diagram-loading-container">
                    <div className="loading-spinner">
                      <div className="spinner-arc"></div>
                    </div>
                    <p className="mt-3 loading-text">Loading diagram...</p>
                  </div>
                ) : error ? (
                  <div className="alert alert-danger">{error}</div>
                ) : (
                  <div>
                    <div className="diagram-description mb-4">
                      <p>
                        This Causal Loop Diagram (CLD) visualizes the key relationships in the QuickKart 10-minute delivery 
                        system. Arrows indicate causal relationships, with <span className="positive-relationship">green arrows</span> representing 
                        positive relationships (variables change in the same direction) and <span className="negative-relationship">red arrows</span> representing 
                        negative relationships (variables change in opposite directions).
                      </p>
                      
                      {!useStaticImage && (
                        <div className="feedback-loop-buttons">
                          <Button 
                            variant="outline-primary" 
                            className="me-2 mb-2"
                            onClick={resetHighlight}
                          >
                            Show Full Diagram
                          </Button>
                          {feedbackLoops.map(loop => (
                            <Button 
                              key={loop.id}
                              variant={selectedLoop?.id === loop.id ? "primary" : "outline-primary"}
                              className="me-2 mb-2"
                              onClick={() => highlightLoop(loop.id)}
                            >
                              {loop.name}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {useStaticImage ? (
                      <div className="diagram-container text-center">
                        <Image 
                          src="/cld-diagram.png" 
                          alt="QuickKart CLD Diagram" 
                          fluid 
                          className="static-diagram" 
                          style={{ 
                            maxHeight: '600px', 
                            borderRadius: 'var(--border-radius)', 
                            animation: 'fadeIn 0.5s ease-out',
                            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)'
                          }}
                        />
                      </div>
                    ) : (
                      <div className="interactive-diagram-container">
                        <SystemDiagramCanvas 
                          nodes={getFilteredData()?.nodes || []} 
                          links={getFilteredData()?.links || []}
                          width={800}
                          height={600}
                        />
                      </div>
                    )}
                    
                    {selectedLoop && !useStaticImage && (
                      <div className="selected-loop-info">
                        <h4>{selectedLoop.name}</h4>
                        <p>{selectedLoop.description}</p>
                      </div>
                    )}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow">
              <Card.Header as="h2" className="bg-primary text-white">How to Read the Diagram</Card.Header>
              <Card.Body>
                <Row>
                  <Col md={6}>
                    <h5 className="mb-3">System Elements:</h5>
                    <ul className="diagram-legend">
                      <li><span className="legend-circle driver"></span> <strong>Drivers:</strong> Variables that primarily influence other variables in the system</li>
                      <li><span className="legend-circle variable"></span> <strong>Variables:</strong> Intermediate factors that both influence and are influenced by other elements</li>
                      <li><span className="legend-circle outcome"></span> <strong>Outcomes:</strong> Results or impacts that are primarily influenced by other variables</li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <h5 className="mb-3">Connection Types:</h5>
                    <ul className="diagram-legend">
                      <li><span className="legend-arrow positive"></span> <strong>Positive Link:</strong> When one variable increases, the connected variable also increases</li>
                      <li><span className="legend-arrow negative"></span> <strong>Negative Link:</strong> When one variable increases, the connected variable decreases</li>
                      <li><span className="legend-loop reinforcing"></span> <strong>Reinforcing Loop:</strong> Creates growth or decline in the system (snowball effect)</li>
                      <li><span className="legend-loop balancing"></span> <strong>Balancing Loop:</strong> Creates stability or resistance to change in the system</li>
                    </ul>
                  </Col>
                </Row>
                
                <div className="mt-4">
                  <h5>Key Findings from the CLD Analysis:</h5>
                  <p>
                    The diagram reveals several important dynamics in the QuickKart 10-minute delivery system:
                  </p>
                  <ul>
                    <li>
                      <strong>Delivery Time Pressure Loop:</strong> Consumer expectations for speed create market pressure for faster 
                      deliveries, which in turn normalize even faster expectations.
                    </li>
                    <li>
                      <strong>Worker Impact Loop:</strong> Increased speed requirements lead to more stress on delivery workers, 
                      affecting their wellbeing and potentially reducing delivery efficiency.
                    </li>
                    <li>
                      <strong>Environmental Feedback Loop:</strong> More delivery vehicles increase congestion and emissions, 
                      which eventually impact delivery efficiency and urban livability.
                    </li>
                  </ul>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SystemDiagram; 