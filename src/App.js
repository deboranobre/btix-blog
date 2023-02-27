import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import { GlobalStyles } from './lib/global-styles';
import Comments from './pages/Comments';
import Users from './pages/Users';
import User from './pages/User';

const App = () => {
  return (
    <div className="app">
      <GlobalStyles />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Comments />} />
          <Route path="/usuarios" element={<Users />} />
          <Route path="/usuario/:id" element={<User />} />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;
