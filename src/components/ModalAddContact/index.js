import React from "react";
import { Modal } from "react-bootstrap";
import FormAddContact from "../FormContact/AddContact";
import FormEditContact from "../FormContact/EditContact";

const ModalAddContact = ({
  show,
  handleClose,
  triggerData,
  setTriggerData,
  dataContact,
  setDataContact,
}) => {
  return (
    <Modal show={show} onHide={() => handleClose()} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {dataContact.nama ? "Edit Contact" : "Add Contact"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dataContact.nama ? (
          <FormEditContact
            triggerData={triggerData}
            setTriggerData={setTriggerData}
            handleCloseModal={handleClose}
            dataContact={dataContact}
            setDataContact={setDataContact}
          />
        ) : (
          <FormAddContact
            triggerData={triggerData}
            setTriggerData={setTriggerData}
            handleCloseModal={handleClose}
          />
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ModalAddContact;
