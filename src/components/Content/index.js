import React, { useEffect, useState } from "react";
import ContentStyle from "../../assets/styles/Content.module.css";
import ContactCard from "../ContactCard";
import { GetAllContacts, DeleteContactById } from "../../utils/api";
import { Button } from "react-bootstrap";
import ModalAddContact from "../ModalAddContact";
import FormAddContact from "../FormAddContact";

const Content = () => {
  const [dataContacts, setDataContacts] = useState([]);
  const [triggerData, setTriggerData] = useState(false);
  const [show, setShow] = useState(false);

  const handleGetAllContacts = async () => {
    await GetAllContacts().then((response) => setDataContacts(response.data));
  };

  const handleDeleteContact = async (id) => {
    await DeleteContactById(id);
    setTriggerData(!triggerData);
  };

  const handleShow = () => setShow(!show);

  useEffect(() => {
    handleGetAllContacts();
  }, [triggerData]);

  return (
    <div className="content">
      {/* <ModalAddContact show={show} handleClose={handleClose} /> */}

      {/* CSS module */}

      <Button variant="primary" onClick={handleShow}>
        Add contact
      </Button>

      {show && (
        <FormAddContact
          triggerData={triggerData}
          setTriggerData={setTriggerData}
        />
      )}

      <h2 styles={ContentStyle.title}>Contacts List</h2>
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
