import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';

const Comments = () => {
  let { id } = useParams();
  const [comments, setComments] = useState([]);

  console.log(id);

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
      <ul>
        {comments.map((comment, key) => (
          <li key={key}>
            <h2>{comment.name}</h2>
            <h3>{comment.email}</h3>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
