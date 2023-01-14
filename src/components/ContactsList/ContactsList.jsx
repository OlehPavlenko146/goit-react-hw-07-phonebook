import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectContacts, selectfilteredContacts } from 'redux/selectors';
import { ContactItem } from './ContactItem';
import { ListOfContacts, ContactsTitle } from './Contacts.List.styled';

export const ContactsList = ({ title }) => {
  const contacts = useSelector(selectContacts);

  const filteredContacts = useSelector(selectfilteredContacts);

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
