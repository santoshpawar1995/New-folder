import React, { useState } from "react"
import Slider from "react-slick";
import './FlashCard.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";


const SampleNextArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='next'>
        <i className='fa fa-long-arrow-alt-right'></i>
      </button>
    </div>
  )
}
const SamplePrevArrow = (props) => {
  const { onClick } = props
  return (
    <div className='control-btn' onClick={onClick}>
      <button className='prev'>
        <i className='fa fa-long-arrow-alt-left'></i>
      </button>
    </div>
  )
}
const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  }

  return (
    <>
      <Slider {...settings} className="text-center main-cont-flex" >
        {productItems.map((productItems) => {
          return (

            <>
              {/* <div className='box'> */}


              



              <div className='container-slider-manualy text-center '>


                <div className='img text-center'>
                  {/* <span className='off-text'>{productItems.discount}% Offffff</span> */}
                  
                  <div className=" text-center">
                    <div className="image-cont">
                    <img src={productItems.cover} alt='' className="cover-imag" />
                    </div>
                    <div className='rate'>
                    <i className='fa fa-star text-gold'></i>
                    <i className='fa fa-star text-gold'></i>
                    <i className='fa fa-star text-gold'></i>
                    <i className='fa fa-star text-gold'></i>
                    <i className='fa fa-star text-gold'></i>
                  </div>
                    <h5 className="text-danger">{productItems.name}</h5>
                  </div>
                  {/* <div className='product-lik'>
                    <label className="number-manu"> {count}</label> <br />
                    <i className='fa-regular fa-heart heart-icon' onClick={increment}></i>
                  </div> */}

                  <div className='pri'>
                    <h4 className="text-success">${productItems.price}.00 </h4>

                    <button onClick={() => addToCart(productItems)} className="buynow-button text-center">
                      {/* <i className='fa fa-plus'></i> */}
                      Buy Now

                    </button>
                  </div>
                </div>

                <div className='product-details'>
               
                  
                  
                
                </div>


              </div>



              {/* </div> */}

            </>
          )
        })}
      </Slider>
    </>
  )
}

export default FlashCard
