import React from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "757951709445-gqjcraalrplug9abvq3et5icgep3sp6m.apps.googleusercontent.com";

function Logout() {
  const onSuccess = () => {
    window.location.reload();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Đăng xuất"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;
