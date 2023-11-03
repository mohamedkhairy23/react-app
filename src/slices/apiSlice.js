import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.themoviedb.org",
});

export const apiSlice = createApi({
  baseQuery,

  tagTypes: ["Movie", "Users"],
  endpoints: (builder) => ({}),
});
