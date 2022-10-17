import React from 'react'
const Categories = () => {

    const data = [
        {
            cateImg: require('./images/category/phone.png'),
            cateName: "گوشی",
        },

        {
            cateImg: require('./images/category/tablet.png'),
            cateName: "تبلت",
        },

        {
            cateImg: require('./images/category/laptop.png'),
            cateName: "لپ تاپ",
        },

        {
            cateImg: require('./images/category/monitor.png'),
            cateName: "مانیتور",
        },

        {
            cateImg: require('./images/category/tv.png'),
            cateName: "تلویزیون",
        },

        {
            cateImg: require('./images/category/headphone.png'),
            cateName: "هدفون",
        },

        {
            cateImg: require('./images/category/camera.png'),
            cateName: "دوربین",
        },

        
        {
            cateImg: require('./images/category/handsfree.png'),
            cateName: "هندزفری",
        },

        {
            cateImg: require('./images/category/console.png'),
            cateName: "کنسول بازی",
        },

        {
            cateImg: require('./images/category/watch.png'),
            cateName: "ساعت هوشمند",
        },
       

        {
            cateImg: require('./images/category/vr.png'),
            cateName: "واقعیت مجازی",
        },


        {
            cateImg: require('./images/category/pc.png'),
            cateName: "کامپیوتر گیمینگ",
        },


        
    ]
  return (
    <>
        <div className="category">
             {data.map((value, index) => {
                return (
                    <div className="box f_flex" key={index}>
                        <img src={value.cateImg} alt='' />
                        <span>{value.cateName}</span>
                    </div>)
             })}
        </div>
    </>
  )
}

export default Categories