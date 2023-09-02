import axios from "axios";

const baseUrl = "http://localhost:3002";

export const GetAllContacts = () => {
  return axios.get(`${baseUrl}/contacts`);
};

export const DeleteContactById = (id) => {
  return axios.delete(`${baseUrl}/contacts/${id}`);
};