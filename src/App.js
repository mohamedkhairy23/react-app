import { useEffect } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  };
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Outlet />
      <ToastContainer />
    </>
  );
}

export default App;
