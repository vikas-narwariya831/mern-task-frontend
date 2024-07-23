// src/services/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const fetchProducts = () => {
  return axios.get(`${API_URL}/api/products`).then(response => response.data);
};

export const fetchBanners = () => {
  return axios.get(`${API_URL}/api/banners`).then(response => response.data);
};

export const fetchCategories = () => {
  return axios.get(`${API_URL}/api/categories`).then(response => response.data);
};
