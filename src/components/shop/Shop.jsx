import React from 'react'
import Scard from './Scard'
import Scat from './Scat'
import './Style.css'

const Shop = ({shopItems, addToCart}) => {
  return (
    <>
        <section className="shop background">
            <div className="container d_flex">
                <Scat />

                <div className="contentWidth">
                    <div className="heading d_flex">
                        <div className="heading-left row f_flex">
                            <h2> برترین ها </h2>
                        </div>


                        <div className="heading-right row">
                            <span>مشاهده همه</span>
                            <i className="fa fa-caret-right"></i>
                        </div>
                    </div>

                    <div className="product-content grid1">
                        <Scard shopItems={shopItems} addToCart={addToCart} />
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default Shop