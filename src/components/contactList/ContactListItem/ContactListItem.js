import React from "react";

const ContactListItem = ({ name, number, contactId, deleteContact }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => deleteContact(contactId)}>
        Delete
      </button>
    </li>
  );
};

export default ContactListItem;
