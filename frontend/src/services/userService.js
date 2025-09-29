// frontend/src/services/userService.js
import axios from "axios";

const BASE_URL = "http://localhost:3100/usuarios";

export const getUsers = () => axios.get(BASE_URL);
export const createUser = (user) => axios.post(`${BASE_URL}/add`, user);
export const updateUser = (id, user) => axios.put(`${BASE_URL}/update/${id}`, user);
export const deleteUser = (id) => axios.delete(`${BASE_URL}/delete/${id}`);
