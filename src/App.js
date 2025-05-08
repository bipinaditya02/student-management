import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AddMember from './pages/AddMember';
import ViewMembers from './pages/ViewMembers';
import MemberDetails from './pages/MemberDetails';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-background">
        <header className="header">
          <h1>Team SRM Developers</h1>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/add">Add Member</Link>
            <Link to="/members">View Members</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddMember />} />
          <Route path="/members" element={<ViewMembers />} />
          <Route path="/members/:id" element={<MemberDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

