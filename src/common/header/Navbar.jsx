import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {



  return (
    <>
        <header className="header" >
            <div className='container d_flex' >
                <div className='categories d_flex'  >
                    <span className='fa fa-list'></span>

                    <Link to='/products' >
                    <h4>
                        دسته بندی ها <i className="fa fa-chevron-down"></i>
                    </h4>
                    </Link>
                </div>

                <div className="navlink">
                    <ul className= "link f_flex capitalize" >
                        <li>
                            <Link to='/full-ecommerce-reactjs' >خانه</Link>
                        </li>

                        <li>
                            <Link to='/profile' > حساب کاربری</Link>
                        </li>

                        <li>
                            <Link to='/products' >محصولات</Link>
                        </li>

                        <li>
                            <Link to='/product' >محصول</Link>
                        </li>

                        <li>
                            <Link to='/cart' >سبد خرید</Link>
                        </li>

                        <li>
                            <Link to='/register' >ثبت نام</Link>
                        </li>

                        <li>
                            <Link to='/login' > ورود</Link>
                        </li>

                       
                       
                    </ul>

                   
                </div>
            </div>
        </header>
    </>
  )
}

export default Navbar