import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyles } from './lib/global-styles';
import Comments from './pages/Comments';
import Users from './pages/Users';
import User from './pages/User';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Comments />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuario/:id" element={<User />} />
      </Routes>
    </div>
  );
};
export default App;
