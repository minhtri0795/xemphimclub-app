import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./Signup.scss";
import Login from "./Login";
import { NavLink } from "react-router-dom";
function Loginpage({ userProfile }) {
  const initialState = {
    email: "",
    password: "",
    name: "",
  };
  const [formData, setData] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setData({ ...formData, [name]: value });
  };
  let history = useHistory();
  const redirectHome = () => {
    history.push(`/`);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // userProfile(formData);
    axios
      .post("http://localhost:8000/auth/register", formData)
      .then((res) => {
        //Perform Success Action
        console.log(res);
        localStorage.setItem("access_token", res.data.access_token);

        redirectHome();
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
      .finally(() => {
        //Perform action in always
      });
  };
  const { email, password, name } = formData;
  return (
    <div className="login__page">
      <div className="container">
        <div className="form__container">
          <h2>Đăng ký</h2>
          <form onSubmit={onSubmit}>
            <div id="email" className="form__group">
              <input
                onChange={onChange}
                name="email"
                value={email}
                type="email"
                placeholder="Email"
              />
            </div>
            <div id="email" className="form__group">
              <input
                onChange={onChange}
                name="name"
                value={name}
                type="text"
                placeholder="Tên bạn"
              />
            </div>
            <div id="password" className="form__group">
              <input
                onChange={onChange}
                name="password"
                value={password}
                type="password"
                placeholder="Mật khẩu"
              />
            </div>
            <div className="form__group">
              <label htmlFor="" className="checkbox">
                <input type="checkbox" />
                Đăng ký nhận thông báo về trang web
              </label>
            </div>
            <button className="login__btn">Đăng ký</button>
            <div className="divider"></div>
            <Login userProfile={userProfile} />
          </form>
          <NavLink className="helper-text" to="/login">
            Đăng nhập
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
