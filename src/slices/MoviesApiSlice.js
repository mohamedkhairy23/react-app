import { apiSlice } from "./apiSlice";

export const servicesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ page }) => ({
        url: `/3/movie/popular?api_key=29c7fe441820e96b87a9e582ba8f1cf7&page=${page}`,
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Movies"],
    }),

    getSimilarMovies: builder.query({
      query: ({ id }) => ({
        url: `/3/movie/${id}/3/movie/{movie_id}/similar`,
      }),
      headers: {
        Authorization: `Bearer ACCESS_TOKEN`,
      },
      keepUnusedDataFor: 5,
      providesTags: ["Movies"],
    }),

    getMoviesBySearch: builder.query({
      query: ({ movie }) => ({
        url: `/3/search/movie?api_key=29c7fe441820e96b87a9e582ba8f1cf7&query=${movie}`,
      }),
      keepUnusedDataFor: 5,
    }),

    getMovieDetails: builder.query({
      query: (id) => ({
        url: `/3/movie/${id}?api_key=29c7fe441820e96b87a9e582ba8f1cf7`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetSimilarMoviesQuery,
  useGetMovieDetailsQuery,
  useGetMoviesBySearchQuery,
} = servicesApiSlice;
