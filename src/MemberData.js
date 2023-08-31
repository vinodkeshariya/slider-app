import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Data from "./data.json";

const MemberData = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [{
      breakpoint: 1200,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1
      }
  },
  {
      breakpoint: 600,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1  
      }
  },
  {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1 
      }
  }
  ]
     }
  
   

  return (
    <div className="slider-container">
  
 

      <Slider{...settings} >
        {Data.members_data.map((d) => (
          <div className="grid-card" key={d.id}>
            <img src={d.image} alt={d.name} />
            <h2>{d.name}</h2>
            <p>{d.description}</p>
          </div>
        ))}
      </Slider>
    
    </div>
  );
};

export default MemberData;
