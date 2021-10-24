import { Button } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { GoogleLogin } from "react-google-login";
import { AiOutlineGoogle } from "react-icons/ai";
import { useHistory } from "react-router-dom";
const clientId =
  "757951709445-gqjcraalrplug9abvq3et5icgep3sp6m.apps.googleusercontent.com";
function Login({ userProfile }) {
  let history = useHistory();
  const redirectHome = () => {
    history.push(`/`);
  };
  const onSuccess = (res) => {
    userProfile(res.profileObj);
    redirectHome();
  };
  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        render={(renderProps) => (
          <button
            className="login__btn"
            style={{
              backgroundColor: "#cf2122",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
            onClick={renderProps.onClick}
          >
            <AiOutlineGoogle />
            Đăng nhập với Google
          </button>
        )}
        buttonText="Đăng nhập với Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
