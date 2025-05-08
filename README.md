# QuickKart - 10-Minute Delivery Analysis Platform

A React-based web platform that analyzes the impact of QuickKart's 10-minute delivery service on consumer behavior, environmental sustainability, and labor conditions.

## Features

- **Research & Problem Framing**: Comprehensive analysis of QuickKart impacts
- **System Diagram**: Interactive Causal Loop Diagram (CLD) visualization
- **Data Dashboard**: Real-time data integration via APIs for key variables
- **Analysis**: Environmental, Policy, and Social (EPS) analysis with leverage points

## Tech Stack

- React 18
- Vite
- React Router
- React Bootstrap for UI components
- Recharts for data visualization
- D3.js for interactive system diagrams
- Axios for API calls

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/QuickKart.git
   cd QuickKart
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
QuickKart/
├── public/             # Static files
├── src/
│   ├── assets/         # Images, fonts, etc.
│   ├── components/     # Reusable components
│   ├── data/           # Mock data and data utilities
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions and services
│   ├── App.jsx         # Main app component
│   ├── App.css         # Global styles
│   ├── main.jsx        # Entry point
│   └── index.css       # Base styles
├── index.html          # HTML template
└── package.json        # Project dependencies and scripts
```

## API Integration

This platform is designed to connect with external APIs for real-time data. Currently using mock data, but can be configured to use real data sources by updating the ApiService.js file.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built as a demonstration of systems thinking applied to modern commerce
- Uses React best practices and modern front-end development patterns
