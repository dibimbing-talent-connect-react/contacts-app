import Card from "react-bootstrap/Card";
import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";

const ContactCard = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.nama}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.nomor}</Card.Subtitle>
        <Card.Text>
          {props.info} - {props.alamat}
        </Card.Text>
        <AiTwotoneEdit
          size={25}
          cursor="pointer"
          onClick={() =>
            props.getDataContact({
              nama: props.nama,
              nomor: props.nomor,
              info: props.info,
              alamat: props.alamat,
              id: props.id,
            })
          }
        />
        <AiFillDelete
          size={25}
          onClick={() => props.handleDeleteContact(props.id)}
          cursor="pointer"
          className="mx-4"
        />
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
