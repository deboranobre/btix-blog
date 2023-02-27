import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import api from '../api';
import Header from '../components/Header';
import { colors, ContentWrapper, device } from '../lib/global-styles';

const UserInfo = styled.div`
  color: ${colors.primary};
  border-left: 5px solid ${colors.primary};
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
  margin: 30px 0;
  width: 50%;

  @media ${device.mobile} {
    width: 100%;
    margin: 10px;
  }

  h3 {
    font-size: 14px;
  }

  span {
    font-family: 'QuicksandBold';
    display: inline-block;
    margin-right: 5px;
  }
`;

const DetailsInfo = styled.div`
  display: flex;
  font-size: 14px;
  margin-top: 10px;
  flex-wrap: wrap;  

  div {
    margin-left: 15px;
  }
`;

const User = () => {
  let { id } = useParams();
  const [user, setUser] = useState([]);

  useEffect(() => {
    api
      .getuserById(id)
      .then((response) => {
        const { data } = response;
        console.log(user);
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <ContentWrapper>
        <UserInfo>
          <h2>{user.name}</h2>
          <h3>
            <span>Username: </span>
            {user.username}
          </h3>
          <h3>
            <span>Email: </span>
            {user.email}
          </h3>
          <h3>
            <span>Site: </span>
            <a href={user.website}>{user.website}</a>
          </h3>
          <DetailsInfo>
            <span>Endereço:</span>
            <div>
              <span>Rua:</span>
              {user.address?.street}
              <hr />
              <span>Complemento:</span>
              {user.address?.suite}
              <hr />
              <span>Cidade:</span>
              {user.address?.city}
              <hr />
              <span>CEP:</span>
              {user.address?.zipcode}
            </div>
          </DetailsInfo>
          <DetailsInfo>
            <span>Empresa:</span>
            <div>
              <span>Nome:</span>
              {user.company?.name}
              <hr />
              <span>Frase de Efeito:</span>
              {user.company?.catchPhrase}
            </div>
          </DetailsInfo>
        </UserInfo>
      </ContentWrapper>
    </div>
  );
};

export default User;
