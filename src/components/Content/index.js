import React, { useEffect, useState } from "react";
import ContentStyle from "../../assets/styles/Content.module.css";
import ContactCard from "../ContactCard";
import { data } from "../../utils/data";

const Content = () => {
  const [dataContacts, setDataContacts] = useState([]);

  useEffect(() => {
    setDataContacts(data);
  }, []);

  return (
    <div className="content">
      {/* CSS module */}
      <h2 styles={ContentStyle.title}>Daftar Kontak</h2>
      <div className="contacts-list">
        {dataContacts.map((contact, index) => (
          <ContactCard
            key={index}
            nama={contact.nama}
            nomor={contact.nomor}
            info={contact.info}
            alamat={contact.alamat}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
