
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PDFGenerator from './components/PDFGenerator';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>PDF Generator & Sharer</h1>
        <Routes>
          <Route path="/" element={<PDFGenerator />} />
          {/* Share Button can be integrated within the PDFGenerator or on a different route */}
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
