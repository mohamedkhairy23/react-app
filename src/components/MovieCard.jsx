import React, { useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../slices/actions/wishlist";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const MovieCard = ({ Movie }) => {
  const { wishlist } = useSelector((state) => state.wishlist);

  const [click, setClick] = useState(false);
  const dispatch = useDispatch();

  const addToWishlistHandler = (movie) => {
    setClick(!click);
    dispatch(addToWishlist(movie));
  };

  const removeFromWishlistHandler = (movie) => {
    setClick(!click);
    dispatch(removeFromWishlist(movie));
  };

  useEffect(() => {
    if (wishlist && wishlist.find((i) => i.id === Movie?.id)) {
      setClick(true);
    } else {
      setClick(false);
    }
  }, [Movie, wishlist]);
  return (
    <Card className="max-w-sm bg-white border  justify-center justify-self-center mx-auto border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img
        alt=""
        className="w-full h-1/2 object-cover object-center rounded border border-gray-200"
        src={`https://image.tmdb.org/t/p/w500/${Movie.poster_path}`}
      />
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {Movie.title}
      </h5>
      <div className="flex justify-between">
        <Link to={`/movieDetails/${Movie.id}`}>
          <Button className="w-full">
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Link>
        <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          {click ? (
            <AiFillHeart
              size={20}
              className="cursor-pointer"
              onClick={() => removeFromWishlistHandler(Movie)}
              color={click ? "red" : "#333"}
              title="Remove from wishlist"
            />
          ) : (
            <AiOutlineHeart
              size={20}
              className="cursor-pointer"
              onClick={() => addToWishlistHandler(Movie)}
              color={click ? "red" : "#333"}
              title="Add to wishlist"
            />
          )}
        </button>
      </div>
    </Card>
  );
};

export default MovieCard;
