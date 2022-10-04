import axios from "axios";

// const apiRoot = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   headers: { "Content-Type": "application/json" },
// });

export const getMovies = async () => {
  const { data } = await axios({
    method: "GET",
    url: `http://localhost:3000/api/movies`,
    headers: { contentType: "application/json" },
  });
  return data;
};

export const getMovieDetails = async (id: string | undefined | string[]) => {
  const { data } = await axios({
    method: "GET",
    url: `http://localhost:3000/api/movies/${id}`,
    headers: { contentType: "application/json" },
  });
  return data;
};
