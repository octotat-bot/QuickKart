import { useState, useEffect } from 'react';
import { Row, Col, Card, Form } from 'react-bootstrap';
import LineChart from '../components/LineChart';
import LoadingSpinner from '../components/LoadingSpinner';
import ApiService from '../utils/ApiService';

const DataDashboard = () => {
  const [deliveryData, setDeliveryData] = useState([]);
  const [laborData, setLaborData] = useState([]);
  const [consumerData, setConsumerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeframe, setTimeframe] = useState('6months');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // In a real application, we would pass the timeframe parameter to the API
        const [deliveryResponse, laborResponse, consumerResponse] = await Promise.all([
          ApiService.getDeliveryMetrics({ timeframe }),
          ApiService.getLaborMetrics(),
          ApiService.getConsumerMetrics()
        ]);
        
        setDeliveryData(deliveryResponse.data);
        setLaborData(laborResponse.data);
        setConsumerData(consumerResponse.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load dashboard data');
        setLoading(false);
        console.error(err);
      }
    };

    fetchData();
  }, [timeframe]);

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  return (
    <div className="page-container">
      <div className="content-section">
        <Row className="mb-5">
          <Col>
            <h1 className="text-center">Data Dashboard</h1>
            <p className="lead text-center mb-4">
              Real-time metrics on quick commerce impacts
            </p>
            <div className="d-flex justify-content-end mb-4">
              <Form.Group controlId="timeframeSelect" style={{ width: '200px' }}>
                <Form.Label style={{ color: 'white', fontWeight: '500' }}>Timeframe:</Form.Label>
                <Form.Select 
                  value={timeframe} 
                  onChange={handleTimeframeChange}
                  aria-label="Select timeframe"
                  style={{ 
                    backgroundColor: 'rgba(24, 24, 29, 0.8)',
                    color: 'white',
                    borderColor: 'rgba(255, 255, 255, 0.2)',
                    padding: '8px 12px'
                  }}
                >
                  <option value="1month">Last Month</option>
                  <option value="3months">Last 3 Months</option>
                  <option value="6months">Last 6 Months</option>
                  <option value="1year">Last Year</option>
                </Form.Select>
              </Form.Group>
            </div>
          </Col>
        </Row>

        {loading ? (
          <div style={{ height: '400px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div className="loading-spinner">
              <div className="spinner-arc"></div>
            </div>
            <p className="mt-3 loading-text" style={{ fontSize: '1.2rem' }}>Loading data...</p>
          </div>
        ) : error ? (
          <Row>
            <Col>
              <div className="alert alert-danger">{error}</div>
            </Col>
          </Row>
        ) : (
          <>
            <Row className="mb-4">
              <Col>
                <Card className="shadow">
                  <Card.Header as="h2" className="bg-primary text-white">Delivery Metrics</Card.Header>
                  <Card.Body>
                    <LineChart 
                      data={deliveryData}
                      title="Delivery Performance Over Time"
                      xDataKey="month"
                      lines={[
                        { dataKey: 'avgDeliveryTime', color: '#4e54c8', name: 'Avg. Delivery Time (min)' },
                        { dataKey: 'ordersPerDay', color: '#4CAF50', name: 'Orders Per Day' },
                        { dataKey: 'carbonFootprint', color: '#F44336', name: 'Carbon Footprint (kg CO2)' }
                      ]}
                      height={300}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row className="mb-4">
              <Col md={6}>
                <Card className="shadow h-100">
                  <Card.Header as="h2" className="bg-primary text-white">Labor Conditions</Card.Header>
                  <Card.Body>
                    <LineChart 
                      data={laborData}
                      title="Delivery Worker Metrics"
                      xDataKey="month"
                      lines={[
                        { dataKey: 'averageWage', color: '#4e54c8', name: 'Avg. Hourly Wage ($)' },
                        { dataKey: 'hoursPerShift', color: '#FF9800', name: 'Hours Per Shift' },
                        { dataKey: 'employeeTurnover', color: '#F44336', name: 'Employee Turnover (%)' }
                      ]}
                      height={300}
                    />
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="shadow h-100">
                  <Card.Header as="h2" className="bg-primary text-white">Consumer Behavior</Card.Header>
                  <Card.Body>
                    <LineChart 
                      data={consumerData}
                      title="Consumer Purchasing Patterns"
                      xDataKey="month"
                      lines={[
                        { dataKey: 'impulseOrders', color: '#9C27B0', name: 'Impulse Orders (%)' },
                        { dataKey: 'wasteRate', color: '#F44336', name: 'Food Waste Rate (%)' },
                        { dataKey: 'averageOrderSize', color: '#4CAF50', name: 'Avg. Order Size ($)' }
                      ]}
                      height={300}
                    />
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                <Card className="shadow">
                  <Card.Header as="h2" className="bg-primary text-white">Data Insights</Card.Header>
                  <Card.Body>
                    <p>
                      The data reveals several key trends in the quick commerce ecosystem:
                    </p>
                    <ul>
                      <li>
                        <strong>Delivery times are decreasing</strong> - Average delivery times have fallen by 37.5% over 
                        the observed period, indicating intensifying competition in the quick commerce space.
                      </li>
                      <li>
                        <strong>Labor indicators are concerning</strong> - As delivery times decrease, employee turnover 
                        rates have increased by 100%, suggesting unsustainable pressure on delivery workers.
                      </li>
                      <li>
                        <strong>Consumer behavior is shifting</strong> - Impulse ordering has increased by 51%, while average 
                        order sizes have decreased by 28%, suggesting that quick commerce is changing fundamental purchasing patterns.
                      </li>
                      <li>
                        <strong>Environmental impact is growing</strong> - The carbon footprint per delivery has increased by 60%, 
                        likely due to the increase in small, rapid deliveries compared to consolidated order fulfillment.
                      </li>
                    </ul>
                    <p>
                      These data points help visualize the interconnections in our system diagram and validate many of the 
                      hypothesized relationships between quick commerce business models, consumer behavior, labor conditions, 
                      and environmental impacts.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        )}
      </div>
    </div>
  );
};

export default DataDashboard; 