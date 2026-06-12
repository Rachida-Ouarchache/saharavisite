import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || '/api',
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('royalsahara_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('royalsahara_token');
      localStorage.removeItem('royalsahara_user');
    }
    return Promise.reject(error.response?.data || error);
  }
);

export const toursAPI = {
  getAll: (params) => api.get('/tours', { params }),
  getBySlug: (slug) => api.get(`/tours/${slug}`),
  getFeatured: () => api.get('/tours/featured'),
  getFilters: () => api.get('/tours/filters'),
  create: (data) => api.post('/tours', data),
  update: (id, data) => api.patch(`/tours/${id}`, data),
  delete: (id) => api.delete(`/tours/${id}`),
};

export const destinationsAPI = {
  getAll: (params) => api.get('/destinations', { params }),
  getBySlug: (slug) => api.get(`/destinations/${slug}`),
  getFeatured: () => api.get('/destinations/featured'),
  create: (data) => api.post('/destinations', data),
  update: (id, data) => api.patch(`/destinations/${id}`, data),
};

export const blogAPI = {
  getAll: (params) => api.get('/blog', { params }),
  getBySlug: (slug) => api.get(`/blog/${slug}`),
  getCategories: () => api.get('/blog/categories'),
  create: (data) => api.post('/blog', data),
  update: (id, data) => api.patch(`/blog/${id}`, data),
};

export const bookingsAPI = {
  create: (data) => api.post('/bookings', data),
  getAll: (params) => api.get('/bookings', { params }),
  updateStatus: (id, data) => api.patch(`/bookings/${id}`, data),
};

export const reviewsAPI = {
  getAll: (params) => api.get('/reviews', { params }),
  getTestimonials: () => api.get('/reviews/testimonials'),
  create: (data) => api.post('/reviews', data),
  update: (id, data) => api.patch(`/reviews/${id}`, data),
  delete: (id) => api.delete(`/reviews/${id}`),
};

export const authAPI = {
  login: (data) => api.post('/auth/login', data),
  register: (data) => api.post('/auth/register', data),
  getMe: () => api.get('/auth/me'),
};

export default api;
