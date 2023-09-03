import React, { useEffect, useState } from "react";
import ContentStyle from "../../assets/styles/Content.module.css";
import ContactCard from "../ContactCard";
import { GetAllContacts, DeleteContactById } from "../../utils/api";
import { Button } from "react-bootstrap";
import ModalAddContact from "../ModalAddContact";

const Content = () => {
  const [dataContacts, setDataContacts] = useState([]);
  const [dataContact, setDataContact] = useState({});
  const [triggerData, setTriggerData] = useState(false);
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleGetAllContacts = async () => {
    await GetAllContacts().then((response) => setDataContacts(response.data));
  };

  const handleDeleteContact = async (id) => {
    await DeleteContactById(id);
    setTriggerData(!triggerData);
  };

  const getDataContact = (data) => {
    setDataContact(data);
    handleShow();
  };

  useEffect(() => {
    handleGetAllContacts();
  }, [triggerData]);

  return (
    <div className="content">
      <ModalAddContact
        show={show}
        handleClose={handleClose}
        triggerData={triggerData}
        setTriggerData={setTriggerData}
        dataContact={dataContact}
        setDataContact={setDataContact}
      />

      <div className="d-flex justify-content-between mb-3">
        {/* CSS module */}
        <h2 styles={ContentStyle.title}>Contacts List</h2>

        <Button variant="primary" onClick={handleShow}>
          Add contact
        </Button>
      </div>
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
            getDataContact={getDataContact}
          />
        ))}
      </div>
    </div>
  );
};

export default Content;
