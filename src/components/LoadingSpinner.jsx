import React from 'react';

const LoadingSpinner = ({ text = 'QuickKart' }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner">
        <div className="spinner-arc"></div>
      </div>
      <div className="loading-text">{text}</div>
    </div>
  );
};

export default LoadingSpinner; 