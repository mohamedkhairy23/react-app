import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useGetMovieDetailsQuery } from "../slices/MoviesApiSlice";
import { useParams } from "react-router-dom";
import { Rating } from "flowbite-react";
import { Kbd } from "flowbite-react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { AiFillCopy, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../slices/actions/wishlist";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { wishlist } = useSelector((state) => state.wishlist);

  const [click, setClick] = useState(false);
  const dispatch = useDispatch();
  const url = window.location.href;

  const {
    data: movie,
    refetch,
    isLoading,
    error,
  } = useGetMovieDetailsQuery(id);

  const addToWishlistHandler = (movie) => {
    setClick(!click);
    dispatch(addToWishlist(movie));
  };

  const removeFromWishlistHandler = (movie) => {
    setClick(!click);
    dispatch(removeFromWishlist(movie));
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i.id === movie?.id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [movie, wishlist]);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : error ? (
        "Something went wrong"
      ) : (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
          <div className="container px-5 py-6 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt=""
                className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Movie NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {movie.title}{" "}
                </h1>
                <div className="flex mb-4">
                  {" "}
                  <Rating>
                    <Rating.Star />
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                      {Number(movie.vote_average).toFixed(2)}
                    </p>
                    <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {movie.vote_count} Votes
                    </p>
                  </Rating>
                </div>
                <p className="leading-relaxed">{movie.overview}</p>
                <div className="flex flex-row flex-wrap gap-1 mt-3">
                  {" "}
                  <p>Genres </p>
                  {movie.genres.map((genre) => (
                    <>
                      <Kbd>{genre.name}</Kbd>
                    </>
                  ))}
                </div>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                <div className="flex justify-between gap-6">
                  <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                    {click ? (
                      <AiFillHeart
                        size={20}
                        className="cursor-pointer"
                        onClick={() => removeFromWishlistHandler(movie)}
                        color={click ? "red" : "#333"}
                        title="Remove from wishlist"
                      />
                    ) : (
                      <AiOutlineHeart
                        size={20}
                        className="cursor-pointer"
                        onClick={() => addToWishlistHandler(movie)}
                        color={click ? "red" : "#333"}
                        title="Add to wishlist"
                      />
                    )}
                  </button>{" "}
                  <CopyToClipboard
                    text={url}
                    onCopy={() => {
                      toast.success("Copied Movie Link Successfully");
                    }}
                  >
                    <span className="flex mt-2 hover:underline">
                      Copy Movie Url <AiFillCopy size={20} className="mt-1" />
                    </span>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default MovieDetailsPage;
