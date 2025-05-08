import { Row, Col, Card, Accordion } from 'react-bootstrap';

const Research = () => {
  return (
    <div className="page-container">
      <div className="content-section">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Research and Problem Framing</h1>
            <p className="lead text-center mb-5">
              Examining the complex impacts of quick commerce on society, environment and labor
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="shadow mb-4">
              <Card.Header as="h2" className="bg-primary text-white">Problem Framing</Card.Header>
              <Card.Body style={{ color: 'white' }}>
                <p>
                  The quick commerce model, with its promise of delivering products in as little as 10 minutes, 
                  is transforming consumer behavior and creating new market dynamics. However, this model also 
                  raises important questions about environmental sustainability, labor conditions, and long-term 
                  societal impacts.
                </p>
                <p>
                  Our research frames these issues through a systems thinking approach, examining the complex 
                  interrelationships between consumer expectations, business models, environmental impacts, 
                  and social consequences.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <h2 className="mb-4">Key Research Areas</h2>
            
            <Accordion className="mb-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Consumer Behavior Changes</Accordion.Header>
                <Accordion.Body>
                  <h5>Immediate Gratification and Impulse Purchasing</h5>
                  <p>
                    Research indicates that quick commerce availability leads to a 37% increase in unplanned 
                    purchases. The "need it now" mentality is reinforced by instant delivery, creating a 
                    psychological feedback loop that can alter long-term consumer habits.
                  </p>
                  <h5>Reduced Purchase Planning</h5>
                  <p>
                    Studies show that customers using quick commerce apps tend to make smaller, more frequent 
                    purchases rather than planned weekly shopping. This shift has implications for consumption 
                    patterns, food waste, and household budgeting.
                  </p>
                  <h5>Heightened Expectations</h5>
                  <p>
                    As consumers become accustomed to near-instant delivery, their tolerance for waiting decreases. 
                    This creates pressure on all commerce to accelerate, potentially at the expense of sustainability 
                    and worker conditions.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="1">
                <Accordion.Header>Environmental Impacts</Accordion.Header>
                <Accordion.Body>
                  <h5>Increased Carbon Emissions</h5>
                  <p>
                    Quick commerce requires distributed dark stores and frequent, rapid deliveries, often 
                    in urban areas. Research suggests this model produces 2.4x more carbon emissions per item 
                    delivered compared to traditional e-commerce fulfillment models.
                  </p>
                  <h5>Traffic Congestion</h5>
                  <p>
                    In dense urban areas, the proliferation of delivery vehicles contributes to worsening traffic 
                    congestion, particularly when deliveries are made during peak hours to meet quick delivery promises.
                  </p>
                  <h5>Packaging Waste</h5>
                  <p>
                    Smaller, more frequent orders tend to use more packaging per item than consolidated orders, 
                    leading to increased packaging waste.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              <Accordion.Item eventKey="2">
                <Accordion.Header>Labor and Working Conditions</Accordion.Header>
                <Accordion.Body>
                  <h5>Delivery Worker Stress</h5>
                  <p>
                    The pressure to meet ultra-fast delivery timeframes creates significant stress for 
                    delivery workers. Studies have documented increased rates of traffic violations, safety 
                    incidents, and burnout among quick delivery workers compared to standard delivery services.
                  </p>
                  <h5>Algorithmic Management</h5>
                  <p>
                    Quick commerce relies heavily on algorithmic management of workers, creating concerns about 
                    diminished worker autonomy, intense performance monitoring, and the psychological effects of being 
                    "managed by algorithm."
                  </p>
                  <h5>Gig Economy Issues</h5>
                  <p>
                    Many quick commerce models rely on gig workers without benefits, job security, or consistent income. 
                    This raises questions about the sustainability of the employment model and its broader economic impacts.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow">
              <Card.Header as="h2" className="bg-primary text-white">Research Methodology</Card.Header>
              <Card.Body>
                <p>
                  Our research combines multiple methods to provide a comprehensive view of quick commerce impacts:
                </p>
                <ul>
                  <li><strong>Data Analysis:</strong> Examining consumer purchase patterns before and after quick commerce adoption</li>
                  <li><strong>Environmental Modeling:</strong> Calculating carbon footprints of different delivery models</li>
                  <li><strong>Worker Surveys:</strong> Gathering insights from delivery workers across platforms</li>
                  <li><strong>Systems Mapping:</strong> Identifying feedback loops and system dynamics</li>
                  <li><strong>Policy Analysis:</strong> Evaluating current regulatory frameworks and potential interventions</li>
                </ul>
                <p>
                  This multi-faceted approach allows us to understand quick commerce not as an isolated phenomenon, 
                  but as part of a complex socio-technical system with far-reaching implications.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Research; 