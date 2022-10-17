import React from 'react'
import './Style.css'

const Login = () => {
  return (
    <>
        <section className="login">
            <div className="login-container">
                <h1>وارد حساب خود شوید</h1>

                <div className="inputs">
                    
                    <div className="input">
                        <label>شماره تلفن : </label>
                        <input type="number" placeholder='شماره تلفن همراه' />
                        <span>شماره تلفن خود را وارد کنید</span>
                    </div>

                    <div className="input">
                        <label> رمز عبور : </label>
                        <input type="password" placeholder='رمز عبور  ' />
                        <span>رمز عبور خود را وارد کنید</span>
                    </div>
                    
                </div>

                <button type="button">ورود به حساب کاربری</button>
            </div>
        </section>
    </>
  )
}

export default Login