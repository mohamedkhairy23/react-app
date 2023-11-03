import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";
import { removeFromWishlist } from "../slices/actions/wishlist";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  console.log(wishlist);
  const dispatch = useDispatch();

  const removeFromWishlistHandler = (data) => {
    dispatch(removeFromWishlist(data));
  };

  return (
    <>
      <h1 class="pl-2 mb-5 text-4xl font-bold leading-none tracking-tight text-slate-700 md:text-5xl lg:text-6xl dark:text-white">
        Wishlist Page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-3 lg:grid-cols-4 gap-4 items-center justify-center mb-3">
        {wishlist?.map((Movie) => (
          <MovieCard key={Movie.id} Movie={Movie} />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
