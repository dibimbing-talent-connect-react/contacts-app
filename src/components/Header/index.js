import React from "react";

const Header = () => {
  const titleStyle = {
    color: "black",
    fontWeight: "bolder",
    textAlign: "center",
    margin: 0,
  };

  return (
    <div className="header">
      {/* inline style css */}
      <h1 style={titleStyle}>Contacts App</h1>
    </div>
  );
};

export default Header;
