import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { createRoot } from 'react-dom/client';

import Entry from './entry';

// Scripts are loaded with defer, so DOM is already ready
console.log('App starting...');
console.log('document.body:', document.body);

const container = document.createElement('main');
document.body.appendChild(container);

console.log('Container created and appended');

try {
  const root = createRoot(container);
  root.render(<Entry />);
  console.log('React app rendered successfully');
} catch (error) {
  console.error('Error rendering React app:', error);
  document.body.innerHTML = `<h1>Error: ${error}</h1>`;
}
