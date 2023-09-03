import React from "react";
import { Link } from "react-router-dom";
// import { DataContext } from "../../App";

const Header = () => {
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
      {/* inline style css */}
      <h1 style={titleStyle}>Contacts App</h1>
      <div>
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
