import React from 'react'

const Scat = () => {

    const cat = [
        {
            catImg: require('./images/brands/apple.png'),
            catName: 'اپل',
        },

        {
            catImg: require('./images/brands/samsung.png'),
            catName: 'سامسونگ',
        },

        {
            catImg: require('./images/brands/huawei.png'),
            catName: 'هواوی',
        },

        {
            catImg: require('./images/brands/redmi.png'),
            catName: 'رد می',
        },

        {
            catImg: require('./images/brands/lg.png'),
            catName: 'ال جی',
        },

        {
            catImg: require('./images/brands/sony.png'),
            catName: 'سونی',
        },
       

    ]
  return (
    <>
        <div className="category">
            <div className="chead d_flex">
                <h1>برند ها</h1>
                <h1>فروشگاه</h1>
            </div>

            {cat.map((value, index) => {
                
                return (

                    <div className="box f_flex" key={index}>
                        <img src={value.catImg} alt='' />
                        <span>{value.catName}</span>
                    </div>

                )

            })}


            <div className="box box2">
                <button>مشاهده همه برند ها</button>
            </div>

        </div>
    </>
  )
}

export default Scat