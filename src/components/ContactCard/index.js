import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";

const ContactCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.nama}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.nomor}</Card.Subtitle>
        <Card.Text>
          {props.info} - {props.alamat}
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <AiFillDelete
          size={25}
          onClick={() => props.handleDeleteContact(props.id)}
          cursor="pointer"
        />
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
