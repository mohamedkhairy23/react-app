import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="mb-20">
      <Navbar
        className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
        fluid
        rounded
      >
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold text-teal-700">
            TMDB Movies{" "}
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link
            active
            to="/"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            <p>Home</p>
          </Link>
          <Link
            active
            to="/search"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            Search
          </Link>
          <Link
            active
            to="/wishlist"
            className="focus:underline text-slate-50 my-1 py-3 px-3 rounded bg-teal-700  md:bg-white md:text-teal-700"
          >
            WishList
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavBar;
