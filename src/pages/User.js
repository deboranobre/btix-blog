import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const User = () => {
  let { id } = useParams();
  const [useer, setUser] = useState([]);

  useEffect(() => {
    api
      .getuserById(id)
      .then((response) => {
        const { data } = response;
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return <div></div>;
};

export default User;
