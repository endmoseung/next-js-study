import axios from "axios";

const API_KEY = process.env.API_KEY;

// const apiRoot = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   headers: { "Content-Type": "application/json" },
// });

export const getMovies = async () => {
  const { data } = await axios({
    method: "GET",
    url: `/api/movies`,
    headers: { contentType: "application/json" },
  });
  return data;
};
