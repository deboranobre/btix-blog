import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Comments from './pages/Comments';
import Users from './pages/Users';

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Comments />} />
        <Route path="/usuarios" element={<Users />} />
      </Routes>
    </div>
  );
};
export default App;
