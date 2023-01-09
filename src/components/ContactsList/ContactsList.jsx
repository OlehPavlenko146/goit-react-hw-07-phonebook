import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { ListOfContacts, ContactsTitle } from './Contacts.List.styled';

export const ContactsList = ({ title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = !filter
    ? contacts
    : contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <>
      {contacts.length > 0 && (
        <ListOfContacts>
          <ContactsTitle>{title}</ContactsTitle>
          {filteredContacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          ))}
        </ListOfContacts>
      )}
    </>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
};
