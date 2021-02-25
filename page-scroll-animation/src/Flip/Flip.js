import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";



const Flip = () =>{

    useEffect(() => {
        AOS.init({
          duration: 2000,
        });
      }, []);

      
    return(
        <div>
      <h1>Your Flip animation</h1>
      <div className="all-boxes">
        <h2>scroll down</h2>
        <div className="box" data-aos="flip-up" >data-aos="flip-up"</div>
        <div className="box" data-aos="flip-down" >data-aos="flip-down"</div>
        <div className="box" data-aos="flip-left" >data-aos="flip-left"</div>
        <div className="box" data-aos="flip-right" >data-aos="flip-right"</div>
        
      </div>
    </div>
    );
}

export default Flip;