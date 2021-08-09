import React from "react";

const ContactListItem = ({ name, number }) => {
  return (
    <li>
      {name}: {number}
    </li>
  );
};

export default ContactListItem;
