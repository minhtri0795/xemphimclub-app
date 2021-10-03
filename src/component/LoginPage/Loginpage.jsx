import React from "react";
import "./LoginPage.scss";
import Login from "./Login";
import Logout from "./Logout";
function Loginpage({ userProfile }) {
  return (
    <div className="login__page">
      <div className="container">
        <div className="form__container">
          <h2>Đăng nhập</h2>
          <form action="">
            <div id="email" className="form__group">
              <input type="email" placeholder="Email" />
            </div>
            <div id="password" className="form__group">
              <input type="password" placeholder="Mật khẩu" />
            </div>
            <div className="form__group">
              <label htmlFor="" className="checkbox">
                <input type="checkbox" />
                Ghi nhớ
              </label>
            </div>
            <button className="login__btn">Đăng nhập</button>
            <div className="divider"></div>
            <Login userProfile={userProfile} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
