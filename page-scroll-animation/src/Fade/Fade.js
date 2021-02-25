import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import "./Fade.css";

const Fade = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div>
      <h1>Your Fade animation</h1>
      <div className="all-boxes">
        <h2>scroll down</h2>
        <div className="box" data-aos="fade-in" >data-aos="fade-in"</div>
        <div className="box" data-aos="fade-down" >data-aos="fade-down"</div>
        <div className="box" data-aos="fade-left" >data-aos="fade-left"</div>
        <div className="box" data-aos="fade-right" >data-aos="fade-right"</div>
        <div className="box" data-aos="fade-up-right" >data-aos="fade-up-right"</div>
        <div className="box" data-aos="fade-up-left" >data-aos="fade-up-left"</div>
        <div className="box" data-aos="fade-down-right" >data-aos="fade-down-right"</div>
        <div className="box" data-aos="fade-down-left" >data-aos="fade-down-left"</div>
      </div>
    </div>
  );
};

export default Fade;
