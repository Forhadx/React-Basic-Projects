import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";



const Zoom = () =>{

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      }, []);

      
    return(
        <div>
      <h1>Your Zoom animation</h1>
      <div className="all-boxes">
        <h2>scroll down</h2>
        <div className="box" data-aos="zoom-in" >data-aos="zoom-in"</div>
        <div className="box" data-aos="zoom-in-up" >data-aos="zoom-in-up"</div>
        <div className="box" data-aos="zoom-in-down" >data-aos="zoom-in-down"</div>
        <div className="box" data-aos="zoom-in-left" >data-aos="zoom-in-left"</div>
        <div className="box" data-aos="zoom-in-right" >data-aos="zoom-in-right"</div>
        <div className="box" data-aos="zoom-out" >data-aos="zoom-out"</div>
        <div className="box" data-aos="zoom-out-up" >data-aos="zoom-out-up"</div>
        <div className="box" data-aos="zoom-out-down" >data-aos="zoom-out-down"</div>
        <div className="box" data-aos="zoom-out-left" >data-aos="zoom-out-left"</div>
        <div className="box" data-aos="zoom-out-right" >data-aos="zoom-out-right"</div>
        
      </div>
    </div>
    );
}

export default Zoom;