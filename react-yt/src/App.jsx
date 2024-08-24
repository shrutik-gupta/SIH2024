import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/SignIn';
import ItemList from './components/ItemList'; // Ensure this component exists
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/items" element={<ItemList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
