import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";



const Slide = () =>{

    useEffect(() => {
        AOS.init({
          duration: 2000
        });
      }, []);

      
    return(
        <div>
      <h1>Your slide animation</h1>
      <div className="all-boxes">
        <h2>scroll down</h2>
        <div className="box" data-aos="slide-up" >data-aos="slide-up"</div>
        <div className="box" data-aos="slide-down" >data-aos="slide-down"</div>
        <div className="box" data-aos="slide-left" >data-aos="slide-left"</div>
        <div className="box" data-aos="slide-right" >data-aos="slide-right"</div>
        
      </div>
    </div>
    );
}

export default Slide;