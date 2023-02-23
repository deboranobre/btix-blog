import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';

const routes = (
  <Router>
    <Route path="/" element={<Home />} />
  </Router>
);

export default routes;
