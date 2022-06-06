import axios from "axios";
export const API = axios.create({
  baseURL: "https://www.breakingbadapi.com/api",
});
// export const API = axios.create({
//   baseURL: "https://628e6124368687f3e71608eb.mockapi.io/breaking-bad",
// });

export const WIKIAPI = "https://en.wikipedia.org/w/api.php?";

export const params = {
  origin: "*",
  format: "json",
  action: "query",
  prop: "extracts",
  exchars: 250,
  exintro: true,
  generator: "search",
  gsrlimit: 1,
};
