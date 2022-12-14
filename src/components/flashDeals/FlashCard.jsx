import React, {useState} from 'react'
import Slider from "react-slick";

const NextArrow = (props) => {
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="next">
                <i className="fa fa-arrow-right"></i>
            </button>
        </div>
        )
}
const PrevArrow = (props) => {
    const {onClick} = props
    return(
        <div className="control-btn" onClick={onClick}>
            <button className="prev">
                <i className="fa fa-arrow-left"></i>
            </button>
        </div>
        )
}

const FlashCard = ({productItems, addToCart}) => {

    const [count, setCount] = useState(0);

    const increment = () => {
 
        setCount(count + 1)
 
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        
      };


  return (
    <>
    <Slider {...settings} >
    {productItems.map((productItem) => {

        return (
   
    
        <div className="box" key={productItem.id}>
            <div className="product mtop">
                <div className="img">
                    <span className="discount">{productItem.discount} تخفیف</span>
                    <img src={productItem.cover} alt="" />
                    <div className="product-like">
                        <label>{count}</label> <br />
                        <i className="fa fa-heart" onClick={increment}></i>
                    </div>
                </div>

                <div className="product-details">
                    <h3>{productItem.name}</h3>
                    <div className="rate">
                        
                        <div className="starts">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>

                        <p>امتیاز دهید</p>
                    </div>


                    <div className="price">
                        <h4>{productItem.price} تومان</h4>
                        <button onClick={() => addToCart(productItem)}>
                            <i className="fa fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    

        )

    })}

</Slider>
    </>
  )
}

export default FlashCard