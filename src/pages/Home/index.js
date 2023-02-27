import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../api';
import Header from '../../components/Header';
import { ContentWrapper } from '../../lib/global-styles';
import { MainHeader, PostsList, PostTitle } from './style';

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
      <Header />
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
        <PostsList>
          {posts.map((post, key) => (
            <li key={key}>
              <PostTitle>{post.title}</PostTitle>
              <p>{post.body}</p>
              <Link className="comments-link" to={`/post/${post.id}`}>
                Comentários
              </Link>
            </li>
          ))}
        </PostsList>
      </ContentWrapper>
    </div>
  );
};

export default Home;
