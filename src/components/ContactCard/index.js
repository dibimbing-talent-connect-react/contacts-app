import Card from "react-bootstrap/Card";

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
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
