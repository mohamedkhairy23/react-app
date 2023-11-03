import React, { useState } from "react";
import MovieCard from "../components/MovieCard";
import { useGetMoviesQuery } from "../slices/MoviesApiSlice";
import Loader from "../components/Loader";

const Home = () => {
  const [page, setPage] = useState(1);
  let [disabled, setDisabled] = useState(false);

  const { data, refetch, isLoading, error } = useGetMoviesQuery({
    page,
  });
  console.log(data);

  const handleNext = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
      e.currentTarget.disabled = setDisabled(true);
    }
  };

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Something went wrong</p>
      ) : (
        <div>
          {" "}
          <div className="flex justify-between mb-3">
            <h1 class="pl-2 mb-2 text-4xl font-bold leading-none tracking-tight text-slate-700 md:text-5xl lg:text-6xl dark:text-white">
              Most Popular{" "}
            </h1>
            <nav aria-label=" Page navigation example">
              <ul class="flex items-center justify-end -space-x-px h-10 text-base">
                <li>
                  <button
                    disabled={page <= 1 ? true : false}
                    class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500"
                    onClick={handlePrev}
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </button>
                </li>
                <p className="text-slate-700">{`Page ${page}`}</p>
                <li>
                  <button
                    disabled={page >= 500 ? true : false}
                    class="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500"
                    onClick={handleNext}
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      class="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 lg:grid-cols-4 gap-4 items-center justify-center mb-3">
            {data?.results?.map((Movie) => (
              <MovieCard key={Movie.id} Movie={Movie} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
