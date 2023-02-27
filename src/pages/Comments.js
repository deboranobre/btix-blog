import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import api from '../api';
import Header from '../components/Header';
import { colors, ContentWrapper } from '../lib/global-styles';
import EmailIcon from '../images/email-icon.svg';

const CommentsList = styled.ul`
  list-style: none;
  color: ${colors.primary};
  margin-top: 20px;

  li {
    margin-bottom: 15px;
  }

  h2 {
    font-family: 'QuicksandBold';
  }

  h3 {
    background: url(${EmailIcon}) no-repeat left;
    background-size: 24px;
    margin: 5px 0;
    padding-left: 30px;
    font-size: 14px;
  }
`;

const Comments = () => {
  let { id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    api
      .getCommentsById(id)
      .then((response) => {
        const { data } = response;
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <ContentWrapper>
        <CommentsList>
          {comments.map((comment, key) => (
            <li key={key}>
              <h2>{comment.name}</h2>
              <h3>{comment.email}</h3>
              <p>{comment.body}</p>
            </li>
          ))}
        </CommentsList>
      </ContentWrapper>
    </div>
  );
};

export default Comments;
