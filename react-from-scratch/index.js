import React from 'react';
import ReactDOM from 'react-dom/client';  

import App from './App';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App message = 'You are now using a component from another file '/>);
