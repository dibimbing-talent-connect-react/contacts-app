import React, { useEffect, useState } from "react";
import ContentStyle from "../../assets/styles/Content.module.css";
import ContactCard from "../ContactCard";
import { GetAllContacts, DeleteContactById } from "../../utils/api";

const Content = () => {
  const [dataContacts, setDataContacts] = useState([]);
  const [triggerData, setTriggerData] = useState(false);

  const handleGetAllContacts = async () => {
    await GetAllContacts().then((response) => setDataContacts(response.data));
  };

  const handleDeleteContact = async (id) => {
    await DeleteContactById(id);
    setTriggerData(!triggerData);
  };

  useEffect(() => {
    handleGetAllContacts();
  }, [triggerData]);

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
            id={contact.id}
            handleDeleteContact={handleDeleteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
