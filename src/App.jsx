import React, { Suspense } from "react";
import "./index.css";
// import Hero from "./components/hero/Hero";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Contact from "./components/contact/Contact";
// import Navbar from "./components/navbar/Navbar";
// import Education from "./components/Education/Education";
// import Techstack from "./components/Techstack/Techstack";
// import About from "./components/About/About";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { lazy } from "react";
import LazyLoad from "react-lazyload";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
// import { Link } from "react-scroll";

const Hero = lazy(() => import("./components/hero/Hero"));
const Services = lazy(() => import("./components/services/Services"));
const Portfolio = lazy(() => import("./components/portfolio/Portfolio"));
const Contact = lazy(() => import("./components/contact/Contact"));
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Education = lazy(() => import("./components/Education/Education"));
const Techstack = lazy(() => import("./components/Techstack/Techstack"));
const About = lazy(() => import("./components/About/About"));
const App = () => {
  //we have to edit the wallpaper of the ipad and then show that on the website like two previous 3-d models shown on the website.
  return (
    <div className="sm:px-8">
      <BrowserRouter>
        <ToastContainer />
        <div>
          <Navbar />
        </div>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"}>
            <section id="home">
              <Hero />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"}>
            <section className="" id="showcase">
              <Services />
            </section>
          </LazyLoad>
        </Suspense>
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="techstack">
          <Techstack />
        </section>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"}>
            <section className="h-[220vh] sm:h-[85vh]" id="portfolio">
              <Portfolio />
            </section>
          </LazyLoad>
        </Suspense>
        <Suspense fallback={"loading..."}>
          <LazyLoad height={"100vh"}>
            <section id="contact">
              <Contact />
            </section>
          </LazyLoad>
        </Suspense>
        <section id="contact">
          <Footer />
        </section>
      </BrowserRouter>
    </div>
  );
};

export default App;
