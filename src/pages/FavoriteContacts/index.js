import React, { useEffect, useState } from "react";
import { AddToFavoriteContact, GetAllFavoriteContacts } from "../../utils/api";
import ContactCard from "../../components/ContactCard";
import ContentStyle from "../../assets/styles/Content.module.css";

const FavoriteContacts = () => {
  const [favoriteContactsList, setFavoriteContactsList] = useState([]);
  const [triggerData, setTriggerData] = useState(false);

  const handleGetAllFavoriteContacts = async () => {
    await GetAllFavoriteContacts().then((response) =>
      setFavoriteContactsList(response.data)
    );
  };

  const handleFavoriteContact = async (data) => {
    const dataBody = {
      id: data.id,
      data: {
        favorite: !data.favorite,
      },
    };

    await AddToFavoriteContact(dataBody);
    setTriggerData(!triggerData);
  };

  useEffect(() => {
    handleGetAllFavoriteContacts();
  }, [triggerData]);

  return (
    <div className="favorite-contacts">
      <h2 styles={ContentStyle.title}>Favorite Contacts List</h2>
      <div className="contacts-list">
        {favoriteContactsList.map((contact, index) => (
          <ContactCard
            key={index}
            nama={contact.nama}
            nomor={contact.nomor}
            info={contact.info}
            alamat={contact.alamat}
            favorite={contact.favorite}
            id={contact.id}
            handleFavoriteContact={handleFavoriteContact}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoriteContacts;
