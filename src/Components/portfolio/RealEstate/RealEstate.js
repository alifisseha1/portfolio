import { useEffect } from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Testimonails from "./components/Testimonails/Testimonails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const RealEstate = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default RealEstate;
