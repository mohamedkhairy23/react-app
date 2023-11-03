import React, { useState } from "react";
import { useGetMoviesBySearchQuery } from "../slices/MoviesApiSlice";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

const SearchPage = () => {
  let [disabled, setDisabled] = useState(false);
  const [movie, setValue] = useState("");

  const { data, refetch, isLoading, error } = useGetMoviesBySearchQuery({
    movie,
  });
  console.log(data);

  return (
    <>
      <div className="mx-5">
        <form>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              value={movie}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              className="w-full p-4 pl-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-slate-500 focus:border-slate-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500"
              placeholder="Search"
              required=""
            />
          </div>
        </form>{" "}
      </div>{" "}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 lg:grid-cols-4 gap-4 items-center justify-center">
          {data?.results?.map((Movie) => (
            <MovieCard key={Movie.id} Movie={Movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchPage;
