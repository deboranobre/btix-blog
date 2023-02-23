import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .getPostsData()
      .then((response) => {
        const { data } = response;
        setPosts(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Link to="/usuarios">Usuarios</Link>
      <ul>
        {posts.map((post, key) => (
          <li key={key}>
            <h2>{post.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
