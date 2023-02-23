import axios from 'axios';

// Create instance called instance
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const getPostsData = () =>
  instance({
    method: 'GET',
    url: '/posts',
  });

const getCommentsById = (id) =>
  instance({
    method: 'GET',
    url: `/posts/${id}/comments`,
  });

const getUsersData = () =>
  instance({
    method: 'GET',
    url: '/users',
  });

const getuserById = (id) =>
  instance({
    method: 'GET',
    url: `/users/${id}`,
  });

const calls = {
  getPostsData,
  getCommentsById,
  getUsersData,
  getuserById,
};

export default calls;
