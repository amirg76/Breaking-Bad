import axios from "axios";
export const API = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",
});

export const MOKEAPI = axios.create({
  baseURL: "https://628e6124368687f3e71608eb.mockapi.io",
});

export const OMDAPI = axios.create({
  baseURL: "https://online-movie-database.p.rapidapi.com/title/",
  params: { tconst: "tt0903747", limit: "25" },
  headers: {
    "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    "X-RapidAPI-Key": "63bf4b68b3msh22edc3403f4c93cp19e713jsnc4c9414a896d",
  },
});
