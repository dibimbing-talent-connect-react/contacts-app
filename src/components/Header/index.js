import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalLogin from "../ModalLogin";

const Header = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleShowModalLogin = () => setShowModalLogin(true);
  const handleCloseModalLogin = () => setShowModalLogin(false);

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
        <span onClick={handleShowModalLogin}>Login</span>
        <Link to="/">
          <span className="mx-3">Home</span>
        </Link>
        <Link to="/favorite-contacts">
          <span>Favorites</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
