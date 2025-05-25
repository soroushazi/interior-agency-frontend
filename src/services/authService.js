import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';

const register = (email, password, full_name, phone_number) => {
  return axios.post(`${API_URL}/users/register/`, {
    email,
    password,
    full_name,
    phone_number,
  });
};

const login = (email, password) => {
  return axios.post(`${API_URL}/token/`, { email, password });
};

const getProfile = (token) => {
  return axios.get(`${API_URL}/users/me/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const updateProfile = (token, data) => {
  return axios.patch(`${API_URL}/users/me/`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default {
  register,
  login,
  getProfile,
  updateProfile,
};
