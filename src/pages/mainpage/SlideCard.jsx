import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SlideCard = () => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{margin: "0px"}}>{dots}</ul>
    }
  };



const data = [
  {
    id: 1,
    title: 'خرید تلفن همراه از تمام برندها',
    desc: 'خرید آنلاین انواع گوشی های جدید با قیمت مناسب از فروشگاه اینترنتی',
    cover: require('./images/slider/phone.png'),
   
  },


  {
    id: 2,
    title: 'خرید تبلت از تمام برندها',
    desc: 'خرید آنلاین جدیدترین مدل های تبلت قلم دار،سیم کارت خور،دانش آموزی،گیمینگ و غیره',
    cover: require('./images/slider/tablet.png'),
  },


  {
    id: 3,
    title: 'خرید لپ تاپ از تمام برندها',
    desc: 'خرید لپ تاپ در این دوران به کار مشکلی تبدیل شده است و تنوع و رنج قیمت لپ تاپ آن‌قدر متنوع است',
    cover: require('./images/slider/laptop.png'),
  },


  {
    id: 4,
    title: 'خرید کامپیوتر از تمام برندها',
    desc: 'به فکر خرید کامپیوتر یا خرید سیستم گیمینگ هستید؟ قصد دارید به تناسب بودجه سیستم اسمبل شده بخرید؟',
    cover: require('./images/slider/pc.png'),
  },
]

  return (
    <>
      <Slider {...settings} >
        {data.map((value, index) => {
          return (
            <div className="box d_flex top" key={index} dir="rtl" >
              
              
              
              <div className="right">
                <h1>{value.title}</h1>
                <p >{value.desc}</p>
                <button className="btn-primary">مشاهده محصولات</button>
              </div>

              
              <div className="left">
                <img src={value.cover} alt='' />
              </div>

            </div>
          )
        })}
      </Slider>
        
    </>
  )
}

export default SlideCard