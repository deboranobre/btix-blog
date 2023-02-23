import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api
      .getUsersData()
      .then((response) => {
        const { data } = response;
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Link to="/usuarios">Usuarios</Link>
      <ul>
        {users.map((user, key) => (
          <li key={key}>
            <h2>{user.name}</h2>
            <h3>{user.username}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
