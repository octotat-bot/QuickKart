import { Row, Col, Card, Table, Badge } from 'react-bootstrap';

const Analysis = () => {
  return (
    <div className="page-container">
      <div className="content-section">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Analysis</h1>
            <p className="lead text-center mb-5">
              Environmental, Policy, and Social (EPS) Analysis of QuickKart
            </p>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="shadow mb-4">
              <Card.Header as="h2" className="bg-primary text-white">System Archetypes</Card.Header>
              <Card.Body>
                <p>
                  Our analysis of the quick commerce system reveals several classic system archetypes that help explain 
                  the dynamics at play and suggest potential intervention points:
                </p>

                <h5 className="mt-4">1. Tragedy of the Commons</h5>
                <p>
                  In this archetype, individual companies optimize for their own benefit (faster delivery times to attract 
                  customers) while collectively degrading shared resources (road infrastructure, air quality, labor pool health).
                </p>
                <ul>
                  <li><strong>Shared Resources:</strong> Urban road space, air quality, delivery workforce</li>
                  <li><strong>Individual Actions:</strong> Increasing delivery vehicle fleets, pushing for faster delivery times</li>
                  <li><strong>Degradation:</strong> Traffic congestion, pollution, worker burnout</li>
                </ul>

                <h5 className="mt-4">2. Success to the Successful</h5>
                <p>
                  As quick commerce platforms grow, they gain advantages through scale and data that make it harder for 
                  competitors to enter or for alternatives to compete, creating a winner-take-all dynamic.
                </p>
                <ul>
                  <li><strong>Initial Advantage:</strong> Early quick commerce adopters build customer loyalty</li>
                  <li><strong>Reinforcement:</strong> Data collection improves operations, scale reduces unit costs</li>
                  <li><strong>Result:</strong> Market consolidation, reduced competition</li>
                </ul>

                <h5 className="mt-4">3. Shifting the Burden</h5>
                <p>
                  Quick commerce offers a "quick fix" to consumer time pressure, but may inhibit more fundamental solutions 
                  to work-life balance and sustainable consumption habits.
                </p>
                <ul>
                  <li><strong>Symptom:</strong> Time pressure and poor planning for shopping needs</li>
                  <li><strong>Symptomatic Solution:</strong> 10-minute delivery to solve immediate needs</li>
                  <li><strong>Fundamental Solution:</strong> Better work-life balance, improved planning skills</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col>
            <Card className="shadow mb-4" style={{ overflow: 'visible' }}>
              <Card.Header as="h2" className="bg-primary text-white d-flex justify-content-between align-items-center">
                <span>Leverage Points</span>
                <Badge bg="info" style={{ fontSize: "0.9rem", padding: "0.5rem 0.8rem" }}>Key Interventions</Badge>
              </Card.Header>
              <Card.Body className="p-0">
                <div className="p-4 mb-2" style={{ backgroundColor: "rgba(240, 240, 240, 0.95)", borderBottom: "1px solid rgba(0, 0, 0, 0.1)" }}>
                  <p className="mb-0" style={{ color: "black", fontWeight: 500 }}>
                    Based on our systems analysis, we've identified the following leverage points where interventions could 
                    create significant changes in the quick commerce system:
                  </p>
                </div>

                <div className="leverage-table-container">
                  <Table className="leverage-table" bordered hover responsive>
                    <thead>
                      <tr>
                        <th style={{ width: "22%" }}>Leverage Point</th>
                        <th style={{ width: "28%" }}>Description</th>
                        <th style={{ width: "35%" }}>Potential Interventions</th>
                        <th style={{ width: "15%" }}>Effectiveness</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="leverage-point"><strong>Delivery Time Expectations</strong></td>
                        <td style={{ color: "black" }}>The promised delivery timeframe sets expectations and drives system pressure</td>
                        <td>
                          <ul className="mb-0">
                            <li style={{ color: "black" }}>Minimum delivery time regulations</li>
                            <li style={{ color: "black" }}>Transparent environmental impact information at point of purchase</li>
                          </ul>
                        </td>
                        <td className="text-center"><Badge bg="success" className="effectiveness-badge">High</Badge></td>
                      </tr>
                      <tr>
                        <td className="leverage-point"><strong>Dark Store Zoning</strong></td>
                        <td style={{ color: "black" }}>The location and density of fulfillment centers shapes delivery patterns</td>
                        <td>
                          <ul className="mb-0">
                            <li style={{ color: "black" }}>Urban planning requirements for dark store locations</li>
                            <li style={{ color: "black" }}>Shared multi-company distribution hubs</li>
                          </ul>
                        </td>
                        <td className="text-center"><Badge bg="success" className="effectiveness-badge">High</Badge></td>
                      </tr>
                      <tr>
                        <td className="leverage-point"><strong>Delivery Worker Conditions</strong></td>
                        <td style={{ color: "black" }}>Labor practices affect system sustainability and social impact</td>
                        <td>
                          <ul className="mb-0">
                            <li style={{ color: "black" }}>Delivery time minimum standards</li>
                            <li style={{ color: "black" }}>Transparent rating systems that include worker wellbeing</li>
                            <li style={{ color: "black" }}>Gig worker protections</li>
                          </ul>
                        </td>
                        <td className="text-center"><Badge bg="warning" className="effectiveness-badge">Medium</Badge></td>
                      </tr>
                      <tr>
                        <td className="leverage-point"><strong>Delivery Vehicle Regulations</strong></td>
                        <td style={{ color: "black" }}>Vehicle types used for delivery impact environmental footprint</td>
                        <td>
                          <ul className="mb-0">
                            <li style={{ color: "black" }}>Zero-emission delivery zones</li>
                            <li style={{ color: "black" }}>Subsidies for e-bike/cargo bike deliveries</li>
                          </ul>
                        </td>
                        <td className="text-center"><Badge bg="warning" className="effectiveness-badge">Medium</Badge></td>
                      </tr>
                      <tr>
                        <td className="leverage-point"><strong>Consumer Information</strong></td>
                        <td style={{ color: "black" }}>Transparency about impacts can influence consumer choice</td>
                        <td>
                          <ul className="mb-0">
                            <li style={{ color: "black" }}>Carbon footprint labeling on delivery options</li>
                            <li style={{ color: "black" }}>Worker condition transparency</li>
                          </ul>
                        </td>
                        <td className="text-center"><Badge bg="danger" className="effectiveness-badge">Low</Badge></td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <Card className="shadow">
              <Card.Header as="h2" className="bg-primary text-white">Policy Recommendations</Card.Header>
              <Card.Body>
                <p>
                  Our analysis suggests the following policy approaches to address the challenges posed by quick commerce 
                  while preserving its benefits:
                </p>

                <h5 className="mt-3">1. Urban Planning and Infrastructure</h5>
                <ul>
                  <li>
                    <strong>Dark Store Zoning:</strong> Establish specific zoning requirements and caps for quick commerce 
                    dark stores to prevent oversaturation in specific neighborhoods
                  </li>
                  <li>
                    <strong>Delivery Infrastructure:</strong> Develop dedicated infrastructure for sustainable delivery vehicles 
                    (e.g., cargo bike lanes, electric vehicle charging stations)
                  </li>
                  <li>
                    <strong>Consolidated Delivery Hubs:</strong> Incentivize multi-company delivery hubs to reduce redundant trips
                  </li>
                </ul>

                <h5 className="mt-3">2. Labor Protections</h5>
                <ul>
                  <li>
                    <strong>Delivery Time Standards:</strong> Establish minimum delivery time expectations to reduce unsafe 
                    practices and worker stress
                  </li>
                  <li>
                    <strong>Gig Worker Protections:</strong> Extend labor protections to platform-based delivery workers
                  </li>
                  <li>
                    <strong>Algorithmic Management Transparency:</strong> Require transparency in how workers are assigned 
                    and evaluated by delivery algorithms
                  </li>
                </ul>

                <h5 className="mt-3">3. Environmental Measures</h5>
                <ul>
                  <li>
                    <strong>Delivery Vehicle Regulations:</strong> Phase in zero-emission requirements for delivery vehicles
                  </li>
                  <li>
                    <strong>Packaging Standards:</strong> Implement requirements for sustainable packaging and consolidation 
                    of multiple purchases
                  </li>
                  <li>
                    <strong>Carbon Accounting:</strong> Require quick commerce operators to measure and report their 
                    carbon footprint with standardized methodology
                  </li>
                </ul>

                <h5 className="mt-3">4. Consumer Education</h5>
                <ul>
                  <li>
                    <strong>Impact Transparency:</strong> Require disclosure of environmental and social impacts at point of purchase
                  </li>
                  <li>
                    <strong>Alternative Promotion:</strong> Support public education about sustainable consumption patterns
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Analysis; 