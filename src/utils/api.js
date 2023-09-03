import axios from "axios";
import Cookies from "js-cookie";

const baseUrl = "http://localhost:8000";

export const GetAllContacts = () => {
  return axios.get(`${baseUrl}/contacts`);
};

export const GetAllFavoriteContacts = () => {
  return axios.get(`${baseUrl}/contacts?favorite=true`);
}

export const DeleteContactById = (id) => {
  const headersConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  };

  return axios.delete(`${baseUrl}/contacts/${id}`, headersConfig);
};

export const AddContact = (data) => {
  const headersConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  };

  return axios.post(`${baseUrl}/contacts`, data, headersConfig);
};

export const EditContact = (data) => {
  const headersConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  };

  return axios.put(`${baseUrl}/contacts/${data.id}`, data, headersConfig);
};

export const AddToFavoriteContact = (data) => {
  const headersConfig = {
    headers: {
      Authorization: `Bearer ${Cookies.get("access_token")}`,
    },
  };

  return axios.patch(`${baseUrl}/contacts/${data.id}`, data.data, headersConfig);
}

export const Login = (data) => {
  return axios.post(`${baseUrl}/auth/login`, data);
};
