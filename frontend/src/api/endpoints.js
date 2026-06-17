// src/api/endpoints.js
import axiosInstance from './axios';

// Auth
export const login = (email, password) =>
  axiosInstance.post('/auth/login', { email, password });

// Employees
export const fetchEmployees = (params) =>
  axiosInstance.get('/employees', { params });
export const fetchEmployeeById = (id) =>
  axiosInstance.get(`/employees/${id}`);
export const createEmployee = (data) =>
  axiosInstance.post('/employees', data);
export const updateEmployee = (id, data) =>
  axiosInstance.patch(`/employees/${id}`, data);
export const deleteEmployee = (id) =>
  axiosInstance.delete(`/employees/${id}`);

// Search
export const searchEmployees = (query) =>
  axiosInstance.get('/search/employees', { params: { q: query } });

// Analytics (example endpoints)
export const getTopSkills = () => axiosInstance.get('/analytics/employees/top-skills');
export const getTopDomains = () => axiosInstance.get('/analytics/employees/top-domains');
export const getExperienceDistribution = () => axiosInstance.get('/analytics/employees/experience-analysis');

// Stats overview
export const getStatsOverview = () => axiosInstance.get('/stats/overview');
