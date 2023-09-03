import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Login } from "../../utils/api";
import Cookies from "js-cookie";
import { DataContext } from "../../App";

function ModalLogin({ show, handleClose }) {
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });
  const dataLogin = useContext(DataContext);

  const submitLogin = async (event) => {
    event.preventDefault();
    await Login(loginData).then((response) => {
      Cookies.set("access_token", response.data.access_token);
      dataLogin.setIsLogin(true);
    });
    setLoginData({
      name: "",
      password: "",
    });
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitLogin}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={loginData.name}
              onChange={(event) =>
                setLoginData({ ...loginData, name: event.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              value={loginData.password}
              onChange={(event) =>
                setLoginData({ ...loginData, password: event.target.value })
              }
            />
          </Form.Group>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;
