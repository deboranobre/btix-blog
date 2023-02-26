import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import api from '../api';
import { colors, ContentWrapper, device } from '../lib/global-styles';
import UserIcon from '../images/user-icon.svg';
import LogoImg from '../images/logo.webp';
import HeaderBg from '../images/header-bg.webp';
// import CellPhoneImg from '../images/cell-phone.webp';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 0;

  a.logo {
    background: url(${LogoImg}) no-repeat center;
    font-size: 0;
    height: 66px;
    width: 100%;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: bold;
    color: ${colors.primary};
    background: url(${UserIcon}) no-repeat left;
    background-size: 24px;
    padding: 5px 0 5px 30px;

    @media ${device.mobile} {
      font-size: 0;
      padding-right: 10px;
    }
  }
`;

const MainHeader = styled.div`
  display: flex;
  background: url(${HeaderBg}) no-repeat top right;
  height: 765px;
  color: ${colors.white};

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    padding: 0 60px;

    h1 {
      font-size: 48px;
    }

    span {
      font-family: 'QuicksandBold';
    }
  }

  @media ${device.mobile} {
    display: none;
  }
`;

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
      <header>
        <ContentWrapper>
          <HeaderWrapper>
            <a className="logo" href="https://www.btix.app/">
              BTIX
            </a>
            <Link to="/usuarios">Usuarios</Link>
          </HeaderWrapper>
        </ContentWrapper>
      </header>
      <ContentWrapper>
        <MainHeader>
          <div>
            <h1>
              O ingresso do <span>futuro</span> chegou
            </h1>
            <p>
              Com ingressos inteligentes a btix maximiza o resultado de eventos e abre portas para
              momentos marcantes para o público.
              <br />
              Acompanhe aqui nossas <span>últimas novidades no nosso Blog</span>
            </p>
          </div>
          <img src="images/cell-phone.webp" alt="celular" />
        </MainHeader>
        <ul>
          {posts.map((post, key) => (
            <li key={key}>
              <h2>{post.title}</h2>
            </li>
          ))}
        </ul>
      </ContentWrapper>
    </div>
  );
};

export default Home;
