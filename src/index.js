import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GroupProvider } from './contexts/groupContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GroupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GroupProvider>
  </React.StrictMode>
);

