import axios from 'axios';

axios.defaults.baseURL = 'https://643318b1d0127730d2e13330.mockapi.io/users';

const byPage = 3;

export async function fetchUsers(page) {
  const response = await axios.get(`?page=${page}&limit=${byPage}`);
  return response.data;
};

export async function updateUser({ id, followers }) {
  await axios.put(`/${id}`, { followers });
};
