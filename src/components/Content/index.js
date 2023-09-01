import React from "react";
import ContentStyle from "../../assets/styles/Content.module.css";
import ContactCard from "../ContactCard";

const Content = () => {
  console.log(ContentStyle);

  return (
    <div className="content">
      {/* <h2 style={ContentStyle.title}>Daftar Kontak</h2> */}
      <h2>Contact List</h2>
      <ContactCard />
    </div>
  );
};

export default Content;
