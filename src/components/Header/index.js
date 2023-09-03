import React, { useState, useContext } from "react";
import { DataContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import ModalLogin from "../ModalLogin";
import Cookies from "js-cookie";

const Header = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const navigate = useNavigate();

  const dataLogin = useContext(DataContext);

  const handleShowModalLogin = () => setShowModalLogin(true);
  const handleCloseModalLogin = () => setShowModalLogin(false);

  const handleLogout = () => {
    Cookies.remove("access_token");
    dataLogin.setIsLogin(false);

    if (window.location.pathname === "/favorite-contacts") {
      navigate("/");
    }
  };

  const titleStyle = {
    color: "black",
    fontWeight: "bolder",
    textAlign: "center",
    margin: 0,
    fontSize: "25px",
  };

  // const angkaContext = useContext(DataContext);

  return (
    <div className="header">
      <ModalLogin show={showModalLogin} handleClose={handleCloseModalLogin} />

      {/* inline style css */}
      <h1 style={titleStyle}>Contacts App</h1>
      <div>
        <Link to="/">
          <span className="mx-3">Home</span>
        </Link>

        {dataLogin.isLogin ? (
          <>
            <Link to="/favorite-contacts">
              <span>Favorites</span>
            </Link>
            <span onClick={handleLogout} className="mx-3">
              Logout
            </span>
          </>
        ) : (
          <span onClick={handleShowModalLogin}>Login</span>
        )}
      </div>
    </div>
  );
};

export default Header;
