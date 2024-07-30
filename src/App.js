import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniDrawer from './components/MiniDrawer';
import ClippedDrawer from './components/ClippedDrawer';
import Dashboard from './pages/Dashboard';
import Notices from './pages/Notices';
import MaintenanceRequests from './pages/MaintenanceRequests';
import Payments from './pages/Payments';

function App() {
  return (
    <Router>
      <ClippedDrawer>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/maintenance" element={<MaintenanceRequests />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </ClippedDrawer>
    </Router>
  );
}

export default App;
