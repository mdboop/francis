import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <nav className="main-nav">
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/new-experiment">Create Experiment</Link>
    <Link to="/open-experiments">Open Experiments</Link>
    <Link to="/closed-experiments">Closed Experiments</Link>
    <Link to="/help">Help</Link>
  </nav>
);

export default Nav;
