import React from "react";
// import { DataContext } from "../../App";

const Header = () => {
  const titleStyle = {
    color: "black",
    fontWeight: "bolder",
    textAlign: "center",
    margin: 0,
  };

  // const angkaContext = useContext(DataContext);

  return (
    <div className="header">
      {/* inline style css */}
      <h1 style={titleStyle}>Contacts App</h1>
    </div>
  );
};

export default Header;
