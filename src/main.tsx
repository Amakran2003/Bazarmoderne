import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.css'; // Import global CSS variables first
import './App.css'; // Then app-specific CSS
import './index.css';

// Create and render root
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Initialize default CSS variables directly in main.tsx
const styleElement = document.createElement('style');
styleElement.textContent = `
  :root {
    --teen-primary-color: #FF3366;
    --teen-secondary-color: #33CCFF;
    --teen-accent-color: #FFCC00;
    --tw-ring-color: #FF3366;
  }
`;
document.head.appendChild(styleElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
