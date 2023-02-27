import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import api from '../api';
import Header from '../components/Header';
import { colors, ContentWrapper, device } from '../lib/global-styles';

const UsersList = styled.ul`
  list-style: none;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  a{
    color: ${colors.primary};
    text-decoration: none;
  }

  li{
    width: 20%;
    border-left: 5px solid ${colors.primary};
    border-radius: 10px;
    height: 100px;
    margin-bottom: 30px;
    padding: 15px;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);

    @media ${device.mobile} {
      width: 100%;
      margin: 10px;
    } 
  }

  li.hidden{visibility: hidden;}

  h3{font-size: 14px;}

  span{
    font-family: 'QuicksandBold';
  }
}`;

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
      <Header />
      <ContentWrapper>
        <UsersList>
          {users.map((user, key) => (
            <li key={key}>
              <Link to={`/usuario/${user.id}`}>
                <h2>{user.name}</h2>
                <h3>
                  <span>Username: </span>
                  {user.username}
                </h3>
                <h3>
                  <span>Email: </span>
                  {user.email}
                </h3>
              </Link>
            </li>
          ))}
          <li className="hidden"></li>
          <li className="hidden"></li>
        </UsersList>
      </ContentWrapper>
    </div>
  );
};

export default Users;
