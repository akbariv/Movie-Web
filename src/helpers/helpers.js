export const api_key = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWYwMGFhZTBjYjUxYjQyOGEyOTliNjQ3MWNlNGEwNiIsIm5iZiI6MTcxOTM5MzE4NS43NzcyNzQsInN1YiI6IjYyZGY5YTY5NWFiYTMyMDA1ZDFjYjc0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XuWIOOfU9zNurYpxlyVK-0SWBPlKdLKDwcZOGEv3NRQ",
  },
};

export const getPopularMovies = async (page) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/movie/popular?language=en-US&page=${page}`,
    api_key
  );
  const data = await response.json();
  const dataMovies = data.results;
  return dataMovies;
};

export const getUpcomingMovies = async (page) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/movie/upcoming?language=en-US&page=${page}`,
    api_key
  );
  const data = await response.json();
  const dataMovies = data.results;
  return dataMovies;
};

export const getSearchMovie = async (query) => {
  const responseSearch = await fetch(
    `${process.env.NEXT_PUBLIC_URL_BASE}/search/movie?query=${query}&include_adult=true&language=en-US&page=1`,
    api_key
  );
  const data = await responseSearch.json();
  const dataMovies = data.results;
  return dataMovies;
};

export const getMovieDetail = async (id) => {
  const responseDetail = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/movie/${id}?language=en-US`, api_key)
  const data = await responseDetail.json();
  return data;
}

export const getMovieImages = async (id) => {
  const responseImages = await fetch(`${process.env.NEXT_PUBLIC_URL_BASE}/movie/${id}/images`, api_key)
  const data = await responseImages.json();
  return data;
}