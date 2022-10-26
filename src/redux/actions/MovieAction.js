import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
const getMovies = () => {
  return async (dispatch) => {
    const popularMovieApi = api.get(
      `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const topRatedApi = api.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
    );
    const upComingApi = api.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
    );

    let [popularMovies, topRatedMovies, upcomingMovies] = await Promise.all([
      popularMovieApi,
      topRatedApi,
      upComingApi,
    ]);
    dispatch({
      type: "GET_MOVIES_SUCCESS",
      payload: {
        popularMovies: popularMovies.data,
        topRatedMovies: topRatedMovies.data,
        upcomingMovies: upcomingMovies.data,
      },
    });
  };
};

export const movieAction = {
  getMovies,
};
