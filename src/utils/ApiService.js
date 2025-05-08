import axios from 'axios';

// Base URL for API requests - would be replaced with actual API URL in production
const BASE_URL = 'https://api.example.com';

// Create an axios instance with default config
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Example API endpoints - to be replaced with actual endpoints
const ApiService = {
  // Delivery metrics
  getDeliveryMetrics: async (params) => {
    try {
      // In a real app this would fetch from API, for this demo we're returning mock data
      // return await apiClient.get('/delivery-metrics', { params });
      return {
        data: [
          { month: 'Jan', avgDeliveryTime: 8, ordersPerDay: 120, carbonFootprint: 45 },
          { month: 'Feb', avgDeliveryTime: 7.5, ordersPerDay: 140, carbonFootprint: 48 },
          { month: 'Mar', avgDeliveryTime: 6.8, ordersPerDay: 165, carbonFootprint: 52 },
          { month: 'Apr', avgDeliveryTime: 6.2, ordersPerDay: 190, carbonFootprint: 58 },
          { month: 'May', avgDeliveryTime: 5.5, ordersPerDay: 210, carbonFootprint: 64 },
          { month: 'Jun', avgDeliveryTime: 5.0, ordersPerDay: 240, carbonFootprint: 72 },
        ]
      };
    } catch (error) {
      console.error('Error fetching delivery metrics:', error);
      throw error;
    }
  },
  
  // Labor conditions metrics
  getLaborMetrics: async () => {
    try {
      // Mock data for labor metrics
      return {
        data: [
          { month: 'Jan', averageWage: 15, hoursPerShift: 8.2, employeeTurnover: 12 },
          { month: 'Feb', averageWage: 15.2, hoursPerShift: 8.5, employeeTurnover: 13 },
          { month: 'Mar', averageWage: 15.1, hoursPerShift: 8.7, employeeTurnover: 15 },
          { month: 'Apr', averageWage: 15.3, hoursPerShift: 9.0, employeeTurnover: 18 },
          { month: 'May', averageWage: 15.4, hoursPerShift: 9.2, employeeTurnover: 22 },
          { month: 'Jun', averageWage: 15.5, hoursPerShift: 9.5, employeeTurnover: 24 },
        ]
      };
    } catch (error) {
      console.error('Error fetching labor metrics:', error);
      throw error;
    }
  },
  
  // Consumer behavior metrics
  getConsumerMetrics: async () => {
    try {
      // Mock data for consumer behavior
      return {
        data: [
          { month: 'Jan', impulseOrders: 45, wasteRate: 8, averageOrderSize: 25 },
          { month: 'Feb', impulseOrders: 48, wasteRate: 8.2, averageOrderSize: 24 },
          { month: 'Mar', impulseOrders: 52, wasteRate: 8.5, averageOrderSize: 22 },
          { month: 'Apr', impulseOrders: 58, wasteRate: 9.0, averageOrderSize: 21 },
          { month: 'May', impulseOrders: 62, wasteRate: 9.5, averageOrderSize: 20 },
          { month: 'Jun', impulseOrders: 68, wasteRate: 10.2, averageOrderSize: 18 },
        ]
      };
    } catch (error) {
      console.error('Error fetching consumer metrics:', error);
      throw error;
    }
  },
  
  // System diagram data
  getSystemDiagramData: async () => {
    try {
      // Mock data for system diagram
      return {
        data: {
          nodes: [
            { id: '1', name: 'Quick Delivery', color: '#4e54c8' },
            { id: '2', name: 'Impulse Buying', color: '#4CAF50' },
            { id: '3', name: 'Food Waste', color: '#F44336' },
            { id: '4', name: 'Traffic Congestion', color: '#FF9800' },
            { id: '5', name: 'Delivery Driver Stress', color: '#9C27B0' },
            { id: '6', name: 'Carbon Emissions', color: '#607D8B' },
            { id: '7', name: 'Small Order Size', color: '#2196F3' },
          ],
          links: [
            { source: '1', target: '2', type: 'positive' },
            { source: '2', target: '3', type: 'positive' },
            { source: '1', target: '4', type: 'positive' },
            { source: '4', target: '5', type: 'positive' },
            { source: '4', target: '6', type: 'positive' },
            { source: '2', target: '7', type: 'positive' },
            { source: '7', target: '6', type: 'positive' },
            { source: '5', target: '1', type: 'negative' },
          ]
        }
      };
    } catch (error) {
      console.error('Error fetching system diagram data:', error);
      throw error;
    }
  }
};

export default ApiService; 