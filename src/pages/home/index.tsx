import React from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import Brands from "./brands/Brands";
import Catalog from "./catalog/Catalog";
import Faq from "./FAQ/Faq";
import Feedback from "./feedback/Feedback";
import Footer from "./footer/Footer";
import Portfolio from "./portfolio/Portfolio";
import Slider from "./slider/Slider";

const Home = () => {
  return (
    <>
      <MyNavbar />
      {/* slide */}
      <div>
        <Slider />
      </div>
      {/* //slide */}
      <Catalog />
      <Feedback />
      <Portfolio />
      <Brands />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
