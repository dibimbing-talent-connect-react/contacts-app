import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { EditContact } from "../../../utils/api";

const FormEditContact = ({
  triggerData,
  setTriggerData,
  handleCloseModal,
  dataContact,
  setDataContact,
}) => {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    nomor: "",
    info: "",
    id: "",
  });

  useEffect(() => {
    setFormData(dataContact);
  }, [dataContact]);

  const submitForm = async (e) => {
    e.preventDefault();
    await EditContact(formData);
    setFormData({ nama: "", alamat: "", nomor: "", info: "", id: "" });
    setTriggerData(!triggerData);
    setDataContact({});
    handleCloseModal();
  };

  return (
    <Form onSubmit={submitForm}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          value={formData.nama}
          onChange={(event) =>
            setFormData({ ...formData, nama: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Number</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Number"
          value={formData.nomor}
          onChange={(event) =>
            setFormData({ ...formData, nomor: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Address"
          value={formData.alamat}
          onChange={(event) =>
            setFormData({ ...formData, alamat: event.target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Info</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Info"
          value={formData.info}
          onChange={(event) =>
            setFormData({ ...formData, info: event.target.value })
          }
        />
      </Form.Group>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
        <Button variant="primary" type="submit">
          Edit Contact
        </Button>
      </Modal.Footer>
    </Form>
  );
};

export default FormEditContact;
