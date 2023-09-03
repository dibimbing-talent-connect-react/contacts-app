import axios from "axios";

const baseUrl = "http://localhost:8000";

export const GetAllContacts = () => {
  return axios.get(`${baseUrl}/contacts`);
};

export const DeleteContactById = (id) => {
  return axios.delete(`${baseUrl}/contacts/${id}`);
};

export const AddContact = (data) => {
  return axios.post(`${baseUrl}/contacts`, data);
};

export const EditContact = (data) => {
  return axios.put(`${baseUrl}/contacts/${data.id}`, data);
};

export const Login = (data) => {
  return axios.post(`${baseUrl}/auth/login`, data);
};
