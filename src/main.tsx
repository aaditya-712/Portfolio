import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import CertificateViewer from './components/CertificateViewer.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/certificates/:certificateId" element={<CertificateViewer />} />
      </Routes>
    </Router>
  </StrictMode>
);
