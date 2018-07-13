import React, { Component } from 'react';
import ReactDOM  from 'react-dom';
import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  Slider from 'react-slick';
import params from './images';


class ShowSlider extends Component {  
  constructor(props) {
    super(props);
    this.state={
      data: params,
      width: sessionStorage.getItem('sizeWidth'),
    }
  }

      render() {
 /* ** -- Responsive Slider -- ** */

        const settings = {
          infinite: false,
          speed: 700,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [
        {
          breakpoint: 1024,
          settings: {
            infinite: false,
            speed: 700,
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            infinite: false,
            speed: 700,
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
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
        };
  /*  --Config Settings for Slider -- */
  
  /* Generate Slider  */
        const element = this.state.data.map((item,key)=>{
          return ( <div key={key} className="card-image">
          <a href={item.url} alt={item.title} target="_blank">
          <img  src={item.image} alt ={item.title}/>
          <h5> {item.title}  </h5>
          </a>
          </div>)
            });
        
   /* Generate Slider  */
      
      return (
        <div className="slider-wrapper">
        <p> &raquo; Bài viết tham khảo <span>  <button
          className="buttonFix"
          onClick={() =>
           document.getElementById('slider-content').remove()    
          }
        >
          {" "}
          x{" "}
        </button> </span> </p> 
        <div style={{
            width: this.state.width + "px"
          }}
        >  
        <Slider className="slider-2"  {...settings} >
          {element}
        </Slider>
        </div>
        </div>
      );
    }
}
function renderSlider(width){ 
  ReactDOM.render(<ShowSlider width={width} />,document.getElementById('slider-content'));
}
export default ShowSlider
 /* global function renderSlider() */
window.mySlider = renderSlider()
