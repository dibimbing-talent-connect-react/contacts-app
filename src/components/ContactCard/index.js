import { useContext } from "react";
import { DataContext } from "../../App";
import Card from "react-bootstrap/Card";
import {
  AiFillDelete,
  AiOutlineStar,
  AiFillStar,
  AiTwotoneEdit,
} from "react-icons/ai";

const ContactCard = (props) => {
  const dataLogin = useContext(DataContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{props.nama}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.nomor}</Card.Subtitle>
        <Card.Text>
          {props.info} - {props.alamat}
        </Card.Text>
        {dataLogin.isLogin && (
          <>
            {props.handleDeleteContact && props.getDataContact && (
              <>
                <AiTwotoneEdit
                  size={25}
                  cursor="pointer"
                  onClick={() =>
                    props.getDataContact({
                      nama: props.nama,
                      nomor: props.nomor,
                      info: props.info,
                      alamat: props.alamat,
                      favorite: props.favorite,
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
              </>
            )}

            {props.favorite ? (
              <AiFillStar
                size={25}
                cursor="pointer"
                onClick={() =>
                  props.handleFavoriteContact({
                    id: props.id,
                    favorite: props.favorite,
                  })
                }
              />
            ) : (
              <AiOutlineStar
                size={25}
                cursor="pointer"
                onClick={() =>
                  props.handleFavoriteContact({
                    id: props.id,
                    favorite: props.favorite,
                  })
                }
              />
            )}
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
