import React from 'react'

const Head = () => {
  return (
    <>
        <section className="head">
            <div className="container d_flex">
                <div className='left row'>
                    
                    <label dir="ltr">+021 123 4567</label >
                    <i className='fa fa-phone'></i>
                    
                    <label>example@gmail.com</label>
                    <i className='fa fa-envelope'></i>
                </div>

                <div className='right row RText'>
                    <label>سوالات پرتکرار</label>
                    <label>راهنمایی</label>
                    <span>&#128681;</span>
                    <label htmlFor=''>FA</label>
                    <label htmlFor=''>IR</label>
                </div>
            </div>


        </section>
    </>
  )
}

export default Head