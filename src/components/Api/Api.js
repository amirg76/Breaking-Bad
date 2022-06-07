import axios from "axios";
export const API = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",
});

export const MOKEAPI = axios.create({
  baseURL: "https://628e6124368687f3e71608eb.mockapi.io",
});
